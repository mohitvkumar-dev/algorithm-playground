import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import './App.css'
import AlgorithmSelector from './components/algorithm/AlgorithmSelector'
import InputPanel from './components/input/InputPanel'
import Visualization from './components/visualization/Visualization'


function App() {
  
  const [result, setResult] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('searching')

  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState('linearSearch')

  return (
    <>
      <Navbar />

      <main>
        <h2>Algorithm Visualizer</h2>

        <AlgorithmSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedAlgorithm={selectedAlgorithm}
          setSelectedAlgorithm={setSelectedAlgorithm}
        />

        <InputPanel
          selectedCategory={selectedCategory}
          selectedAlgorithm={selectedAlgorithm}
          setResult={setResult}
        />

        <Visualization result={result} />

      </main>
    </>
  )
}

export default App