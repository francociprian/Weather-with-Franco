import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'

import Routes from './components/Routes'
import WeatherContextProvider from './context/WeatherContextProvider'
import { ThemeProvider } from './context/themeContext'

function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  )

  return (
    <ThemeProvider>
      <WeatherContextProvider>
        <Routes />
      </WeatherContextProvider>
    </ThemeProvider>
  )
}

export default App
