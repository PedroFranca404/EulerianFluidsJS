# 🌀 2D Fluid Simulation (Eulerian)

This is a 2D fluid simulation based on the **Eulerian Fluid Theory**, inspired by [PavelDoGreat's WebGL Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation).  
It simulates fluid behavior (like smoke or dye in water) using a fixed grid, where properties like velocity and density are updated over time.

> The goal of this project is to explore real-time fluid dynamics using a simple and interactive visualization in the browser.

---

## 🌊 What is an Eulerian Fluid Simulation?

In Eulerian simulations, the fluid is simulated on a fixed grid. Instead of tracking individual particles (Lagrangian method), we update values (like velocity and density) at each grid cell over time.

The core steps in the simulation are:
1. **Advection** – moves properties through the velocity field.
2. **Diffusion** – simulates viscosity, spreading properties.
3. **External forces** – injects energy (e.g. from mouse input).
4. **Projection** – enforces incompressibility (∇·u = 0).

---

## 🧪 Features

- 🔬 Realistic-looking fluid motion using a simplified Navier-Stokes approach
- 🖱️ Interactive: inject fluid by moving the mouse
- 🎨 Density-based rendering (like smoke or ink)
- ⚙️ Written in JavaScript and rendered via `<canvas>` or WebGL (depending on version)

---

## 📦 Deployment

> A live demo will be available soon. Stay tuned for updates!

---

## 🧠 References

- 💡 [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)  
- 📘 [Jos Stam - Real-Time Fluid Dynamics for Games](https://www.dgp.toronto.edu/people/stam/reality/Research/pdf/GDC03.pdf)  
- 🔬 [Eulerian vs. Lagrangian Fluid Simulation](https://en.wikipedia.org/wiki/Computational_fluid_dynamics)

---

## 🧰 Technologies Used

- JavaScript (ES6)
- HTML5 Canvas / WebGL
- No frameworks — 100% vanilla JS
- Numerical fluid dynamics concepts

---

## 📜 License

MIT — feel free to use, modify and share.
