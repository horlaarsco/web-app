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
        <div class="featured-fruit row align-items-center g-4">
            <div class="col-md-5 text-center text-md-start">
                <img src="${fruit.image}" alt="${fruit.name}" class="img-fluid rounded shadow">
            </div>
            <div class="col-md-7">
                <div class="p-3">
                    <span class="text-white bg-red badge text-uppercase mb-3 py-2 px-3">Fruit of the Day</span>
                    <h2 class="display-6 mb-3">${fruit.name}</h2>
                    <p class="lead mb-4">${fruit.description}</p>
                    <div class="benefits">
                        <h3 class="h5 mb-3 text-red">Health Benefits:</h3>
                        <ul class="ps-0 text-muted">
                            ${fruit.benefits
                              .map(
                                (benefit) => `
                                <li class="mb-2">${benefit}</li>
                            `
                              )
                              .join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}
