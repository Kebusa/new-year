const head = document.getElementById("head")


window.addEventListener('scroll', () => {
    
    if(window.scrollY > 100 && window.scrollY < 300){
        head.style.backgroundColor = "red"
        head.style.transform = "translateY(-50vh)"
    }
    else if(window.scrollY > 300){
        head.style.backgroundColor = "red"
        head.style.transform = "translateY(0vh)"
        head.style.background = "linear-gradient(70deg, rgb(166, 78, 78) 0%,rgb(184, 36, 36) 50%,rgb(230, 201, 201) 100%)"
    }
    else{
        head.style.background = ""
        head.style.transform = "translateY(0vh)"
    }
})

const cardsContainer = document.querySelector('.cards-contain')
const data = [
    {image:'https://www.zgruzie.cz/wp-content/uploads/2023/07/alazani-valley-cervene-vino.png', name: 'Alazani valley', price:'4790 ₸', sale: "5000 ₸"},
    {image:'https://static.vecteezy.com/system/resources/thumbnails/051/015/830/small_2x/santa-s-sack-filled-with-christmas-gifts-and-presents-in-red-velvet-bag-png.png', name: 'Santa bag', price:'8000 ₸'},
    {image:'https://clipart-library.com/new_gallery/594108_new-year-hat-png.png', name: 'Elf cap', price:'1500 ₸', sale:"2000₸" },
    {image:'https://static.vecteezy.com/system/resources/thumbnails/049/151/007/small_2x/cozy-red-christmas-stocking-with-snowflake-design-cut-out-stock-png.png', name: 'Gift socks', price:'5250 ₸'},
    {image:'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-garland-and-wreath-of-spruce-branches-christmas-door-decor-png-image_9203904.png', name: 'Floral door', price:'2700 ₸'},
    {image:'https://static.vecteezy.com/system/resources/previews/047/444/084/non_2x/christmas-candle-on-transparent-background-ai-generative-free-png.png', name: 'candle', price:'700 ₸'},
    {image:'https://static.vecteezy.com/system/resources/previews/030/739/849/non_2x/full-body-portrait-of-santa-claus-isolated-on-transparent-background-old-man-wearing-santa-claus-costume-generative-ai-png.png', name: 'Santa figure', price:'7500 ₸',sale:"8750 ₸"},
    {image:'https://www.freeiconspng.com/uploads/red-christmas-balls-png-14.png', name: 'Ball', price:'2900 ₸'},
]

data.forEach((item) => {
    const card = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardName = document.createElement('h2')
    const cardPrice = document.createElement('b')
    const cardSale = document.createElement('del')

    cardImage.src = item.image
    cardName.textContent = item.name 
    cardPrice.textContent = item.price
    cardSale.textContent = item.sale
    
    cardSale.style.color = "red"

    card.appendChild(cardImage)
    card.appendChild(cardName)
    card.appendChild(cardPrice)
    card.appendChild(cardSale)

    const cardTrash = document.createElement('img')   
        cardTrash.src = 'https://cdn-icons-png.flaticon.com/512/481/481384.png'
        cardTrash.style.width = "40px"
        cardTrash.style.height = "40px"
        cardTrash.style.objectFit = "contain"
        cardTrash.style.padding = "5px"
        cardTrash.style.display = "none"
        cardTrash.style.position = 'absolute'
        cardTrash.style.top = "50px"
        cardTrash.style.left = "120px"
        cardTrash.style.backgroundColor = " rgb(153, 0, 0)"
        cardTrash.style.borderRadius = "999px"
        card.appendChild(cardTrash)
    const cardLike = document.createElement('img')   
        cardLike.src = 'https://www.svgrepo.com/show/13666/heart.svg'
        cardLike.style.width = "40px"
        cardLike.style.height = "40px"
        cardLike.style.objectFit = "contain"
        cardLike.style.padding = "5px"
        cardLike.style.display = "none"
        cardLike.style.position = 'absolute'
        cardLike.style.top = "50px"
        cardLike.style.left = "50px"
        cardLike.style.backgroundColor = " rgb(153, 0, 0)"
        cardLike.style.borderRadius = "999px"
        card.appendChild(cardLike)

    card.classList.add('card')

    cardsContainer.appendChild(card)

    card.addEventListener('mouseenter', () => {
        cardTrash.style.display = 'block'
        cardLike.style.display = "block"

    })

    card.addEventListener('mouseleave', () => {
        card.style = "normal"
        cardTrash.style.display = 'none'
        cardLike.style.display = "none"
    })

});

