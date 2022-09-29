import { Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'

const Player=({video})=>{
    return(
        <>
                
            <Stack backgroundColor='#101010' width='93%' p={3} justifyContent='center' >
                
                <ReactPlayer url = { `https://www.youtube.com/watch?v=${video.id.videoId}`} 
                width='100%' height='550px' controls />
                <Typography variant='h4' color='white' m={1}> {video.snippet.title} </Typography>
            
            </Stack>

        
        </>
    )
}

export default Player