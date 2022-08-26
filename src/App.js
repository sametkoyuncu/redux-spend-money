import './App.css'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Receipt from './components/Receipt'
import TitleCard from './components/TitleCard'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleCard />
        <Products />
        <Receipt />
      </Container>
    </>
  )
}

export default App
