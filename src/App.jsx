import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Movie from './component/Movie/Movie'
import Tv from './component/Tv/Tv'
import Celebrities from './component/Celebrities/Celebrities.jsx'
import Login from './component/Login/Login'
import Register from './component/Rigister/Rigister'
import Logout from './component/Logout/Logout'
import DetailesMovie from './component/Details/DetailsMovie.jsx'
import DetailesTv from './component/Details/DetailsTv.jsx'
import { jwtDecode } from "jwt-decode"
import { useEffect } from 'react'

export default function App() { 
  
  let [loginData,setLoginData]=useState(null)

function savaLoginData() {
    let encodedToken=localStorage.getItem('token');
    let decodedToken= jwtDecode(encodedToken);
    setLoginData(decodedToken);
    console.log(decodedToken);
  }
useEffect(()=>{
  if (localStorage.getItem("token")) {
    savaLoginData()

  }
},[])

  let routers=createBrowserRouter([
    {path:"",element:<Layout loginData={loginData} setLoginData={setLoginData} />,children:[
      {path:"home",element:<Home/>},
      {path:"movie",element:<Movie/>},
      {path:"tv",element:<Tv/>},
      {path:"Celebrities",element:<Celebrities/>},
      {path:'detailsmovie/:id' , element: <DetailesMovie/>},
      {path:'detailstv/:id' , element: <DetailesTv/>},
      // {path:'detailsperson/:id' , element: <Detailes/>},

      {index:true,element:<Login/>},
      {path:"login",element:<Login savaLoginData={savaLoginData}/>},
      {path:"register",element:<Register/>},
      {path:"logout",element:<Logout/>},

    ]}
  ])
  return<>
  <RouterProvider router={routers}></RouterProvider>
  </>
}

