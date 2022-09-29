import { useState } from 'react'


const NewVideos =( { selected } )=>{
    
    const [ search, setSearch ] = useState( selected )
    const[ array, setArray ] = useState( [] )
    console.log( selected )

    return(
        <>
         <h1 style={{ color:'white' }}> { selected } </h1> 
        </>
    )
}
export default NewVideos