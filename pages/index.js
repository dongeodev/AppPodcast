import React, {Component} from 'react'
import Layout from '../components/Layout'
import ChannelsGrid from '../components/channels-grip'
import 'isomorphic-fetch'


class Home extends Component{
  static async getInitialProps(){
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()

    return {channels}
  }
  render(){
    const {channels} = this.props
    return(
      <Layout title='Podcasts'>
        <ChannelsGrid channels={channels} series='series'/>
      </Layout>
    ) 
    
  }
}

export default Home