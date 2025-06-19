// Game Variables
let funds = 1000;
let population = 1000;
let workerSatisfaction = 50;
let capitalSatisfaction = 70;
let factoriesBuilt = 0;

// DOM Elements
const fundsDisplay = document.getElementById('funds');
const populationDisplay = document.getElementById('population');
const workerSatisfactionDisplay = document.getElementById('worker-satisfaction');
const capitalSatisfactionDisplay = document.getElementById('capital-satisfaction');

// Event Listeners
document.getElementById('build-factory').addEventListener('click', buildFactory);
document.getElementById('raise-taxes').addEventListener('click', raiseTaxes);

// Function to simulate building a factory
function buildFactory() {
  if (funds >= 500) {
    funds -= 500;
    factoriesBuilt++;
    population += 100;
    workerSatisfaction -= 5;  // Factories reduce worker satisfaction
    capitalSatisfaction += 10;  // Capitalists are happier with factories

    updateStats();
  } else {
    alert('Not enough funds to build a factory!');
  }
}

// Function to simulate raising taxes
function raiseTaxes() {
  funds += 200;
  workerSatisfaction -= 10;  // Higher taxes hurt worker satisfaction
  capitalSatisfaction -= 5;  // High taxes anger capitalists

  updateStats();
}

// Function to update the display of game stats
function updateStats() {
  fundsDisplay.textContent = funds;
  populationDisplay.textContent = population;
  workerSatisfactionDisplay.textContent = workerSatisfaction + '%';
  capitalSatisfactionDisplay.textContent = capitalSatisfaction + '%';
}

// Initialize the game
function initGame() {
  createCityMap();
  updateStats();
}

// Function to create the city map
function createCityMap() {
  const cityMap = document.getElementById('city-map');
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.style.width = '50px';
    tile.style.height = '50px';
    tile.style.backgroundColor = '#eaeaea';
    tile.style.border = '1px solid #ccc';
    cityMap.appendChild(tile);
  }
}

initGame();

