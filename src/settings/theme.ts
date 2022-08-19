import { createTheme } from '@mui/material/styles'

const basePersolColor = '#363636'

const theme = createTheme({
  palette: {
    primary: {
      main: '#303F9F',
    },
    basePersol: {
      main: basePersolColor,
      contrastText: '#fff',
    },
  },
})

export { theme, basePersolColor }
