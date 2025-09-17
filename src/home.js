
import './css/home.css'
import img from './images/resImg.png'
import hero1 from './images/hero1.png'
import hero2 from './images/hero2.png'
import hero3 from './images/hero3.png'
import hero4 from './images/hero4.png'
import hero5 from './images/hero5.png'
import{res} from './res.js'

let content = document.querySelector(".content")




const getHeader = () => {
    let header = document.createElement("div")
    let h2 = document.createElement("h2")
    let h1 = document.createElement("h1")
    let description = document.createElement('p')
    let tag = document.createElement('p')
    let resContainer = document.createElement('div')
    let resBtn = document.createElement('button')
    let resImg = document.createElement('img')

    resBtn.addEventListener("click",() => {
        content.replaceChildren(res())
    })


    header.classList.add("header")
    resContainer.classList.add("resContainer")


    h2.textContent = 'Welcome to'
    h1.textContent = 'Purrla'
    description.textContent = 'Purrla is a modern American restaurant where comfort and sophistication meet. Our menu reimagines classic American dishes with fresh, seasonal ingredients and a creative touch, served in a warm, stylish space designed for gathering. Inspired by elegance with a playful edge, Purrla offers an experience that feels both refined and welcoming—perfect for everything from date nights to weekend brunch.'
    tag.textContent = 'Where timeless American favorites are reinvented with style, flavor, and a modern spirit—welcome to Purrla'
    resBtn.textContent = 'Make a reservation'
    resImg.src = img
    // reservationContainer.appendChild()
    resContainer.appendChild(resImg)
    resContainer.appendChild(resBtn)

    header.appendChild(h2)
    header.appendChild(h1)
    header.appendChild(description)
    header.appendChild(tag)
    header.appendChild(resContainer)

    return header
}


const getHeaderImages = () => {
    let arr= [hero1,hero2,hero3,hero4,hero5]
    let headerImages = document.createElement("div")


    for(let i =0; i < arr.length; i++){
        let div = document.createElement('div')
        let img = document.createElement('img')

        div.id = (`hero${i+1}`)
        div.style.backgroundImage = `url(${arr[i]})`
        // img.src = arr[i]
        // div.appendChild(img)
        headerImages.appendChild(div)
    }


    headerImages.classList.add("headerImages")


    return headerImages
}

const homePage = () => {
    let home = document.createElement("div")




    home.classList.add("homeContainer")





    home.appendChild(getHeader())
    home.appendChild(getHeaderImages())


    return home
}






export {homePage}