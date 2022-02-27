import logo from './logo.svg';
import './App.css';
import { Products} from './components/Products';
import {Footer} from "./components/Footer"
import { ChakraProvider } from "@chakra-ui/react";
import { SingleProduct } from './components/Individual';
import { Routes, Route} from "react-router-dom";
import {Home} from "./components/Home"
import { Login } from './components/Login';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Payment } from './components/Payment';
import { ThankYou } from './components/ThankYou';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Products/:id"
            element={<Products query={"beds"} />}
          ></Route>
          <Route path="/IndividualProduct" element={<SingleProduct />}></Route>
          <Route path="/CartPage" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/Paymentsuccessful" element={<ThankYou/>}></Route>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
