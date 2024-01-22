// import Header from "./components/layout/Header";
import {BrowserRouter} from 'react-router-dom'
import MainRoutes from './components/pages/Routes'
// import Footer from "./components/layout/Footer";
// // import Home from "./components/pages/Home";
// import Game from "./pages/Game";

function App() {

  return (
    <BrowserRouter>
        <MainRoutes/>
    </BrowserRouter>
)

}

export default App;
