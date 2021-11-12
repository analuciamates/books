import './App.css'
import Header from 'components/Header/Header'
import Home from 'pages/Home/Home'
import Basket from 'pages/Basket/Basket'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/basket" component={Basket} />
                </Switch>
                <ToastContainer />
            </BrowserRouter>
        </div>
    )
}

export default App
