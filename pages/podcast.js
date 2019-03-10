import React, {Component} from 'react'
import 'isomorphic-fetch'
import Podcast from '../components/podcast'
import Head from 'next/head'

class Podcasts extends Component {
  static async getInitialProps({ query }){
    let clipId = query.id
    let req = await fetch(`https://api.audioboom.com/audio_clips/${clipId}.mp3`)
    let dataAudio = await req.json()
    let clip = dataAudio.body.audio_clip

    return {clip}
  }
  
  render(){
    const { clip }= this.props
    return(
      <div>
      <Head>
        <title>Geo Podcasts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        <link rel="shortcut icon" type="image/x-icon" href="/static/podcasts.png"></link>
      </Head>
      <Podcast clip={clip}/>
          <style jsx global>{`
   body {
      font-family: 'Roboto', sans-serif;
      margin: 0px;
      
    }
    `}</style>
    </div>
  
    )
  }
}

export default Podcasts