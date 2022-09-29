import { Stack, Typography,Button, CardMedia } from '@mui/material'
import logo from './youtube.png'

const Card= ( {pass , handleToggle}  ) => {
    
    return(
        <>
        
            <Stack sx={{ backgroundColor:'#101010', padding:'5px' }} m={2} component={Button}
              onClick={handleToggle}>
                <CardMedia component='img' src={pass.thumbnails.high.url} alt={logo} height='300px' sx={{ width:{md:'300px',xs:'450px'} }} />
                <Typography color='white' align='center' mt={1} variant='h5'> {pass.title.slice(0,15)} </Typography>
            </Stack>
        
        </>
    )
}

export default Card













/*import { Stack, Typography,Button } from '@mui/material'
import logo from './youtube.png'

const Card= ( {pass , handleToggle}  ) => {
    
    return(
        <>
        
            <Stack sx={{ backgroundColor:'#101010', padding:'5px' }} m={2} component={Button}
              onClick={handleToggle}>
                <img src={pass.thumbnails.high.url} alt={logo} height='300px' width='300px' />
                <Typography color='white' align='center' mt={1} variant='h5'> {pass.title.slice(0,15)} </Typography>
            </Stack>
        
        </>
    )
}

export default Card
*/
