import React from 'react'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import CreatePost from '../Pages/CreatePost'
import ViewPost from '../Pages/ViewPost'
import ViewMore from '../Pages/ViewMore'




function MainRoutes() {
    return (
       <Router>
        <Routes>
           <Route exact path="/" element={<Home/>}>
               
           </Route>
           <Route path="/signup" element={<Signup/>}>
           </Route>
           <Route path="/login" element={<Login/>}>
               
           </Route>
           <Route path="/create" element={<CreatePost/>}>
               
           </Route>
           <Route path="/view" element={<ViewPost/>}>
               
           </Route>
           <Route path="/viewmore" element={<ViewMore/>}>
               
           </Route>
           </Routes>
           

           
       </Router>
    )
}

export default MainRoutes
