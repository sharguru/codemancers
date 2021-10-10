import './App.css';
import Title from "./components/Title";
import Popup from "./components/Popup";
import Feed from "./components/Feed";
import React,{useState} from "react"
function App() {
   const [isOpen, setIsOpen] = useState(false)
   const [feedData, setFeedData] = useState([])

  const handleClose = ()=>{
    setIsOpen(!isOpen)
  }

  const feedPost =(feedGif)=>{
    setFeedData(preval=>[feedGif,...preval])
    setIsOpen(!isOpen)
  }

  return (
   <>
   <div className="topBar">
      <Title/>
      <button onClick={()=>setIsOpen(true)} className="createButton topContent">Create Post</button>
   </div>
   <div className="createPost">
      {isOpen && <Popup handleClose={handleClose} getFeedData ={feedPost}/>}
   </div>
  {!isOpen &&<div className="feedPosts">
              <Feed feedData={feedData}/>
            </div>}
  
    
   </>
  );
}

export default App;
