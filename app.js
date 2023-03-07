console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let search = document.getElementById("searchWord");
let submitSearch = document.getElementById("submitSearch")
let img = document.getElementById("img")
let feedBack = document.getElementById("feedback")

submitSearch.addEventListener('click', () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9JWE1WpHR98so9cGg64O8OtMLernrFxA&s=${search.value}`)
        .then((res) => res.json())
        .then((data) => {
            img.src = data.data.images.original.url

        })
        .catch((err) => {
            console.error(err)
            feedBack.textContent = err.message
        })
    search.value = ""
})