import React from "react"
import './index.css'
import { rhythm } from "../utils/typography"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DefaultLayout extends React.Component {

  componentDidMount(){
    const video = document.querySelector("video");
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      video.removeAttribute(`autoPlay`);
      video.pause();
    }
  }

  render() {
    return (
      <div>
              <header>
        <video autoPlay playsInline muted loop>
          <source src="http://meinakalayeh.com/assets/video/IMG_7914.mov" />
        </video>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
          <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%" >
            <rect x="0" y="0" width="100%" height="100%" />
          <text x="72"  y="50">DRIELY</text>
            </mask>
        </defs>
       <rect x="0" y="0" width="100%" height="100%" />
        </svg>
      </header>
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout