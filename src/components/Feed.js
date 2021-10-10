import React from 'react'

const Feed = ({feedData}) => {
    return (
        <>
        {feedData.map(gif=> <div className="post" key ={gif.selectedGif.id}> 
        <h4>{gif.postInput}</h4>
        <img src={gif.selectedGif.images.original.url} alt={gif.selectedGif.title} className="postImg"/>
      </div>)}
      </>
    )
}

export default Feed