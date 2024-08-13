import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { TodoCard } from './Components/todoCard'
import { CardSections } from './Components/cardSection'
import { TypingSection } from './Components/typingSection'

function App() {
  return (
    <>  
      <TypingSection/>

      <CardSections/>
    </>
  )
}


export default App


