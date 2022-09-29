import { Stack, Typography} from '@mui/material'
import Card from './Card'

const Videos=({ array , selected, handleToggle})=>{

    const show = array.map( (a,index)=> <Card pass={a.snippet} handleToggle={()=>handleToggle(a)  } key={index} />  )
    return(
        <Stack direction='column' mt={4} >
            
            <Typography variant='h4' m={ 1 } color='white'> <span style={{ color:'red' }}> {selected} </span> Videos </Typography>
            
            
            <Stack direction='row' sx={{display:'flex' , flexWrap:'wrap' }} >
                 { show  } 
            </Stack>          

        </Stack>
    )
}
export default Videos