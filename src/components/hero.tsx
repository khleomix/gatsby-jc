/** @jsx jsx */
import { jsx, Image } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
import HeroBg from "../../static/eyeglass.png"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="unicorn" width={16} color="icon_pink" left="53%" top="8%" />
        <SVG icon="coffee" width={12} color="icon_dark" left="70%" top="-3%" />
        <SVG icon="code" width={8} color="icon_yellow" left="82.75%" top="15%" />
      </UpDown>
      <UpDown>
        <Image
          src={HeroBg}
          variant="hero"
        />
      </UpDown>
    </Divider>
    <Content sx={{ variant: `container.hero` }} speed={0.4} offset={offset} factor={factor}>
      <Inner sx={{ variant: `content.hero` }}>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
