import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import MainSection from "./components/MainSection/MainSection"


function App() {

  return (
      <div>

    <MantineProvider>
        <Navbar />
        <MainSection />
    </MantineProvider>
        </div>
  )
}

export default App
