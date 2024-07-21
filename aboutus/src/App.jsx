import './App.css'
import Navbar from './components/Navbar'



function App() {

  return (
    <>
    <Navbar/>
    <div>
      <h1 className="text-4xl max-md:text-xl max-md:my-6 max-md:mt-8 font-semibold text-center my-12">GeoCityDatabase</h1>
      <p className="text-slate-600 max-md:text-[12px] max-md:mx-2 text-center mx-20 text-balance">Our platform offers an online donwload option for a comprehensive city characteristics database, providing access to information on various nations and regions. The database includes feature names, latitude and longitude coordinates, and other relavant data, it is an excellent resource for academics, analysts and others seeking accurate and current information on cities worldwide. The platform simplifies access to and use of this valuable material, supporting wise judgment and and smart studies in various sectors.</p>
    </div>
    </>
  )
}

export default App
