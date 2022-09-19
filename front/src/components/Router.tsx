import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../pages/Category'
import DetailPage from '../pages/DetailPage'
import MainPage from '../pages/MainPage'


const Router = () => {
   return (
      <>
         <Routes>
               <Route path='/' element={<MainPage/>}/>
               <Route path='/:id' element={<DetailPage/>}/>
               <Route path='/category/:id' element={<Category/>}/>
         </Routes>
      </>
   )
}

export default Router;