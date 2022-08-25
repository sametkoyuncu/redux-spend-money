import './App.css'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Products from './components/Products'
import TitleCard from './components/TitleCard'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleCard />
        <Products />
      </Container>
    </>
  )
}

export default App
