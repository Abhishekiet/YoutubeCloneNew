import { SidebarData } from "./SidebarData"
import { Stack,Typography } from '@mui/material'


const SideBar=({ selected,handleToggleside })=>{
    
    const show = SidebarData.map( a=> <Stack variant='outlined' direction='row' gap={ {md:2} }
    onClick={ ()=> handleToggleside( a.name ) }
    sx={ selected === a.name ? { color:'red' }:{ color:'white' } } key={a.name} > 
    <span style={ {marginTop:'4PX' } } > {a.icon} </span>
    <Typography variant='h6'> {a.name} </Typography> 
    </Stack> )

    return(
        <>
        
        <Stack direction='column' gap={4} sx={{ marginTop:'20%' }} >
            { show }
        </Stack>
        
        </>
    )
}

export default SideBar