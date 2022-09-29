import { useState,useEffect } from 'react'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import fetchApi from './Components/CallApi'



function App() {

  const [ search, setSearch ] = useState( '' )
  const [ video, setVideo ] = useState()
  
  const [ array, setArray ] = useState( [] ) 
  const [ selected, setSelected ] = useState( 'React.Js' )
  const [ toggler, setToggler ] = useState( false )
  
  useEffect( ()=>{
      fetchApi( selected ).then( (res)=> setArray( res.data.items ))
  },[ selected ] )

  const handleSearch=(e)=>{
    setSearch( e.target.value )
  }

  const handlesearchButon=()=>{
    setSelected( search )
    setToggler( false )
  }

  const handleToggle=( video )=>{
   setToggler( true )
   setVideo( video )
  }

  const handleToggleside=(selectedVal)=>{
    setSelected( selectedVal )
    setToggler( false )
  }


  return (
    <>
    
    < Navbar handleSearch={handleSearch} handlesearchButon={handlesearchButon}/>

    
    < Feed array={array} setArray={setArray} selected={selected} setSelected={setSelected} toggler={toggler} 
      handleToggle={ handleToggle } video={video} handleToggleside={handleToggleside}/>
    
    </>
  )
}

export default App;
