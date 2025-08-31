import './App.css'
import Logo from './Utils/Logo'
import Navbar from './Utils/Navbar'

function App() {
  
  return (
    <>
    <div className= "flex">
      <Logo />  
      
      <div className="flex-1">
        {/* Main content goes here */}
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to the Dashboard</h1>
        <Navbar />        
    </div>
    </div>
            
    </>
  )
}

export default App
