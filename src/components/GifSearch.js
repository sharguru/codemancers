import React ,{useState,useEffect} from 'react'
import axios from "../axios"
const GifSearch = ({getGif}) => {
    const [gifTerm, setGifTerm] = useState("")
    const [giphyData, setGiphyData] = useState({})

    useEffect(() => {
      //api for getting trending GIFs'
        const fetchData = async () =>{
            var res = await axios.get(`/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}`)
            setGiphyData(res.data)
        }
        fetchData()
   },[])
   const searchGif = async()=>{
       const res = await axios.get(`/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${gifTerm}`)
       setGiphyData(res.data)
   }
    return (
        <div className="gifSearch">
            <div className="form">
                <input placeholder="Search Gif" name="gifInput" value={gifTerm} onChange={(e)=>setGifTerm(e.target.value)} className="input" autoComplete="off"/>
                <input type="submit" value="Search" onClick={searchGif} className="gifBtn"/>
            </div>
            <div className="gifResults">
                {giphyData.hasOwnProperty('data') && giphyData.data.map(gif => <img key={gif.id} src={gif.images.fixed_height_small_still.url} alt={gif.title} className="gifItem" onClick={()=>getGif(gif)} />)}
            </div>
        </div>
    )
}

export default GifSearch
