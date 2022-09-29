import axios from 'axios' ;

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'b1f6392363mshec6b7862e77edf7p1f478bjsnd5758242112a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

 const fetchApi= async ( searchText )=>{
  const data = await axios.get( `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchText}`  ,options )
  return data
}

export default fetchApi

