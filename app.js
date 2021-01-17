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
            let i = Math.floor(Math.random() * data.length + 1);
            let filmInfo = document.createElement('p');
            let title = data[i].title;
            let description = data[i].description;
            filmInfo.textContent =  `
                Title: ${title}
                Description: ${description}
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
            console.log(data);
            let i = Math.floor(Math.random() * data.length + 1);
            let charInfo = document.createElement('p');
            let name = data[i].name;
            let gender = data[i].gender;
            let age = data[i].age;
            charInfo.textContent =  `
                Name: ${name}
                Gender: ${gender}
                Age: ${age}
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
            console.log(data);
            let i = Math.floor(Math.random() * data.length + 1);
            let locInfo = document.createElement('p');
            let name = data[i].name;
            let terrain = data[i].terrain;
            let climate = data[i].climate;
            locInfo.textContent =  `
                Name: ${name}
                Terrain: ${terrain}
                Climate: ${climate}
            `;
            generatedInfoDiv.appendChild(locInfo);
        });
        generatedInfoDiv.textContent = "";
}

filmButton.addEventListener('click', generateFilm);
characterButton.addEventListener('click', generateCharacter);
locationButton.addEventListener('click', generateLocation);