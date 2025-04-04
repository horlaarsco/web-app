document.addEventListener('DOMContentLoaded', function () {
  fetchFruitOfDay()
})

async function fetchFruitOfDay() {
  try {
    const response = await fetch('https://fruits-6x59.onrender.com/random')
    const fruit = await response.json()
    updateFruitOfDay(fruit)
  } catch (error) {
    console.error('Error fetching fruit of the day:', error)
  }
}

function updateFruitOfDay(fruit) {
  const container = document.querySelector('.fruit-of-day .container')
  if (!container) return

  container.innerHTML = `
    <div class="featured-fruit">
      <img src="${fruit.image}" alt="${fruit.name}">
      <div class="featured-fruit-content">
        <span class="featured-label">Fruit of the Day</span>
        <h2>${fruit.name}</h2>
        <p>${fruit.description}</p>
        <div class="benefits">
          <h3>Health Benefits:</h3>
          <ul>
            ${fruit.benefits.map((benefit) => `<li>${benefit}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `
}
