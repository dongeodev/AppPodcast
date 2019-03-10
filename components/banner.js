import React from 'react'

function Banner (props){
  return(
    <div className="banner" style={{ backgroundImage: `url(${props.banner})` }} >
    
    <style jsx>{`
    
      .banner {
        width: 100%;
        padding-bottom: 25%;
        background-position: 50% 50%;
        background-size: cover;
        background-color: #aaa;
        
      }

   
    `}</style>
    </div>
  )
}

export default Banner