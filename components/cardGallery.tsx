import { Chip } from '@nextui-org/react'

export default function CardGallery( { children } ) {


    return (
        <div
            // @ts-ignore
            // align='center'
            className='flex-container'
            // style={{backgroundColor:"#FF0000"}}
        >
            {children}
        </div>
    )

}