/** @jsx jsx */
import { jsx, Flex, useColorMode, Box, NavLink } from "theme-ui"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Divider from "../elements/divider"
import SVG from "./svg"
import { UpDown } from "../styles/animations"
// @ts-ignore
import Title from "../sections/title"

const ThemeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const isLight = colorMode === `light`
  const toggleLightMode = (e: any) => {
    setColorMode(isDark ? `light` : ``)
  }
  const toggleDarkMode = (e: any) => {
    setColorMode(isLight ? `dark` : ``)
  }

  return (
    <Box variant="box.togglegroup">
      <label><input type="radio" name="togglegroup" onClick={toggleLightMode} />🌞</label>
      <label><input type="radio" name="togglegroup" onClick={toggleDarkMode} />🌚</label>
    </Box>
  )
}

const Header = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.4} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="unicorn" width={12} color="icon_black" left="1%" top="0" />
        <SVG icon="tardis" width={6} color="icon_blue" left="33%" top="68%" />
      </UpDown>
      <UpDown>
        <SVG icon="sun" hiddenMobile width={6} color="icon_orange" left="91.7%" top="0" />
        <SVG icon="moon" hiddenMobile width={5} color="icon_darkest" left="93.8%" top="0%" />
      </UpDown>
    </Divider>
    <header
      sx={{
        variant: 'styles.header',
      }}>
      <Title />
      <Flex>
        <NavLink sx={{ variant: `links.nav` }} href="/" title="Home">Home</NavLink>
        <NavLink sx={{ variant: `links.nav` }} href="#about" title="About">About</NavLink>
        <NavLink sx={{ variant: `links.nav` }} href="/#contact" title="Contact">Contact</NavLink>
        <ThemeToggle />
      </Flex>
    </header>
  </div>
)

export default Header
