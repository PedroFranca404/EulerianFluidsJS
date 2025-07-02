// Canvas Configuration
const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d')
let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight

// Variables
var densityVariation = 1

// Grid Configuration
const gridSize = 128
const cellWidth = width / gridSize
const cellHeight = height / gridSize

let grid = []
for(let i = 0; i < gridSize*gridSize; i++){
    grid[i] = [0, 0, 0, 0] // [vx, vy, density, hue]
}

// Main Loop 
function loop() {
    for(let i = 0; i < grid.length; i++){
        if(grid[i][2]>0){
           grid[i][2] -= densityVariation
        }
    const x = i % gridSize;
    const y = Math.floor(i / gridSize);
    draw(i, x, y);
    }
}

// Mouse Click Capture
canvas.addEventListener("click", e => {
    const x = Math.floor(e.clientX / cellWidth)
    const y = Math.floor(e.clientY / cellHeight)
    const idx = y*gridSize + x
    if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        grid[idx][2] = 255;
        grid[idx][3] = Math.floor(Math.random() * 360); // cor aleatória
        draw(idx, x, y);
    }
})

function draw(idx, x, y) {
    let hue = grid[idx][3]
    let density = grid[idx][2]
    context.fillStyle = `hsla(${hue}, 100%, 50%, ${density/255})`
    context.fillRect(x*cellWidth, y*cellHeight, cellWidth, cellHeight)
}

loop()