import { SidebarData } from "./SidebarData"
import { Stack,Typography,Button } from '@mui/material'


const SideBar=({ selected,handleToggleside })=>{
    
/*    const show = SidebarData.map( a=> <Stack variant='outlined' direction='row' gap={ {md:2} }
    onClick={ ()=> handleToggleside( a.name ) }
    sx={ selected === a.name ? { color:'red' }:{ color:'white' } } key={a.name} > 
    <span style={ {marginTop:'4PX' } } > {a.icon} </span>
    <Typography variant='h6'> {a.name} </Typography> 
    </Stack> )
*/

    const show = SidebarData.map( a=> <Button variant='outlined'
    onClick={ ()=> handleToggleside( a.name ) }
    sx={ selected === a.name ? { color:'red', borderColor:'black' }:{ color:'white',borderColor:'black' } } key={a.name} 
    startIcon={a.icon}>
        <Typography sx={{ fontSize:{ md:'21px' },  }} > {a.name} </Typography>
    </Button> )

    return(
        <>
        
        <Stack direction='column' gap={4} sx={{ marginTop:'20%' }} >
            { show }
        </Stack>
        
        </>
    )
}

export default SideBar
