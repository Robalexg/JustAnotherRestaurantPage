import './css/menu.css'
import menuImg from './images/menu.png'




const getMenu = () => {
    let menu = document.createElement("div")    
    let appsTitle = document.createElement('h1')
    let mainsTitle = document.createElement('h1')
    let sidesTitle = document.createElement('h1')
    let app1Title = document.createElement('h2')
    let app2Title = document.createElement('h2')
    let app3Title = document.createElement('h2')
    let app1descript = document.createElement('p')
    let app2descript = document.createElement('p')
    let app3descript = document.createElement('p')
    let main1Title = document.createElement('h2')
    let main2Title = document.createElement('h2')
    let main3Title = document.createElement('h2')
    let main1Descript = document.createElement('p')
    let main2Descript = document.createElement('p')
    let main3Descript = document.createElement('p')
    let side1Title = document.createElement("h2")
    let side2Title = document.createElement("h2")
    let side3Title = document.createElement("h2")
    let side4Title = document.createElement("h2")
    let side1Descript = document.createElement("p")
    let side2Descript = document.createElement("p")
    let side3Descript = document.createElement("p")
    let side4Descript = document.createElement("p")

    menu.classList.add("menu")
    mainsTitle.classList.add('mainsTitle')
    sidesTitle.classList.add('sidesTitle')

    

    appsTitle.textContent = 'Appetizer:'
    mainsTitle.textContent = 'Main Course:'
    sidesTitle.textContent = 'Sides:'

    app1Title.textContent = 'Garden Whispers'
    app2Title.textContent = 'Velvet Paws'
    app3Title.textContent = 'Coastal Crave'

    app1descript.textContent = 'Charred seasonal vegetables with whipped herb ricotta and balsamic drizzle.'
    app2descript.textContent = 'Truffle parmesan fries, served with garlic aioli and house-made ketchup.'
    app3descript.textContent = 'Seared crab cakes with citrus slaw and lemon-dill remoulade.'

    main1Title.textContent = 'Ember Steak'
    main2Title.textContent = 'Harvest Glow'
    main3Title.textContent = 'Velvet Burger'

    main1Descript.textContent = 'Grilled prime sirloin with charred scallion butter, roasted potatoes, and seasonal greens.'
    main2Descript.textContent = 'Pan-seared salmon with sweet corn purée, blistered tomatoes, and crispy leeks.'
    main3Descript.textContent = 'Grass-fed beef with smoked cheddar, caramelized onions, pickles, and brioche bun.'

    side1Title.textContent = 'Charred Greens'
    side2Title.textContent = 'Golden Whisk'
    side3Title.textContent = 'Corn Velvet'
    side4Title.textContent = 'Hearth Mash'

    side1Descript.textContent  ='Seasonal vegetables with garlic oil and sea salt.'
    side2Descript.textContent  ='Crispy fries tossed with parmesan and herbs.'
    side3Descript.textContent  ='Creamy sweet corn with chili butter and scallions.'
    side4Descript.textContent  ='Whipped potatoes with roasted garlic and chive.'



    ///Apps
    
    menu.appendChild(appsTitle)
    
    menu.appendChild(app1Title)
    menu.appendChild(app1descript)

    menu.appendChild(app2Title)
    menu.appendChild(app2descript)

    menu.appendChild(app3Title)
    menu.appendChild(app3descript)

    ///Main 
    menu.appendChild(mainsTitle)

    menu.appendChild(main1Title)
    menu.appendChild(main1Descript)

    menu.appendChild(main2Title)
    menu.appendChild(main2Descript)


    menu.appendChild(main3Title)
    menu.appendChild(main3Descript)



    //Sides
    menu.appendChild(sidesTitle)

    menu.appendChild(side1Title)
    menu.appendChild(side1Descript)

    menu.appendChild(side2Title)
    menu.appendChild(side2Descript)

    menu.appendChild(side3Title)
    menu.appendChild(side3Descript)

    menu.appendChild(side4Title)
    menu.appendChild(side4Descript)


    return menu

}

const getHeader = () => {
    let header= document.createElement("div")
    let title = document.createElement("h1")
    let quote = document.createElement("p")
    let description = document.createElement("p")
    let img = document.createElement('img')

    header.classList.add('menuHeader')

    title.textContent = 'Summer Menu'
    quote.textContent = '"Where flavor meets sophistication."'
    description.textContent = 'Purrla reimagines modern American dining with fresh, seasonal ingredients and elevated comfort dishes. From vibrant starters to hearty mains and indulgent desserts, every plate is crafted to be stylish, approachable, and meant for sharing.'
    img.src = menuImg

    header.appendChild(title)
    header.appendChild(quote)
    header.appendChild(description)
    header.appendChild(img)

    return header
}






const menu = () => {
    let menuContainer = document.createElement('div')

    menuContainer.classList.add('menuContainer')

    menuContainer.appendChild(getHeader())
    menuContainer.appendChild(getMenu())
    
    return menuContainer
}






export {menu}