import React from "react"
import Img from "gatsby-image"
import { render } from 'react-dom';
import Rnd from 'react-rnd';
import { rhythm } from "../utils/typography"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuClickBg from '../MenuClickBg';

class Index extends React.Component {

  componentDidMount(){
    document.addEventListener('contextmenu', event => event.preventDefault());
  }

  render() {
    const images = this.props.data.allImageSharp.edges
    const sizes = this.props.data.sizes.sizes
    const resolutions = this.props.data.resolution.resolutions
    const cropDefault = this.props.data.cropDefault.resize
    const cropBottomLeft = this.props.data.cropBottomLeft.resize
    const cropEntropy = this.props.data.cropEntropy.resize
    const cropCenter = this.props.data.cropCenter.resize
    const sizesDuotoneOriginal = this.props.data.sizesDuotoneOriginal.sizes
    const sizesDuotone25 = this.props.data.sizesDuotone25.sizes
    const sizesDuotone50 = this.props.data.sizesDuotone50.sizes
    const sizesDuotone75 = this.props.data.sizesDuotone75.sizes
    const sizesDuotone = this.props.data.sizesDuotone.sizes

    return (
      <main className="main">
        <div className='demo__info' style={{
            clear: `left`
          }}>
         <div>
          <h1
            style={{
              margin: 0,
              fontWeight: `normal`,
            }}
          >
            driely.
          </h1>
        </div>
      </div>
      <nav className='nav'>
      <h1><a href='mailto:driely.vierga@gmail.com'>driely.vierga@gmail.com</a></h1>
        
      </nav>
      <div className='slides'>
        <article className='slide indigo' ref={(article) => { this.Indigo = article; }}>
        <div className='article-main-container'>
        <h2
          style={{
            clear: `left`,
            paddingTop: rhythm(2),
          }}
        >
          
            <code>
              <strong>draggable</strong>
            </code>
      
        </h2>

        <p>
          Easily drag images.
        </p>
        <div className="react-draggable-container"  style={{ ...styles.ul, ...styles.row }} >
          {images.map(image => (
        <Rnd
          key={image.node.resize.src}
          lockAspectRatio={true}
          default={{
                      x: Math.floor(Math.random() * 1000),
                      y: Math.floor(Math.random() * 250),
                      width: 150,
                      height: 'auto'
                    }}>
            <img draggable={false} 
              className="react-draggable-image" 
              src={image.node.sizes.src} 
              key={image.node.sizes.src} />
              <MuiThemeProvider>
                <MenuClickBg src={image.node.sizes.src} index={images.indexOf(image)} ref={(contextImage) => { image.node.sizes.src = contextImage; }}   />
              </MuiThemeProvider> 
          </Rnd>
          ))}
        </div>
        </div>
        </article>
        <article className='slide blue' ref={(article) => { this.Blue = article; }}>
        <div className='article-main-container'>
        <h3>
          <code>
            <small>resize(width: 240, height: 240, rotate: 180)</small>
          </code>
        </h3>

        <ul style={{ ...styles.ul, ...styles.row }}>
          {images.map(image => (
            <li className='image-item' style={styles.column20} key={image.node.resize.src}>
              <img src={image.node.resize.src} />
              <MuiThemeProvider>
                <MenuClickBg src={image.node.sizes.src} index={images.indexOf(image)} ref={(contextImage) => { image.node.sizes.src = contextImage; }}   />
              </MuiThemeProvider> 
            </li>
          ))}
        </ul>
        </div>
        </article>
        <article className='slide green' ref={(article) => { this.Green = article; }}>
        <div className='article-main-container'>
        <h2
          style={{
            clear: `left`,
            paddingTop: rhythm(2),
          }}
        >
          We also expose all of Sharp
          {`'`}
          s
          {` `}
          <a href="http://sharp.dimens.io/en/stable/api-resize/#crop">
            <code>crop</code>
          </a>
          {` `}
          options with <code>cropFocus</code>.
        </h2>
        <p>
          The default is
          <code>ATTENTION</code>, which the Sharp documentation describes as
          {` "`}focus on the region with the highest luminance frequency, colour
          saturation and presence of skin tones{`"`} – which is why we actually
          see Mr. Gatsby toasting to us in the first thumbnail:
        </p>

        <ul style={{ ...styles.ul, ...styles.row }}>
          <li className="image-item" style={styles.column25}>
            <img src={cropDefault.src} />
              <MuiThemeProvider>
                <MenuClickBg src={cropBottomLeft.src}    />
              </MuiThemeProvider>
          </li>
          <li className="image-item" style={styles.column25}>
            <img src={cropBottomLeft.src} />
              <MuiThemeProvider>
                <MenuClickBg src={cropBottomLeft.src}    />
              </MuiThemeProvider> 
            <p>
              <small>
                <code>cropFocus: SOUTHWEST</code>
              </small>
            </p>
          </li>
          <li  className="image-item" style={styles.column25}>
            <img src={cropEntropy.src} />
              <MuiThemeProvider>
                <MenuClickBg src={cropBottomLeft.src}    />
              </MuiThemeProvider> 
            <p>
              <small>
                <code>cropFocus: ENTROPY</code>
              </small>
            </p>
          </li>
          <li style={styles.column25}>
            <img src={cropCenter.src} />
            <p>
              <small>
                <code>cropFocus: CENTER</code>
              </small>
            </p>
          </li>
        </ul>
        </div>
        </article>
        <article className='slide yellow'  ref={(article) => { this.Yellow = article; }}>
        <div className='article-main-container'>
        <p>
          The <code>duotone</code> option (see
          {` `}
          <a href="https://alistapart.com/article/finessing-fecolormatrix">I</a>
          ,
          {` `}
          <a href="http://blog.72lions.com/blog/2015/7/7/duotone-in-js">II</a>
          ,
          {` `}
          <a href="https://ines.io/blog/dynamic-duotone-svg-jade">III</a>
          ), given two hex colors
          {` `}
          <code>shadow</code>
          {` `}
          and <code>highlight</code> defining start and end color of the duotone
          gradient, converts the source image colors to match a gradient color
          chosen based on each pixels relative luminance.
        </p>

        <p>
          The <code>toFormat</code> option lets you convert the source image to
          another image format. We use "PNG" here to ensure that the duotoned
          image does not show any JPG artifacts.
        </p>
        <div className='coursel-container'>
        <h3>
          <small>
            sizes(duotone:
            {` `}
            {`{ `}
            highlight: "#f00e2e", shadow: "#192550" {`}`}, toFormat: PNG)
          </small>
        </h3>

        <Img sizes={sizes} />

        <h3 style={{ marginTop: rhythm(2) }}>
          <small>
            sizes(duotone:
            {` `}
            {`{ `}
            highlight: "#0ec4f1", shadow: "#192550", opacity: 50 {`}`})
          </small>
        </h3>

        <div className="row clearfix" style={styles.row}>
          <div className="span_4 column" style={styles.column20}>
            <Img sizes={sizesDuotoneOriginal} />
              <MuiThemeProvider>
                <MenuClickBg src={sizesDuotoneOriginal.src}    />
              </MuiThemeProvider> 
          </div>
          <div className="span_4 column" style={styles.column20}>
            <Img sizes={sizesDuotone25} />
          </div>
          <div className="span_4 column" style={styles.column20}>
            <Img sizes={sizesDuotone50} />
          </div>
          <div className="span_4 column" style={styles.column20}>
            <Img sizes={sizesDuotone75} />
          </div>
          <div className="span_4 column" style={styles.column20}>
            <Img sizes={sizesDuotone} />
          </div>
        </div>
        </div>

        <p>
          By setting an optional third parameter{` `}
          <code>opacity</code> for <code>duotone</code>, a semi-transparent
          version of the duotone{`'`}d image will be composited over the
          original allowing the original image and its colors to partially {`"`}shine
          through{`"`}.
        </p>
        </div>
        </article>
        <article className='slide orange' ref={(article) => { this.Orange = article; }}>
        <div className='article-main-container'>
        <h2
          style={{
            paddingTop: rhythm(2),
          }}
        >
          <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/#responsiveresolution">
            <code>resolutions</code>
          </a>
        </h2>
        <p>
          For when you want a fixed sized image but that has different sized
          thumbnails for screens that support different density of images
        </p>
        <p>
          Automatically create images for different resolutions — we do 1x,
          1.5x, 2x, and 3x.
          {` `}
        </p>

        <p>
          The
          {` `}
          <code>grayscale</code> option
          {` `}
          uses Sharp{`'`}s
          {` `}
          <a href="http://sharp.dimens.io/en/stable/api-colour/#greyscale">
            <code>greyscale</code>
          </a>
          {` `}
          to convert the source image to 8-bit greyscale, 256 shades of grey.
        </p>

        <Img resolutions={resolutions} />
        </div>
        </article>
        </div>
      </main>
    )
  }
}

