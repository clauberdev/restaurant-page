import './style.css';

function nav() {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    nav.classList.add('menu')

    // create li 
    const menus = ['Home', 'Menu', 'Contact']
    menus.forEach((content) => {
        const li = document.createElement('li')
        li.textContent = content
        ul.appendChild(li)
    })
    nav.appendChild(ul)
    return nav
}


function hours() {
    const listHours = [
        'Sunday: 8am - 8pm',
        'Monday: 6am - 6pm',        
        'Tuesday: 6am - 6pm',
        'Wednesday: 6am - 6pm',
        'Thursday: 6am - 10pm',
        'Friday: 6am - 10pm',        
        'Saturday: 8am - 10pm']
    
    const h2 = document.createElement('h2')
    h2.textContent = 'Hours'

    const hours = document.createElement('div')
    const ul = document.createElement('ul')

    hours.classList.add('hours') 
    listHours.forEach((hour) => {
        const li = document.createElement('li')
        li.textContent = hour 
        ul.appendChild(li)
    })

    hours.appendChild(h2)
    hours.appendChild(ul)
    return hours
}

function location() {
    const location = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    location.classList.add('location')

    h2.textContent = 'Location'
    p.textContent = '123 Forest Drive, Forestville, Maine'

    location.appendChild(h2)
    location.appendChild(p)

    return location
}

function main() {
    const main = document.createElement('main')
    const title = document.createElement('h1')
    const resume = document.createElement('div')
    resume.classList.add('resume')

    main.classList.add('main')
    title.textContent = "Beary's Breakfast Bar"
    resume.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."

    main.appendChild(title)
    main.appendChild(resume)
    main.appendChild(hours())
    main.appendChild(location())
    return main
}

function header() {
    const header = document.createElement('header')
    header.appendChild(nav())

    return header
}

function content() {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')

    content.appendChild(header())
    content.appendChild(main())
    return content
}

document.body.appendChild(content())
