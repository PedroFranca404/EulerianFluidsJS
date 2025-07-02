// Canvas Configuration
const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d')
let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight

// Variables
let lastMouseX = null
let lastMouseY = null
var densityVariation = 2
var injectedVelocity = 5

// Grid Configuration
const gridSize = 128
const cellWidth = width / gridSize
const cellHeight = height / gridSize

let grid = []
for(let i = 0; i < gridSize*gridSize; i++){
    grid[i] = [0, 0, 0, 0] // [vx, vy, density, hue]
}

// Density Interpolation
function getDensity(x, y) {
    const x0 = Math.floor(x)
    const y0 = Math.floor(y)

    if(x0 < 0 || y0 < 0 || x0 >= gridSize || y0 >= gridSize) return 0

    return grid[y0 * gridSize + x0][2]
}

function moveDensity(grid) {
    const newGrid = []

    for(let i = 0; i < grid.length; i++){
        const x = i % gridSize
        const y = Math.floor(i / gridSize)

        const vx = grid[i][0]
        const vy = grid[i][1]

        const fromX = x - vx
        const fromY = y - vy

        const density = getDensity(fromX, fromY, grid)

        newGrid[i] = [vx, vy, density, grid[i][3]]
    }

    return newGrid
}

// Main Loop 
function loop() {
  context.clearRect(0, 0, width, height);   

  grid = moveDensity(grid);

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][2] > 0) {
      grid[i][2] -= densityVariation;
      if (grid[i][2] < 0) grid[i][2] = 0;

      const x = i % gridSize;
      const y = Math.floor(i / gridSize);
      draw(i, x, y);
    }
  }

  requestAnimationFrame(loop);
}

// Mouse Click Capture
let isDrawing = false

canvas.addEventListener("mousedown", e => {
    isDrawing = true
    lastMouseX = Math.floor(e.clientX / cellWidth);
    lastMouseY = Math.floor(e.clientY / cellHeight);
})

canvas.addEventListener("mouseup", e => {
    isDrawing = false
    lastMouseX = null
    lastMouseY = null
})

canvas.addEventListener("mousemove", e => {
    if(isDrawing){
        const x = Math.floor(e.clientX / cellWidth)
        const y = Math.floor(e.clientY / cellHeight)
        const idx = y*gridSize + x

        if(lastMouseX !== null && lastMouseY !== null ) {
            const vx = (x - lastMouseX) * 10
            const vy = (y - lastMouseY) * 10

            if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
                grid[idx] = [vx, vy, 255, Math.floor(Math.random()*360)]
            }
        }
    }
})

function draw(idx, x, y) {
    let hue = grid[idx][3]
    let density = grid[idx][2]
    context.fillStyle = `hsla(${hue}, 100%, 50%, ${density/255})`
    context.fillRect(x*cellWidth, y*cellHeight, cellWidth, cellHeight)
}

loop()