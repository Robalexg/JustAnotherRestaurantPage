import './css/styles.css'
import{homePage} from './home.js'
import{menu} from './menu.js'
import{res} from './res.js'
import{about} from './about.js'
import{location} from './location.js'



let content = document.querySelector(".content")
// content.appendChild(menu())
// content.appendChild(homePage())
content.appendChild(res())
// content.appendChild(about())
// content.appendChild(location())


