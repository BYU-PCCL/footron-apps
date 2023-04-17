import { draw_slices, config } from "./utils.js"
let state

function swap(arr, xp, yp) {
  var temp = arr[xp]
  arr[xp] = arr[yp]
  arr[yp] = temp
}

function s(sketch) {
  function initialize() {
    let arr = _.shuffle(_.range(config.slice_count))
    state = {
      //setting up the constants, takes an array to sort and shuffle
      //sets up min and max radius of slices (could potentially be made into slider?)
      //sets up i and j variables for iterate display
      phase: 1,

      array: arr,
      minRadius: config.min_radius,
      maxRadius: config.max_radius,
      slc: config.slice_count,
      stack: [{ left: 0, right: arr.length - 1 }],
      left: 0,
      right: 0,
      i: 0,
      j: 0,
      pivotIndex: 0
    }
    draw_slices(sketch, state.array, state.minRadius, state.maxRadius)
    sketch.loop()
  }

  function cleanup() {
    state.i = false
    state.j = false
  }

  sketch.setup = () => {
    let cnv = sketch.createCanvas(config.canvas_size, config.canvas_size)
    cnv.parent("quick")
    sketch.colorMode(sketch.HSL)
    sketch.noStroke()

    config.initializers.push(initialize)
    initialize()
  }

  sketch.draw = () => {
    sketch.frameRate(config.frameRate)

    if (state.slc !== config.slice_count) {
      initialize()
    }

    //initialize drawing slices
    sketch.background(0, 0, 0)

    /* QUICKSORT ALGORITHM */

    // Yes, I know this is messy code. It was tricky to implement a recursive algorithm without using recursion.

    // Essentially, phase 1 is popping from the stack and setting left and right
    // Phase 2 is partitioning the array from left to right
    // And phase 3 is pushing to the stack

    if (state.phase === 1) {
      const { left, right } = state.stack.pop()

      state.left = left
      state.right = right

      state.phase = 2

      cleanup()
    } else if (state.left < state.right) {
      if (state.phase === 2) {
        if (state.i === false) state.i = state.left

        if (state.j === false) state.j = state.left

        if (state.j < state.right) {
          if (state.array[state.j] < state.array[state.right]) {
            swap(state.array, state.i, state.j)
            state.i++
          }
          state.j++
        } else {
          swap(state.array, state.i, state.right)
          state.pivotIndex = state.i
          state.phase = 3
        }
      } else if (state.phase === 3) {
        state.stack.push({
          left: state.left,
          right: state.pivotIndex - 1
        })
        state.stack.push({
          left: state.pivotIndex + 1,
          right: state.right
        })

        state.phase = 1
      }
    } else {
      state.phase = 1
    }

    /* END OF QUICKSORT ALGORITHM */

    //put drawslices in separate files and each sort in different files and call all files at different times
    draw_slices(sketch, state.array, state.minRadius, state.maxRadius)
    //iteratively keeps track of array and therefore image, iteratively displays

    if (state.stack.length === 0 && state.phase === 1) {
      sketch.noLoop()
      config.complete(2, initialize)
    }
  }
}

let myp5 = new p5(s)
