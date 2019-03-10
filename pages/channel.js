import React, { Component } from 'react'
import Layout from '../components/Layout';
import 'isomorphic-fetch'
import ChannelsGrid from '../components/channels-grip';
import Banner from '../components/banner';
import PodcastsList from '../components/podcasts-list';
import Error from 'next/error'
import PodcastPlayer from '../components/podcast';

class Channel extends Component{

  static async getInitialProps({ query, res }){
    let idChannel = query.id
    try{
    let [ reqChannel, reqSeries, reqAudios]= await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)

    ])

    if(reqChannel.status >= 400){
      res.statusCode = reqChannel.status  //le aviso a next el status code
      return {channel: null, audioClips: null, series: null, statusCode: reqChannel.status}

    }
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudios.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return { channel, audioClips, series, statusCode: 200 }
  } catch(e){
    return {channel: null, audioClips: null, series: null, statusCode: 503}
  }
  }

  
  render(){
    const { channel, audioClips, series, statusCode } = this.props

    if (statusCode !== 200){
      return( <Error statusCode={statusCode}/>)
    }
    return (
       <Layout title={channel.title}>
            <Banner banner={channel.urls.banner_image.original} title={channel.title}/>
        { series.length > 0 &&
          <div>
            <h2>Series</h2>
            <ChannelsGrid channels={series} layoutSeries='series' />
          </div>
        }
            <PodcastsList audioClips={audioClips} />

       

     <style jsx>{`
      
      h1 {
        font-weight: 600;
        padding: 15px;
      }
      h2 {
        padding: 5px;
        margin: 0;
        text-align: center;
      }

      
    `}</style>
      </Layout>
    )

  }
}


export default Channel