import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './ItemDetailContainer';
import { ItemListContainer } from './ItemListContainer';
import { Navbar } from './NavBar';
import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/detalles/:id' element={<ItemDetailContainer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
