/** @jsx jsx */
import { jsx, Label, Input, Textarea, Box, Button, Image } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import { UpDown, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"
import ContactBg from "../../static/contact.png"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div id="contact">
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `40vh` } }}>
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
    <Divider sx={{ position: `absolute`, top: `-20px` }} speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Image
            src={ContactBg}
            variant="contact"
          />
      </UpDown>
    </Divider>
    <Content sx={{ variant: `container.contact` }} speed={0.4} offset={offset} factor={factor}>
      <Inner sx={{ variant: `content.contact` }}>
        <ContactMDX />
        <Box
        as='form'
        onSubmit={e => e.preventDefault()}>
        <Label htmlFor='name'>Name</Label>
        <Input
          name='name'
          id='name'
          mb={3}
        />
        <Label htmlFor='message'>Message</Label>
        <Textarea
          name='message'
          id='message'
          rows='3'
          mb={3}
        />
        <Button>
          Submit
        </Button>
      </Box>
      </Inner>
      <Footer />
    </Content>
  </div>
)

export default Contact
