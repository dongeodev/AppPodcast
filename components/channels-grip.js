import React from 'react'
import { Link } from '../routes'
import slug from '../helpers/slug'
function ChannelsGrid (props){
  
  return(
    <div className={`channels ${props.layoutSeries}`}>
    {
    props.channels.map((channel)=>(
      <Link route='channel'
            params={{
              slug: slug(channel.title),
              id: channel.id
            
            }} 
            key={channel.id} 
            prefetch>
      <a className='channel'>    
          <img src={channel.urls.logo_image.original} alt='logo'/>
          <h2>{channel.title}</h2>
      </a>
      </Link>
      ))
    }
        <style jsx>{`
      .channels{
        display: grid;
        grid-gap: 15px;
        padding: 15px;
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
      }
      .channels.series{
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); 
      }
      .channel{
        border-radius: 3px;
        margin-bottom: 0.5em;
        text-decoration: none;
      } 
      .channel img {
        width: 100%;
      }
      h2 {
      padding: 5px;
      font-weight: 600;
      text-align: center;
      font-size: 0.9em;
      margin:0;
      color: #000;
      } 
      @media screen and (max-width: 420px){
       .channels{
        grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
       } 
       .channels.series{
        grid-template-columns: repeat(auto-fill, minmax(160px,1fr)); 
      }
      }

    `}</style>

      
    </div>

  )
}

export default ChannelsGrid

