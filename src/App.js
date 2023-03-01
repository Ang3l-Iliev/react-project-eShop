
import './App.css';
import Header from './Header';
import Home from "./Home"
import Checkout from './Checkout'
import Login from "./Login";



import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    
} from 'react-router-dom';




function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/checkout" element={[<Header />, <Checkout />]} />
                    <Route path="/" element={[<Header />, <Home />]} />

                    <Route path='/login' element={<Login />} />

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
