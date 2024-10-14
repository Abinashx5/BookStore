import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js';
import ShowBook from './pages/ShowBook.js';
import EditBook from './pages/EditBook.js';
import CreateBook from './pages/CreateBooks.js';
import DeleteBook from './pages/DeleteBook.js';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook></ShowBook>}/>
      <Route path='/books/edit/:id' element={<EditBook></EditBook>}/>
      <Route path='/books/delete/:id' element={<DeleteBook></DeleteBook>}/>
    </Routes>  
    
  
  )
}

export default App;
