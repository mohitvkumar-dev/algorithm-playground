import { useState } from 'react'
import algorithms from '../../data/algorithms'

function AlgorithmSelector() {
  const categories = Object.keys(algorithms)

  const [category, setCategory] = useState(categories[0])

  const availableAlgorithms = algorithms[category]

  return (
    <>
      <div className="algorithm-selector">
  <h1>Select Algorithm</h1>

  <div className="selectors">
    <div className="selector-group">
      <label>Select Category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    <div className="selector-group">
      <label>Select Algorithm</label>

      <select>
        {availableAlgorithms.map((algorithm) => (
          <option key={algorithm} value={algorithm}>
            {algorithm}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>
      
    </>
  )
}

export default AlgorithmSelector