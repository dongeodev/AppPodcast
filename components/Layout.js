import React from 'react'
import Head from 'next/head'
import { Link } from '../routes'
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function Layout (props){
  return(
    <div>
      <div>
        <Head>
          <title>Geo Podcasts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
          <link rel="shortcut icon" type="image/x-icon" href="/static/podcasts.png"></link>
        </Head>
      </div>
      <header>
        <Link route='home'><a><img src='/static/home.svg' width={20} height={20}/></a></Link>
        <h4>{props.title}</h4>
        </header>

       {props.children}

    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        position: relative;
        color: #fff;
        background: #8756ca ;
        padding: 15px;
        text-align: center;
        font-weight: bold;
        justify-content: center;
      }
      header a{
        text-decoration: none;
        color: #fff;
        position: absolute;
        top: 15px;
        left: 15px;
      }

      header h4{
        margin: 0px;
      }
    `}</style>
    <style jsx global>{`
    html, body {
      font-family: 'Roboto', sans-serif;
      margin: 0px;
    }
    /* Make clicks pass-through */
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: #29d;

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #29d, 0 0 5px #29d;
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: #29d;
      border-left-color: #29d;
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `}</style>
    
    </div>
  )
  
}

export default Layout