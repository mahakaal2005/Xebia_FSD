import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Table from './components/Table'

function App() {

  const y=[2024,2025,2026,2027];
  const company ={name:"KIET", location:"Ghaziabad", established:1998};
  return (
    <div>
      <Header title="Today we will learn about props in React"></Header>
      <Header title="Thanks"></Header>
      <div className="card">
        <h2>Welcome to Props Learning!</h2>
        <p>Props are used to pass data from parent to child components in React.</p>
        <Table name="John Doe" age="30" city="New York"></Table>
      </div>
      <Footer year= {y} company={company} text="2026 by KIET"></Footer>
    </div>
    
  )
}

export default App
