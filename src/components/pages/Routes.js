import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/game' element={<Game/>}></Route>
        </Routes>
    )

}

export default MainRoutes
