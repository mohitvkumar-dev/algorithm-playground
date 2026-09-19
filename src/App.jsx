
import Navbar from './components/layout/Navbar'
import './App.css'
import AlgorithmSelector from'./components/algorithm/AlgorithmSelector'

function App(){

  return (
   <>
     <Navbar/>

     <main>
       <h2>Algorithm Visualizer</h2>

       <AlgorithmSelector/>

       <section>
        <h3>Input</h3>
       </section>

       <section>
        <h3>Visualization</h3>
       </section>

     </main>
   </>
  )
    
}

export default App