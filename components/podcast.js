import React from 'react'
import { Link } from '../routes'
import slug from '../helpers/slug'

function Podcast (props){
    
  const { clip } = props

    return (
  <div>
      
      <div className='modal'>
        <div className='clip'>
          <nav>
            <Link route='channel'
                  params={{
                    slug: slug(clip.channel.title),
                    id: clip.channel.id
                  }}
            >
              <a className='close'>&lt; Volver</a>
            </Link>
          </nav>
        <div className='landcaspe'>
          <picture>
            <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
          </picture>

            <div className='titles'>
            <h3>{ clip.title }</h3>
            <h6>{ clip.channel.title }</h6>
            </div>
        </div>  
          <div className='player'>
            <audio controls autoPlay={true}>
              <source src={clip.urls.high_mp3} type='audio/mpeg' />
            </audio>
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          background: none;
        }
        nav a {
          display: inline-block;
          padding: 15px;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: #8756ca;
          color: white;
        }
        .landcaspe{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
        }
       

        .player {
          padding: 20px;
        }
        .titles{
          background: rgba(0,0,0,0.2);
          text-align: center;
          padding:10px;

        }
        h3 {
          font-size: 1em;  
          margin: 0;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
         
          width: 100%;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
        @media screen and (max-height:420px){
          picture div{
          background-size: contain;
          }
          .landcaspe{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
          .titles{
          width:60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 40%;
          margin-top:50px;
        }
          
      }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
  
      `}</style>
  </div>
    
  )
}

export default Podcast