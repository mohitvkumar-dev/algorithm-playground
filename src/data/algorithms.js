const algorithms = {
  searching: {
    name: "Searching",
    algorithms: {
      linearSearch: {
        name: "Linear Search",
        inputs: [
          {
            type: "array",
            label: "Array",
            placeholder: "Enter array: 10, 20, 30, 40"
          },
          {
            type: "number",
            label: "Target",
            placeholder: "Enter target value"
          }
        ]
      },

      binarySearch: {
        name: "Binary Search",
        inputs: [
          {
            type: "array",
            label: "Sorted Array",
            placeholder: "Enter sorted array: 10, 20, 30, 40"
          },
          {
            type: "number",
            label: "Target",
            placeholder: "Enter target value"
          }
        ]
      }
    }
  },

  sorting: {
    name: "Sorting",
    algorithms: {
      bubbleSort: {
        name: "Bubble Sort",
        inputs: [
          {
            type: "array",
            label: "Array",
            placeholder: "Enter array: 40, 10, 30, 20"
          }
        ]
      },

      selectionSort: {
        name: "Selection Sort",
        inputs: [
          {
            type: "array",
            label: "Array",
            placeholder: "Enter array: 40, 10, 30, 20"
          }
        ]
      },

      insertionSort: {
        name: "Insertion Sort",
        inputs: [
          {
            type: "array",
            label: "Array",
            placeholder: "Enter array: 40, 10, 30, 20"
          }
        ]
      },

      mergeSort: {
        name: "Merge Sort",
        inputs: [
          {
            type: "array",
            label: "Array",
            placeholder: "Enter array: 40, 10, 30, 20"
          }
        ]
      },

      quickSort: {
        name: "Quick Sort",
        inputs: [
          {
            type: "array",
            label: "Array",
            placeholder: "Enter array: 40, 10, 30, 20"
          }
        ]
      }
    }
  }
}

export default algorithms