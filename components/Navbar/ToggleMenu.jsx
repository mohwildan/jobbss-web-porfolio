import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode } from "@chakra-ui/react"

const ToggleMenu = () => {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
      <IconButton icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode}/>
  )
}

export default ToggleMenu