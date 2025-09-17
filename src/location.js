import './css/location.css'
import hero1 from './images/hero1.png'
import hero2 from './images/hero2.png'
import hero3 from './images/hero3.png'
import hero4 from './images/hero4.png'
import hero5 from './images/hero5.png'




const locationHeader = () => {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    div.classList.add("locationHeader")

    h1.textContent = 'Our Locations'
    p1.textContent = 'Find us at the heart of the city, where energy and elegance meet. Purrla is conveniently located just steps from local shops, galleries, and nightlife, making it the perfect spot to start—or end—your evening.'
    p2.textContent = 'Our neighborhood reflects the spirit of Purrla itself: modern, vibrant, and full of character. Whether you’re joining us for a quick lunch, a leisurely brunch, or a night of celebration, we’re proud to be part of a community that inspires connection and creativity.'
    p3.textContent = 'Parking and transit are simple, with nearby garages and public transportation within walking distance. However you arrive, we’ll be ready to welcome you with open doors and a warm table.'

    div.appendChild(h1)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    return div
}

const locationImages = () => {
    let arr= [hero1,hero2,hero3,hero4,hero5]
    let locationImg = document.createElement("div")

     for(let i =0; i < arr.length; i++){
        let div = document.createElement('div')
        let img = document.createElement('img')

        div.id = (`hero${i+1}`)
        div.style.backgroundImage = `url(${arr[i]})`
        // img.src = arr[i]
        // div.appendChild(img)
        locationImg.appendChild(div)
    }
    
    locationImg.classList.add("locationImg")  


    return locationImg
}



//   let arr= [hero1,hero2,hero3,hero4,hero5]
//     let aboutImg = document.createElement("div")
    

//     for(let i =0; i < arr.length; i++){
//         let div = document.createElement('div')
//         let img = document.createElement('img')

//         div.id = (`hero${i+1}`)
//         div.style.backgroundImage = `url(${arr[i]})`
//         // img.src = arr[i]
//         // div.appendChild(img)
//         aboutImg.appendChild(div)
//     }



//     aboutImg.classList.add("aboutImg")  
//     return aboutImg



const location = () => {
    let div = document.createElement("div")
    div.classList.add("locationContainer")

    div.appendChild(locationHeader())
    div.appendChild(locationImages())

    return div
}






export {location}