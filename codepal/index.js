document.addEventListener("DOMContentLoaded", function () {
    //render navbar
    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(navbarHtml => {
            document.getElementById("navbar").innerHTML = navbarHtml;
        });


    // fetchAllCards
    async function fetchAllcards() {
        await fetch("./Chapters.json")
            .then(responce => responce.json())
            .then(data => {
                // console.log(data.chapter_data_paths)
                for (let i = 0; i < data.chapter_data_paths.length; i++) {
                    console.log("card path : ", data.chapter_data_paths[i])
                    rendercard(`.${data.chapter_data_paths[i]}`)
                }
                // let allchapter = JSON.parse(data)
            })
    }

    //render Cards
    async function rendercard(path) {

        // console.log(path)
        let carddata;
        await fetch(path)
            .then(response => response.json())
            .then(cardData => {
                console.log("cardData : ", cardData)
                carddata = cardData

            });

        await fetch("./components/Maincard.html")
            .then(responce => responce.text())
            .then((componentHTML) => {
                const cardsContainer = document.getElementById("Allcards")

                // const type = typeof componentHTML 
                // console.log(type) // string

                const FinalCardComponent = componentHTML
                    .replace(/{{Cardtitle}}/g, carddata.chapter_name)
                    .replace(/{{CardDescription}}/g, carddata.chapter_description);

                cardsContainer.innerHTML += FinalCardComponent

            })
    }

    fetchAllcards()


});
