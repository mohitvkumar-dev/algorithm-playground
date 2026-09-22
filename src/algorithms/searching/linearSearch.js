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
  array,
  target,
  found: true,
  index: i,
  steps
}
    }
  }
   return {
  array,
  target,
  found: false,
  index: -1,
  steps
}
 
}

export default linearSearch