import React from 'react'
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="*" element={<Navigate to={"/auth"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App