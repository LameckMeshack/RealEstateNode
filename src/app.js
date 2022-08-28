const feedDisplay = document.querySelector("#house");

fetch("http://127.0.0.1:3000/houses/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((house) => {
      const houseItem = `<div class="card">
          <img src= ${house.image} width="200" height="200" alt="" />
          <div class="card-content">
            <h3 class="card-title">${house.title}</h3>
            <h3 class="card-text">${house.location}</h3>
            <h2 class="card-title">${house.price}</h2>
          </div>
        </div>`;

      feedDisplay.insertAdjacentHTML("beforeend", houseItem);
    });
  })
  .catch((err) => console.log(err));
