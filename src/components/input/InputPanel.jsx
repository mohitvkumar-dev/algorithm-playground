import algorithms from '../../data/algorithms'

function InputPanel({
  selectedCategory,
  selectedAlgorithm
}) {

  const algorithm =
    algorithms[selectedCategory].algorithms[selectedAlgorithm]

  return (
    <section className="input-panel">

      <h2>Input</h2>

      {algorithm.inputs.map((input, index) => (
        <div className="input-field" key={index}>

          <label>{input.label}</label>

          <input
            type={input.type}
            placeholder={input.placeholder}
          />

        </div>
      ))}

      <div className="input-buttons">
        <button>Apply</button>
        <button>Generate Random</button>
        <button>Clear</button>
      </div>

    </section>
  )
}

export default InputPanel