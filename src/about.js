import './css/about.css'
import hero1 from './images/hero1.png'
import hero2 from './images/hero2.png'
import hero3 from './images/hero3.png'
import hero4 from './images/hero4.png'
import hero5 from './images/hero5.png'
import{location} from './location.js'

let content = document.querySelector(".content")



const aboutHeader = () => {
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let btn = document.createElement('button')

    btn.addEventListener('click',() => {
        content.replaceChildren(location())
    })

    div.classList.add("aboutHeader")

    h1.textContent = 'The Purrla Experience'
    p1.textContent = 'At Purrla, we believe dining should feel both refined and welcoming. Our space is designed to balance modern style with a sense of warmth, making it the perfect place to gather, celebrate, or simply enjoy a night out.'
    p2.textContent = 'Our menu reimagines modern American cuisine with seasonal ingredients, bold flavors, and thoughtful presentation. From small plates to signature mains, every dish is crafted to feel familiar yet elevated.'
    p3.textContent = 'The atmosphere at Purrla is lively but relaxed, with an attention to detail that makes each visit special. Whether you’re here for a weekend brunch or an intimate dinner, we want you to feel at home.'
    p4.textContent = 'Above all, Purrla is about connection—between food and flavor, people and place, comfort and creativity. It’s dining that’s playful, polished, and unforgettable.'
    btn.textContent = 'Check out our locations'


    div.appendChild(h1)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(btn)


    return div
}

const aboutImages = () => {
    let arr= [hero1,hero2,hero3,hero4,hero5]
    let aboutImg = document.createElement("div")
    

    for(let i =0; i < arr.length; i++){
        let div = document.createElement('div')
        let img = document.createElement('img')

        div.id = (`hero${i+1}`)
        div.style.backgroundImage = `url(${arr[i]})`
        // img.src = arr[i]
        // div.appendChild(img)
        aboutImg.appendChild(div)
    }



    aboutImg.classList.add("aboutImg")  
    return aboutImg

}



const about = () => {
    let div = document.createElement("div")

    div.classList.add('aboutContainer')


    div.appendChild(aboutImages())
    div.appendChild(aboutHeader())

    return div
}






export {about}