const NUMBER_OF_SNOWFLAKES = 300
const MAX_SNOWFLAKES_SIZE = 5
const MAX_SNOWFLAKES_SPEED = 2
const SNOWFLAKES_COLOUR = '#ddd'
const snowFlakes = []

const canvas = document.createElement('canvas')
canvas.style.position = 'absolute'
canvas.style.top = '0px'
canvas.style.pointerEvents = "none"
canvas.style.width = window.innerWidth
canvas.style.height = window.innerHeight
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')

const createSnowFlake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKES_SIZE),
    colour: SNOWFLAKES_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKES_SPEED + 3,
    sway: Math.random() - 0.5
})

const drawSnowFlake = snowFlake => {
    ctx.beginPath()
    ctx.arc(snowFlake.x, snowFlake.y, snowFlake.radius, 0 , Math.PI * 2)
    ctx.fillStyle = snowFlake.colour
    ctx.fill()
    ctx.closePath()
}

const updateSnowFlake = snowFlake =>{
    snowFlake.y += snowFlake.speed;
    snowFlake.x += snowFlake.sway;
    if (snowFlake.y > canvas.height) {
        Object.assign(snowFlake, createSnowFlake())
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    snowFlakes.forEach(snowFlake => {
        updateSnowFlake(snowFlake)
        drawSnowFlake(snowFlake)
    })
    requestAnimationFrame(animate, 80)
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowFlakes.push(createSnowFlake())    
}
window.addEventListener('DOMContentLoaded', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
})

animate()


const card1 = document.querySelector('.cardsblock1')
const card5 = document.querySelector('.cardsblock5')

window.addEventListener('scroll',() =>{
    if (window.scrollY > 1600) {
        card1.style.display = "none"
        card5.style.display = "block"
        
    }   
    else{
        card1.style.transform = "translateX(0vw)"
        card5.style.transform = "translateX(0vw)"
        card5.style.display = "none"
        card1.style.display = "block"
    }
})

const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')

leftButton.style.fontSize = "32px"
rightButton.style.fontSize = "32px" 

leftButton.addEventListener('click', () => {
    card1.style.display = "none"
    card5.style.display = "block"
})
rightButton.addEventListener('click', () => {
    card1.style.transform = "translateX(0vw)"
    card5.style.transform = "translateX(0vw)"
    card5.style.display = "none"
    card1.style.display = "block"
})

const scrollUp = document.getElementById('scrollUp')



window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUp.style.display = "block"
        scrollUp.style.position = "sticky"
        scrollUp.style.right = "50px"
        scrollUp.style.backgroundColor = "yellow"
        scrollUp.style.borderRadius = "12px"
        scrollUp.style.padding = "7px"
        scrollUp.style.bottom = "50px"  
        scrollUp.style.border = "none"
        scrollUp.style.textDecoration = "none"
        scrollUp.style.color = "black"
        scrollUp.style.width = "fit-content"
    }
    else{
        scrollUp.style.display = 'none'
        scrollUp.style.position = "sticky"
        scrollUp.style.right = "50px"
        scrollUp.style.backgroundColor = "yellow"
        scrollUp.style.borderRadius = "12px"
        scrollUp.style.padding = "7px"
        scrollUp.style.bottom = "50px"
        scrollUp.style.border = "none"
        scrollUp.style.textDecoration = "none"
        scrollUp.style.color = "black"
        scrollUp.style.width = "fit-content"
    }
})

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentYear = new Date().getFullYear()

const newYearTime = new Date(`january 1 ${currentYear + 1} 00:00:00`)

function updateCurrentdowntime() {
    const currentTime = new Date() 
    const diff = newYearTime - currentTime
    const d = Math.floor(diff / 1000 /  60 / 60 / 24);
    const h = Math.floor(diff / 1000 /  60 / 60 )% 24
    const m = Math.floor(diff / 1000 /  60  ) % 60
    const s = Math.floor(diff / 1000 ) % 60
    
    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s
}
setInterval(updateCurrentdowntime, 1000)