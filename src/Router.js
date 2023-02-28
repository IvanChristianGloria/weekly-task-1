import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import FunctionalComponent from './Components/FunctionalComponent'
import Hooks from './Components/Hooks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/functional-component' element={<FunctionalComponent/>}/>
                    <Route path='/hooks' element={<Hooks/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )

} 

export default Router