function linearSearch(array, target) {

  const steps = []

  for (let i = 0; i < array.length; i++) {

    steps.push({
      index: i,
      value: array[i],
      status: "checking"
    })

    if (array[i] === target) {

      steps.push({
        index: i,
        value: array[i],
        status: "found"
      })

      return {
        found: true,
        index: i,
        steps: steps
      }
    }
  }

  return {
    found: false,
    index: -1,
    steps: steps
  }
}

export default linearSearch