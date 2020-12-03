/** @jsx jsx */
import { jsx, Image } from "theme-ui"
import Divider from "../elements/divider"
import styled from "@emotion/styled"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDownWide, waveAnimation } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"
import AboutBg from "../../static/ideas.png"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, top: `-35%`, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `60vh` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDownWide>
        <Image
          src={AboutBg}
          variant="about"
        />
      </UpDownWide>
    </Divider>
    <Content sx={{ variant: `container.about` }} speed={0.4} offset={offset} factor={factor}>
      <Inner sx={{ variant: `content.about` }} >
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
