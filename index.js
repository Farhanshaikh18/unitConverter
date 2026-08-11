const inputEl = document.getElementById("input-el").value
const convert1El = document.getElementById("Conversion1")
const convert2El = document.getElementById("Conversion2")
const convert3El = document.getElementById("Conversion3")
const btnEl = document.getElementById("convert-btn")
const  a = inputEl

const feet = a*3.281
const meters = a/3.281
const gallons = a*0.264
const litres = a/0.264
const pounds = a*2.204
const kilos = a/2.204

btnEl.addEventListener("click",function(inputEl){
    convert1El.innerHTML = `${a} meters = ${feet} feet | ${a} feet = ${meters} meters`
    convert2El.innerHTML = `${a} liters = ${gallons} gallons | ${a} gallons = ${litres} liters`
    convert3El.innerHTML = `${a} kilos = ${pounds} pounds | ${a} pounds = ${kilos} kilos`
})