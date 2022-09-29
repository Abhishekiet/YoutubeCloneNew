import { Paper, TextField, Stack, Typography, Button} from '@mui/material'
import logo from './youtube.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Navbar=({ handleSearch,handlesearchButon })=>{
    return(
        <>
        <Stack direction='row' backgroundColor='black' p={3} sx={{ display:'flex', alignItems:'center' }} >

            <img src={logo} height='60px' width='80px' alt='' style={{marginLeft:'5%'}} />
            <Typography variant='h5' color='white' sx={{marginLeft:{md:'6%',xs:'0%',}, fontFamily: "Georgia"}} > Abhishek Dameria </Typography>

            <TextField sx={{ borderRadius:'80px',borderColor:'black', marginLeft:{md:'45%'} }} component= {Paper} 
             InputProps={{ endAdornment:( <Button onClick={handlesearchButon} style={{ backgroundColor:'white',borderColor:'white' }} > <SearchRoundedIcon sx={{color:'red'}}/> </Button> ) }}
             onChange={handleSearch} placeholder='Seach...'
            />
                            
        </Stack>
        </>
    )
}

export default Navbar 

/*

            <Paper sx={{ backgroundColor:'white',borderRadius:'80px', padding:'20px', paddingRight:'0', height:'10px', marginLeft:{md:'50%',xs:'1%'} }}>
                <TextField variant='standard' sx={{ marginTop:'-15px' }} placeholder='Seach...'
                    onChange={handleSearch}/>
                <Button onClick={handlesearchButon} > <SearchRoundedIcon sx={{ marginTop:'-15px', color:'red' }} /> </Button>
            </Paper>

*/
