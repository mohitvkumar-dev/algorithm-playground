function Visualization({ result }) {

  if (!result) {
    return (
      <section className="visualization">
        <h2>Visualization</h2>
        <p>Apply an input to start visualization.</p>
      </section>
    )
  }

  return (
    <section className="visualization">

      <h2>Visualization</h2>

      <div className="array-container">

        {result.steps.map((step, index) => (
          <div className="step" key={index}>

            <span>
              Index: {step.index}
            </span>

            <strong>
              {step.value}
            </strong>

            <span>
              {step.status}
            </span>

          </div>
        ))}

      </div>

      <p>
        {result.found
          ? `Element found at index ${result.index}`
          : "Element not found"}
      </p>

    </section>
  )
}

export default Visualization