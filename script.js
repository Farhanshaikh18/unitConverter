const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


btnEl.addEventListener("click", function(){
    const user_input = Number(inputEl.value)
    const feet = (user_input * 3.28084).toFixed(3)
    const meters = (user_input / 3.28084).toFixed(3)
    const gallons = (user_input * 0.264172).toFixed(3)
    const litres = (user_input / 0.264172).toFixed(3)
    const pounds = (user_input * 2.20462).toFixed(3)
    const kilos = (user_input / 2.20462).toFixed(3)
    lengthEl.textContent = `${user_input} meters = ${feet} feet | ${user_input} feet = ${meters} meters`
    volumeEl.textContent = `${user_input} liters = ${gallons} gallons | ${user_input} gallons = ${litres} liters`
    massEl.textContent = `${user_input} kilos = ${pounds} pounds | ${user_input} pounds = ${kilos} kilos`
})