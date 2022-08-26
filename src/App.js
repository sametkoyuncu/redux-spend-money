import { useSelector } from 'react-redux'
import './App.css'
import Container from './components/Container'
import GoToReceiptBtn from './components/GoToReceiptBtn'
import GoToTopBtn from './components/GoToTopBtn'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Receipt from './components/Receipt'
import TitleCard from './components/TitleCard'

function App() {
  const productList = useSelector((state) =>
    state.products.productList.filter((product) => product.quantity > 0)
  )
  return (
    <>
      <Navbar />
      <Container>
        <TitleCard />
        <Products />
        <GoToTopBtn />
        {productList.length > 0 && (
          <>
            <Receipt products={productList} />
            <GoToReceiptBtn />
          </>
        )}
      </Container>
    </>
  )
}

export default App
