const filmButton = document.querySelector('.buttons .film');
const characterButton = document.querySelector('.buttons .character');
const locationButton = document.querySelector('.buttons .location');
const generatedInfoDiv = document.querySelector('.generated-info');

function generateFilm() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('Something went wrong');
            }
        })
        .then(data => { 
            let i = Math.floor(Math.random() * data.length);
            let filmInfo = document.createElement('p');
            let title = data[i].title;
            let description = data[i].description;
            filmInfo.innerHTML =  `
                <span>Title: ${title}</span>
                <span>Description: ${description}</span>
            `;
            generatedInfoDiv.appendChild(filmInfo);
        });
        generatedInfoDiv.textContent = "";
}

function generateCharacter() {
    fetch('https://ghibliapi.herokuapp.com/people')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('Something went wrong');
            }
        })
        .then(data => { 
            let i = Math.floor(Math.random() * data.length);
            let charInfo = document.createElement('p');
            let name = data[i].name;
            let gender = data[i].gender;
            let age = data[i].age;
            if (gender === "NA") {
                gender = "Unspecified";
            }
            if (age === "") {
                age = "Unspecified";
            }
            charInfo.innerHTML =  `
                <span>Name: ${name}</span>
                <span>Gender: ${gender}</span>
                <span>Age: ${age}</span>
            `;
            generatedInfoDiv.appendChild(charInfo);
        });
        generatedInfoDiv.textContent = "";
}

function generateLocation() {
    fetch('https://ghibliapi.herokuapp.com/locations')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('Something went wrong');
            }
        })
        .then(data => { 
            let i = Math.floor(Math.random() * data.length);
            let locInfo = document.createElement('p');
            let name = data[i].name;
            let terrain = data[i].terrain;
            let climate = data[i].climate;
            locInfo.innerHTML =  `
                <span>Name: ${name}</span>
                <span>Terrain: ${terrain}</span>
                <span>Climate: ${climate}</span>
            `;
            generatedInfoDiv.appendChild(locInfo);
        });
        generatedInfoDiv.textContent = "";
}

filmButton.addEventListener('click', generateFilm);
characterButton.addEventListener('click', generateCharacter);
locationButton.addEventListener('click', generateLocation);