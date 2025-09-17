import './css/styles.css'
import{homePage} from './home.js'
import{menu} from './menu.js'
import{res} from './res.js'
import{about} from './about.js'
import{location} from './location.js'

let content = document.querySelector(".content")
const navBtns = document.querySelectorAll('.navBtn')
const logo = document.querySelector(".logo")




logo.addEventListener('click',() => {
    content.replaceChildren(homePage())

})


for(let i = 0; i < navBtns.length; i++){
    navBtns[i].addEventListener('click',(e) => {
        let className = e.target.innerHTML
        if(className === 'Menu'){
            content.replaceChildren(menu())
        }
        else if(className === 'Locations'){
            content.replaceChildren(location())
        }
        else if(className === 'About'){
            content.replaceChildren(about())

        }
        else if(className === 'Reservations'){
            content.replaceChildren(res())
        }
    })
}




// content.appendChild(menu())
content.appendChild(homePage())
// content.appendChild(res())
// content.appendChild(about())
// content.appendChild(location())


