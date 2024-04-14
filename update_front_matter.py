import os
import re
import subprocess
import sys

# Function to get list of authors who modified a file
def get_authors(file_path):
    git_command = ["git", "log", "--pretty=format:%an", file_path]
    result = subprocess.run(git_command, stdout=subprocess.PIPE)
    authors = set(result.stdout.decode("utf-8").splitlines())
    authors.remove("github-actions[bot]")
    return ", ".join(authors)

# Function to update front matter of markdown files
def update_front_matter(folder_path):
    for root, dirs, files in os.walk(folder_path):
        print("[ " + str(root).removeprefix(folder_path.removesuffix("/")) + " ] - Found directory.")
        for file in files:
            if file.endswith((".md", ".mdx")):
                file_path = os.path.join(root, file)
                folder = root.removeprefix(folder_path)
                if folder != "":
                    folder += "/"
                file_str = "[ " + folder + file + " ] - "
                print(file_str + "Found file.")
                with open(file_path, "r+", encoding="utf-8") as f:
                    content = f.read()
                    # Check if front matter exists
                    front_matter_match = re.match(
                        r"^---\s*\n(.*?)---\s*\n", content, re.DOTALL
                    )
                    if front_matter_match:
                        # Front matter is present
                        print(file_str + "File contains front matter.")
                        front_matter = front_matter_match.group(1)
                        # Check if authors section exists
                        authors_section_match = re.search(
                            r"^authors:(.*?)\n(?:\w+:|$)",
                            front_matter,
                            re.MULTILINE | re.DOTALL,
                        )
                        if authors_section_match:
                            # Authors section exists, overwrite it
                            print(file_str + "Front matter contains authors - it will be overwritten.")
                            authors_line = "authors: {}\n".format(
                                get_authors(file_path)
                            )
                            updated_front_matter = re.sub(
                                r"^authors:(.*?)\n(?:\w+:|$)",
                                authors_line,
                                front_matter,
                                flags=re.MULTILINE | re.DOTALL,
                            )
                        else:
                            # Authors section doesn't exist, add it
                            print(file_str + "Front matter does not contain authors - it will be appended.")
                            authors_line = "\nauthors: {}\n".format(
                                get_authors(file_path)
                            )
                            updated_front_matter = "{}{}".format(
                                front_matter.rstrip(), authors_line
                            )
                        # Update content with modified front matter
                        new_content = re.sub(
                            r"^---\s*\n.*?---\s*\n",
                            "---\n{}---\n".format(updated_front_matter),
                            content,
                            count=1,
                            flags=re.DOTALL,
                        )
                        f.seek(0)
                        f.write(new_content)
                        f.truncate()
                        print(file_str + "Front matter updated successfully.")
                    else:
                        # No front matter found
                        print(file_str + "File does not contain front matter.")
                        f.seek(0, 0)
                        f.write(
                            "---\nauthors: {}\n---\n".format(get_authors(file_path))
                        )
                        f.write(content)
                        print(file_str + "Front matter added successfully.")

def main():
    folder = sys.argv[1]
    print("[ ] - Updating front matter.")
    update_front_matter(sys.argv[1])
    print("[ ] - Finished.")

if __name__ == "__main__":
    main()
