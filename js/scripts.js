// adds current year in footer
const currentYear = new Date()
document.querySelector("#year").innerHTML = currentYear.getFullYear()

// move nav in and out
const hb = document.querySelector("#hamburgerBtn")
const pw = document.querySelector("#pageWrapper")

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver')

})


// getting the hotel information for the cards
import {hotels} from "../data/hotels.js"
const hotelCards = document.querySelector("#allCards")

hotels.forEach (hotel => {
    const mySection = document.createElement("section")

    const hotelImage = document.createElement("img")
    hotelImage.src = `images/${hotel.photo}`
    // console.log(hotelImage)

    const hotelName = document.createElement("h2")
    hotelName.innerHTML = hotel.name
    // console.log(hotelName)

    const hotelAddress = document.createElement("address")
    hotelAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`
    // console.log(hotelAddress)

    const hotelPhone = document.createElement("a")
    hotelPhone.innerHTML = hotel.phone
    hotelPhone.href = `tel: ${hotel.phone}`
    console.log(hotelPhone)

    //adding all the elements to the section (card)
    mySection.appendChild(hotelImage)
    mySection.appendChild(hotelName)
    mySection.appendChild(hotelAddress)
    mySection.appendChild(hotelPhone)

    // adding the card to the page
    hotelCards.appendChild(mySection)

})



