document.addEventListener("DOMContentLoaded", function () {
    //render navbar
    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(navbarHtml => {
            document.getElementById("navbar").innerHTML = navbarHtml;
        });
    //render components
    fetch("./components/component.html")
        .then(response => response.text())
        .then(componentHtml => {
            document.getElementById("component").innerHTML = componentHtml;
        });
    // Template to add course change the JSON file name
    fetch('./chapter-data/STRUCTURE_SAMPLE.json')
    .then(response => response.json())
    .then(data => {
        const main = document.querySelector('.box');
        const tutorial = document.createElement('div');
        tutorial.classList.add('tutorial');

        tutorial.innerHTML = `<h2>${data.chapter_name}</h2><p>${data.chapter_description}</p>`;

        main.appendChild(tutorial);
    });
    fetch('./chapter-data/DATA_STRUCTURES_WITH_CPP.json')
        .then(response => response.json())
        .then(data => {
            const main = document.querySelector('.box');
            const tutorial = document.createElement('div');
            tutorial.classList.add('tutorial');

            tutorial.innerHTML = `<h2>${data.chapter_name}</h2><p>${data.chapter_description}</p>`;

            main.appendChild(tutorial);
        });
        fetch('./chapter-data/ALL_ABOUT_JAVASCRIPT.json')
        .then(response => response.json())
        .then(data => {
            const main = document.querySelector('.box');
            const tutorial = document.createElement('div');
            tutorial.classList.add('tutorial');

            tutorial.innerHTML = `<h2>${data.chapter_name}</h2><p>${data.chapter_description}</p>`;

            main.appendChild(tutorial);
        });
        

       
});
