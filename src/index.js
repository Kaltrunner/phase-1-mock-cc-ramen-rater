// write your code here
let menu = document.getElementById('ramen-menu');

fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then( ramens => {
    console.log(ramens, 'fetching')

    ramens.forEach(ramen => {
        renderramens(ramen)
    })
})

const renderramens = (ramen) => {
    let img = document.createElement('img');
    img.src = ramen.image

    menu.append(img)

    img.addEventListener("click", () => {
        console.log(ramen)
        let ramenImage = document.querySelector('.detail-image')
        ramenImage.src = ramen.image

        let name = document.querySelector('.name')
        name.innerHTML = ramen.name

        let restaurant = document.querySelector('.restaurant')
        restaurant.innerHTML = ramen.restaurant

        let rating = document.getElementById('rating-display')
        rating.innerHTML = ramen.rating

        let comment = document.getElementById('comment-display')
        comment.textContent = ramen.comment
    })
}

let form = document.getElementById('new-ramen')

from.addEventListener('submit', (e)=>{
    e.preventDefault()

    let comment = document.getElementById('new-comment')
    console.log(e.target.name.value, e.target.restaurant.value, e.target.image.value, e.target.rating.value, comment.value)

    renderramens({
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: comment.value
    })

    fetch('http://localhost:3000/ramens', {
        methed: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.rating.target.value,
            comment: comment.value
        })
    })
})