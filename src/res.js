import './css/res.css'
import hero1 from './images/hero1.png'
import hero2 from './images/hero2.png'
import hero3 from './images/hero3.png'
import hero4 from './images/hero4.png'
import hero5 from './images/hero5.png'
import logo from './images/logo.png'

const reserveHeader = () => {
    let div = document.createElement("div")
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')

    div.classList.add("reserveHeader")

    h1.textContent = 'Reserve Your Spot Today At'
    p1.textContent = 'At Purrla, every meal is designed for connection—whether it’s a cozy dinner for two, a celebratory night out with friends, or a weekend brunch that lingers a little longer.'
    p2.textContent = 'Booking is simple: choose your date, time, and party size, and we’ll take care of the rest. While reservations are encouraged to ensure your preferred seating, we’re always happy to welcome walk-ins when space allows. If you’re celebrating a special occasion, let us know—we’d love to make it unforgettable.'
    img.src = logo


    div.appendChild(h1)
    div.appendChild(img)
    div.appendChild(p1)
    div.appendChild(p2)
    return div 
}


const reserveImages = () => {
    let arr= [hero1,hero2,hero3,hero4,hero5]
    let contain = document.createElement("div")


    for(let i =0; i < arr.length; i++){
        let div = document.createElement('div')
        let img = document.createElement('img')

        div.id = (`hero${i+1}`)
        div.style.backgroundImage = `url(${arr[i]})`
        // img.src = arr[i]
        // div.appendChild(img)
        contain.appendChild(div)
    }


    contain.classList.add("reserveImages")


    return contain
}
 
const res = () => {
    let resContainer = document.createElement("div")

    resContainer.classList.add("reserveContainer")

    resContainer.appendChild(reserveHeader())
    resContainer.appendChild(reserveImages())

    return resContainer
}






export {res}