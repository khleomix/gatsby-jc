import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  initialColorModeName: `dark`,
  useCustomProperties: true,
  colors: {
    background: `#644540`,
    button: `#EFBDC1`,
    divider: `#723b31`,
    heading: `#EFBDC1`,
    icon_blue: tailwind.colors.blue[6],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[7],
    icon_darkest: tailwind.colors.gray[8],
    icon_green: tailwind.colors.green[5],
    icon_orange: tailwind.colors.orange[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_red: tailwind.colors.red[6],
    icon_yellow: tailwind.colors.yellow[5],
    primary: tailwind.colors.pink[5],
    secondary: `#e6ae85`,
    link: tailwind.colors.pink[3],
    hover: tailwind.colors.white,
    text: tailwind.colors.gray[2],
    textMuted: tailwind.colors.gray[5],
    modes: {
      light: {
        background: `#f4eae9`,
        button: `#1d110b`,
        divider: `#d6c9c9`,
        heading: `#1d110b`,
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[6],
        primary: tailwind.colors.orange[7],
        link: tailwind.colors.pink,
        text: tailwind.colors.gray[8],
        textMuted: tailwind.colors.gray[6],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    bottom: `20px`,
    color: `textMuted`,
    display: `block`,
    fontSize: `14px`,
    position: `absolute`,
    px: [2, 3],
    py: [3, 4],
    textAlign: `center`,
  },
  images: {
    hero: {
      height: `auto`,
      position: `absolute`,
      right: 3,
      width: `50vw`,
    },
    about: {
      height: `auto`,
      position: `absolute`,
      left: 3,
      width: `40vw`,
    },
    contact: {
      height: `auto`,
      position: `absolute`,
      left: `30vw`,
      width: `30vw`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    cursor: `pointer`,
    toggle: {
      alignSelf: `center`,
      backgroundColor: `button`,
      border: `none`,
      borderRadius: `10px`,
      color: `background`,
      my: 3,
      outline: `none`,
      px: 3,
      py: 2,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
  box: {
    togglegroup: {
      display: `flex`,
      justifyContent: `flex-end`,
      width: `auto`,
      zIndex: `100`,
      label: {
        cursor: `pointer`,
        mx: 1,
      },
      input: {
        cursor: `pointer`,
        marginTop: `-13px`,
        marginRight: `-15px`,
        zIndex: `999`,
      }
    },
  },
  flex: {
    togglegroup: {
      display: `flex`,
      justifyContent: `flex-end`,
      position: `absolute`,
      left: `48%`,
      top: `20px`,
      width: `100px`,
      zIndex: `100`,
      label: {
        cursor: `pointer`,
        mx: 1,
      },
      input: {
        cursor: `pointer`,
        marginRight: `-15px`,
        zIndex: `999`,
      }
    },
  },
  container: {
    hero: {
      alignItems: `flex-start`,
    },
    about: {
      alignItems: `flex-end`,
    },
  },
  content: {
    hero: {
      maxWidth: `650px`,
    },
    about: {
      maxWidth: `700px`,
    },
  },
  links: {
    nav: {
      color: `link`,
      cursor: `pointer`,
      fontWeight: `700`,
      letterSpacing: `0.2em`,
      textTransform: `uppercase`,
      zIndex: `999`,
      "&:hover": {
        color: `hover`,
      },
    },
  },
  styles: {
    root: {
      MozOsxFontSmoothing: `grayscale`,
      WebkitFontSmoothing: `antialiased`,
      backgroundColor: `background`,
      boxSizing: `border-box`,
      color: `text`,
      margin: 0,
      padding: 0,
      textRendering: `optimizeLegibility`,
      a: {
        color: `link`,
        display: `inline-block`,
        margin: 0,
        minWidth: 0,
        lineHeight: `1`,
        overflow: `hidden`,
        padding: `5px`,
        position: `relative`,
        textDecoration: `none !important`,
        transition: `color .3s ease-out`,
        verticalAlign: `bottom`,
        zIndex: `999`,
        "&:hover": {
          boxShadow: `none`,
          color: `hover`,
          textDecoration: `none`,
          zIndex: `999`,
          "&:before": {
            transform: `translateY(0)`,
            transition: `transform .25s ease-out`,
          },
        },
        "&:before": {
          backgroundImage: `linear-gradient(60deg, #642B73 0%, #C6426E 100%)`,
          content: `""`,
          height: `100%`,
          left: 0,
          position: `absolute`,
          top: 0,
          transform: `translateY(calc(100%))`,
          transition: `transform .25s ease-out`,
          width: `100%`,
          zIndex: `-1`,
        },
      },
      button: {
        backgroundColor: tailwind.colors.gray[8],
        border: `none`,
        borderRadius: `5px`,
        color: tailwind.colors.white,
        cursor: `pointer`,
        outline: `none`,
        position: `relative`,
        textShadow: `none`,
        width: `auto`,
        zIndex: 0,
        "&:before": {
          animation: `glowing 20s linear infinite`,
          background: `linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)`,
          backgroundSize: `400%`,
          content: `""`,
          filter: `blur(5px)`,
          height: `calc(100% + 4px)`,
          left: `-2px`,
          opacity: 0,
          position: `absolute`,
          top: `-2px`,
          transition: `opacity .3s ease-in-out`,
          width: `calc(100% + 4px)`,
          zIndex: -1,
        },
        "&:after":{
          backgroundColor: `#111`,
          borderRadius: `5px`,
          content: `""`,
          height: `100%`,
          left: 0,
          position: `absolute`,
          top: 0,
          width: `100%`,
          zIndex: -1,
        },
        "&:active": {
          color: tailwind.colors.black,
          "&:after": {
            backgroundColor: `transparent`,
          },
        },
        "&:hover": {
          "&:before": {
            opacity: 1,
          }
        },
        "@keyframes glowing": {
          "0%": { backgroundPosition: `0 0` },
          "50%": { backgroundPosition: `400% 0` },
          "100%": { backgroundPosition: `0 0` },
        },
      },
    },
    header: {
      alignItems: `center`,
      backgroundColor: `transparent`,
      display: `flex`,
      justifyContent: `space-between`,
      px: [2, 5],
      h1: {
        color: tailwind.colors.pink[5],
        fontSize: [3, 4, 5],
        textTransform: `uppercase`,
      },
    },
    nav: {
      alignItems: `center`,
      justifyContent: `flex-end`,
    },
    p: {
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        color: `heading`,
        fontSize: [2, 3],
        fontWeight: `medium`,
      },
    },
    h1: {
      color: `heading`,
      fontSize: [6, 7, 8],
      letterSpacing: `wide`,
      mb: 3,
      mt: 2,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
    },
    h2: {
      color: `heading`,
      fontSize: [4, 5, 6],
      mb: 2,
      mt: 2,
    },
    h3: {
      color: `heading`,
      fontSize: [3, 4, 5],
      mt: 3,
    },
    h4: {
      color: `heading`,
      fontSize: [2, 3, 4],
    },
    h5: {
      color: `heading`,
      fontSize: [1, 2, 3],
    },
    h6: {
      color: `heading`,
      fontSize: 1,
      mb: 2,
    },
  }
})

export default theme
