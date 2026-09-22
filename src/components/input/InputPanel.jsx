import { useState } from 'react'
import algorithms from '../../data/algorithms'
import linearSearch from '../../algorithms/searching/linearSearch'
function InputPanel({
  selectedCategory,
  selectedAlgorithm,
  setResult
}) {

  const algorithm =
    algorithms[selectedCategory].algorithms[selectedAlgorithm]

  const [inputs, setInputs] = useState({})

  const handleInputChange = (label, value) => {
    setInputs({
      ...inputs,
      [label]: value
    })
  }

  const handleApply = () => {

  const parsedInputs = {}

  algorithm.inputs.forEach((input) => {

    const value = inputs[input.label] || ''

    if (input.type === 'array') {
      parsedInputs[input.label] = value
        .split(',')
        .map(item => Number(item.trim()))
    }

    else if (input.type === 'number') {
      parsedInputs[input.label] = Number(value)
    }

    else {
      parsedInputs[input.label] = value
    }

  })

  const result = linearSearch(
  parsedInputs.Array,
  parsedInputs.Target
  )
 
  setResult(result)
  console.log("Result:", result)

  console.log("Parsed Input:", parsedInputs)
}

  const handleClear = () => {
    setInputs({})
  }

  return (
    <section className="input-panel">

      <h2>Input</h2>

      {algorithm.inputs.map((input, index) => (
        <div className="input-field" key={index}>

          <label>{input.label}</label>

          <input
            type={input.type}
            placeholder={input.placeholder}
            value={inputs[input.label] || ''}
            onChange={(e) =>
              handleInputChange(input.label, e.target.value)
            }
          />

        </div>
      ))}

      <div className="input-buttons">

        <button onClick={handleApply}>
          Apply
        </button>

        <button>
          Generate Random
        </button>

        <button onClick={handleClear}>
          Clear
        </button>

      </div>

    </section>
  )
}

export default InputPanel