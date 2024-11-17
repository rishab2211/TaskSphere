import React from 'react'
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import TodosIndex from './pages/todos'


const App = () => {
  return (
    <div>
      <BrowserRouter future={{ v7_startTransition: true }} >
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path='/todos' element={<TodosIndex/>} />
          <Route path="*" element={<Navigate to={"/auth"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App