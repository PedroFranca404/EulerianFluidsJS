// Canvas Configuration
const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d')
let width = canvas.width = window.innerWidth
let height = canvas.height = window.innerHeight

// Grid Configuration
const gridSize = 128
const cellWidth = width / gridSize
const cellHeight = height / gridSize

let grid = []
for(let i = 0; i < gridSize*gridSize; i++){
    grid[i] 
}