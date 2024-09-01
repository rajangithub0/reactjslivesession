import { useSelector } from "react-redux"
import Counter from "./Components/Counter"
import Products from "./Components/Products"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart"


function App() {

  const items = useSelector(state => state.CartReducer.items)
  return (
    <BrowserRouter>
      <h3>{items.length}product in cart</h3>
      <ul>
        <li>
          <Link to='products'>Products</Link>
        </li>
        <li>
          <Link to='cart'>cart</Link>
        </li>
        <li>
          <Link to='counter'>counter</Link>
        </li>
      </ul>

      <Routes>
        <Route path="products" element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path="counter" element={<Counter />} />
      </Routes>



    </BrowserRouter>
  )
}

export default App
