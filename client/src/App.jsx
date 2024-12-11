import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import ProfilePage from './pages/ProfilePage'
import ChatPage from './pages/ChatPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from './store/useAuthstore'
import {Toaster} from 'react-hot-toast'
const App = () => {
    const { checkAuth  , authUser, checkingAuth} =  useAuthStore()
    console.log("we are having authUser" , authUser)
    useEffect(() => {
        checkAuth()
    }, [checkAuth])
    if( checkingAuth ) return (
        <div className='flex items-center justify-center h-screen'>
            <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500'></div>
        </div>
    )
  return (
    <h1 className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    
<Routes>
<Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/auth"} />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to={"/"} />} />
				<Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={"/auth"} />} />
				<Route path='/chat/:id' element={authUser ? <ChatPage /> : <Navigate to={"/auth"} />} />
</Routes>
<Toaster/>

  </h1>

  )
}

export default App