import ContactList from './components/ContactList'
import users from './__mock__/users.json'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'

const mdTheme = createTheme()


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactList />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
