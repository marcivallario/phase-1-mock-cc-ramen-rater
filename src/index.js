// write your code here
let ramenMenu;
const ramenMenuList = document.getElementById('ramen-menu');
const newRamenForm = document.getElementById('new-ramen');

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramenDishes => {
        ramenMenu = ramenDishes;
        ramenMenu.forEach(dish => loadRamen(dish))
    })

    newRamenForm.addEventListener('submit', event => {
        event.preventDefault();
        const newRamen = {
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: event.target.rating.value,
            comment: event.target["new-comment"].value
        }
        loadRamen(newRamen);
    })
})

function loadRamen(ramenDish) {
    let ramenImg = document.createElement('img');
    ramenImg.addEventListener('click', () => displayDish(ramenDish))
    ramenImg.src = ramenDish.image;
    ramenMenuList.append(ramenImg);
}

function displayDish(ramenDish) {
    const detailDiv = document.getElementById('ramen-detail');
    const detailImg = detailDiv.querySelector('img');
    const detailName = detailDiv.querySelector('h2');
    const detailRestaurant = detailDiv.querySelector('h3');
    let rating = document.getElementById('rating-display')
    let comment = document.getElementById('comment-display');


    detailImg.src = ramenDish.image;
    detailName.textContent = ramenDish.name;
    detailRestaurant.textContent = ramenDish.restaurant
    rating.textContent = ramenDish.rating;
    comment.textContent = ramenDish.comment;
}