const styles = {}

styles.row = {
  display: `flex`,
  flexWrap: `wrap`,
  margin: `8px -4px 1rem`,
}

styles.ul = {
  padding: `0`,
  listStyle: `none`,
}

styles.column20 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `20%`,
  padding: `0 4px`,
  margin: 0,
}

styles.column25 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `25%`,
  padding: `0 4px`,
  margin: 0,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            sizes( maxWidth: 1200) {
              src
            }
            resize(width: 240, height: 240, rotate: 180) {
              src
            }
          }
        }
      }
    }
    sizes: imageSharp(id: { regex: "/1.jpg/" }) {
      sizes(
        duotone: { highlight: "#f00e2e", shadow: "#192550" }
        traceSVG: {
          color: "#f00e2e"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        }
        toFormat: PNG
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    sizesDuotone: imageSharp(id: { regex: "/1.jpg/" }) {
      sizes(
        maxWidth: 333
        duotone: { highlight: "#0ec4f1", shadow: "#192550" }
        traceSVG: { color: "#1E2151" }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    sizesDuotone50: imageSharp(
      id: { regex: "/1.jpg/" }
    ) {
      sizes(
        maxWidth: 333
        duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 50 }
        traceSVG: { color: "#A7DEF6" }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    sizesDuotone75: imageSharp(
      id: { regex: "/1.jpg/" }
    ) {
      sizes(
        maxWidth: 333
        duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 75 }
        traceSVG: { color: "#0ec4f1" }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    sizesDuotone25: imageSharp(
      id: { regex: "/1.jpg/" }
    ) {
      sizes(
        maxWidth: 333
        traceSVG: { color: "#D1EFFB" }
        duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 25 }
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    sizesDuotoneOriginal: imageSharp(
      id: { regex: "/1.jpg/" }
    ) {
      sizes(maxWidth: 333, traceSVG: { color: "#e7f7fe" }, toFormat: PNG) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    resolution: imageSharp(id: { regex: "/2.jpg/" }) {
      resolutions(grayscale: true, width: 800) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    cropDefault: imageSharp(id: { regex: "/4.jpg/" }) {
      resize(width: 333, height: 333) {
        src
      }
    }
    cropBottomLeft: imageSharp(id: { regex: "/4.jpg/" }) {
      resize(width: 333, height: 333, cropFocus: SOUTHWEST) {
        src
      }
    }
    cropEntropy: imageSharp(id: { regex: "/4.jpg/" }) {
      resize(width: 333, height: 333, cropFocus: ENTROPY) {
        src
      }
    }
    cropCenter: imageSharp(id: { regex: "/4.jpg/" }) {
      resize(width: 333, height: 333, cropFocus: CENTER) {
        src
      }
    }
  }
`