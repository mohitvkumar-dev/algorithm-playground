import { useEffect, useState } from 'react'

function Visualization({ result }) {

  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    setCurrentStep(0)
  }, [result])

  if (!result) {
    return (
      <section className="visualization">
        <h2>Visualization</h2>
        <p>Apply an input to start visualization.</p>
      </section>
    )
  }

  const current = result.steps[currentStep]

  const handleNext = () => {
    if (currentStep < result.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  return (
  <section className="visualization">

    <h2>Visualization</h2>

    <div className="array-container">
      {result.array.map((value, index) => (
        <div
           className={
  index === current.index
    ? current.status === "found"
      ? "array-box found"
      : "array-box active"
    : "array-box"
}
          key={index}
        >
          {value}
        </div>
      ))}
    </div>

    <p>
      Step {currentStep + 1} of {result.steps.length}
    </p>

    <p>
      {current.status === "found"
        ? `Element found at index ${current.index}`
        : `Checking element at index ${current.index}`}
    </p>

    <div className="visualization-controls">

      <button
        onClick={handlePrevious}
        disabled={currentStep === 0}
      >
        Previous
      </button>

      <button
        onClick={handleNext}
        disabled={currentStep === result.steps.length - 1}
      >
        Next
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

    </div>

  </section>
)
}

export default Visualization