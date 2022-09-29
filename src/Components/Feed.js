import { Stack, Box } from '@mui/material'
//import fetchApi from './CallApi'
import  SideBar  from './SideBar'
import Videos from'./Videos'
import Player from './Player'


const Feed=( {array, setArray, selected, setSelected, toggler, handleToggle, video, handleToggleside} )=>{

/*
    const [ array, setArray ] = useState( [] ) 
    const [ selected, setSelected ] = useState( 'React.Js' )
    
    useEffect( ()=>{
        fetchApi( selected ).then( (res)=> setArray( res.data.items ))
        console.log( array )
    },[ selected ] )
*/
    return(
        <>
        <Stack backgroundColor='#101010' direction='row'>
            
            <Box m={1} sx={{ width:'15vw', backgroundColor:'black', display:'flex', justifyContent:'center', flexWrap:'wrap' }} p={1}>
                <SideBar selected={selected} setSelected={setSelected} handleToggleside={handleToggleside} />
            </Box>

            <Box  sx={{ width:'85vw', backgroundColor:'black' }} p={1} mt={1} >
                {
                    toggler ?
                    <Player video={video} />
                 :  <div></div>
    
                }
                <Videos array={array} selected={selected} handleToggle={handleToggle} />
            </Box>

        </Stack>
        </>
    )
}

export default Feed