
const description = document.querySelector(".cards")


fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json")
.then(response => response.json())
.then(data => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.innerText = data.entreprise.produits[0].description
   
    const img = document.createElement("img")
    img.setAttribute("src", "https://mapatisserie.fr/wp-content/uploads/2021/09/eclair-chocolat-P1080408-03-scaled.jpeg")
    div.appendChild(img)
    div.classList.add("card")
    div.appendChild(p)
    description.appendChild(div)
})



const formDom = document.querySelector("form")

const nameDom = document.querySelector("#firstname")

const lastname = document.querySelector("#lastname")

const commentaire = document.querySelector("#com")

const button = document.querySelector("#button")


formDom.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(lastname.value);
    console.log(nameDom.value);
    console.log(commentaire.value);
    
    const div2 = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.innerText = ("Hello")
    console.log(h1)
    div2.appendChild(h1)
})