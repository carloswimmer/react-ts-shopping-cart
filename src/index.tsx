import ReactDOM from 'react-dom'
import App from './App'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
