import React,{useState} from 'react'
import GifSearch from "./GifSearch";

const Popup = ({handleClose,getFeedData}) => {

const [isGifSearchOpen, setIsGifSearchOpen] = useState(false)
const [selectedGif , setSelectedGif] = useState([])
const [postInput, setPostInput] = useState("")
// const [giphyData, setGiphyData] = useState({})

const getGif = (gif)=>{
    setSelectedGif(gif)
}


const handleChange = (e)=> setPostInput(e.target.value)

const handleSubmit =()=>{
    if (postInput === "") {
        alert("Enter some message")
    }else if(selectedGif.length === 0){
        alert("Choose some GIF to Post")
    }else{
        var feedGif = {
            postInput,
            selectedGif
        }
        getFeedData(feedGif)
        setIsGifSearchOpen(!isGifSearchOpen)
    }
    
}

    return (
        <>
        <div className="popup">
            <button className="closeButton" onClick={handleClose}>x</button>
                <div className="postMsg">
                    <input type="text" placeholder="Write something here!" onChange={handleChange} value={postInput} className="input"/>  
                    {selectedGif.hasOwnProperty('id')  && <img src={selectedGif.images.downsized_medium.url} alt={selectedGif.title} className="gifItem"/>  }
                </div>
                <button onClick={()=>setIsGifSearchOpen(!isGifSearchOpen)} className="gifBtn"> Add GIF</button>
                <input type="submit" value="Post" onClick={handleSubmit} className="postBtn" />

        </div>
        {isGifSearchOpen && <GifSearch getGif ={getGif}/>}

        </>
    )
}

export default Popup
