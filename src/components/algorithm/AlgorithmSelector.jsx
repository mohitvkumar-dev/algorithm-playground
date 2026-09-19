import algorithms from '../../data/algorithms'

function AlgorithmSelector({
  selectedCategory,
  setSelectedCategory,
  selectedAlgorithm,
  setSelectedAlgorithm
}) {

  const category = algorithms[selectedCategory]

  return (
    <section className="algorithm-selector">

      <h1>Select Algorithm</h1>

      <div className="selectors">

        {/* Category */}
        <div className="selector-group">

          <label>Select Category</label>

          <select
            value={selectedCategory}
            onChange={(e) => {

              const newCategory = e.target.value

              setSelectedCategory(newCategory)

              const firstAlgorithm =
                Object.keys(
                  algorithms[newCategory].algorithms
                )[0]

              setSelectedAlgorithm(firstAlgorithm)
            }}
          >

            {Object.keys(algorithms).map((key) => (
              <option key={key} value={key}>
                {algorithms[key].name}
              </option>
            ))}

          </select>

        </div>


        {/* Algorithm */}
        <div className="selector-group">

          <label>Select Algorithm</label>

          <select
            value={selectedAlgorithm}
            onChange={(e) =>
              setSelectedAlgorithm(e.target.value)
            }
          >

            {Object.keys(category.algorithms).map((key) => (
              <option key={key} value={key}>
                {category.algorithms[key].name}
              </option>
            ))}

          </select>

        </div>

      </div>

    </section>
  )
}

export default AlgorithmSelector