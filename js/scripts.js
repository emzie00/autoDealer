function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

import { reviews } from '../js/reviews.js';
console.log(reviews);

const myTarget = document.querySelector("#reviews");

for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section')

    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const myRating = document.createElement('div')

    console.log(reviews[x].stars)

    for (let step = 0; step < reviews[x].stars; step++) {
        const starNumber = document.createElement('img')
        starNumber.src = "../svgs/star-outline.svg"
        myRating.appendChild(starNumber)
    }

    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    mySection.appendChild(myReview);

    myTarget.appendChild(mySection);
}

