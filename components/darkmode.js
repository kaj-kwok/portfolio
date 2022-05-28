import { useColorMode, IconButton } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode} />
  )
}

export default ThemeSelector

