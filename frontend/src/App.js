import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AddProduct from './pages/AddProduct';
import DisplayProduct from './pages/DisplayProducts';
import SearchProduct from './pages/SearchProduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProducts';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddProduct/>}></Route>
        <Route path='/display' element={<DisplayProduct/>}></Route>
        <Route path='/search' element={<SearchProduct/>}></Route>
        <Route path='/update' element={<UpdateProduct/>}></Route>
        <Route path='/delete' element={<DeleteProduct/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
