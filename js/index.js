function checkNumber(event) {
    var aCode = event.which ? event.which : event.keyCode;
    if (aCode > 31 && (aCode < 46 || aCode == 47 || aCode > 57)) return false;
    return true;
}

const convertBtn = document.getElementById('convert-btn')
const inputValue = document.getElementById('input-value')
const pEl = document.querySelectorAll('#result')

let unit = {
    "length": {
        "feet" : 3.2808,
        "meter" : 0.3048
    },
    "volume":{
        "gallon" : 0.264172,
        "liter" : 3.78541
    },
    "mass":{
        "pound" : 2.20462,
        "kilogram" : 0.453592
    }
}
let checking = (inputValue.value == false) ? check() : result();

function convert (to) {
    let value = inputValue.valueAsNumber
    return (value * to).toFixed(3)
}

convertBtn.addEventListener('click', function () {
    result()
})

window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        result()
    }
});

function check() {
    let contain = 0
    pEl[0].innerHTML = `${contain} meters = ${contain} feet | ${contain} feet = ${contain} meters`
    pEl[1].innerHTML = `${contain} liters = ${contain} gallons | ${contain} gallons = ${contain} liters`
    pEl[2].innerHTML = `${contain} kilos = ${contain} pounds | ${contain} pounds = ${contain} kilos`
}

function result() {
    let val = inputValue.valueAsNumber
    if(inputValue.value == ""){
        check()
    }else{
        pEl[0].innerHTML = `${val} meters = ${convert(unit.length.feet)} feet | ${val} feet = ${convert(unit.length.meter)} meters`
        pEl[1].innerHTML = `${val} liters = ${convert(unit.volume.gallon)} gallons | ${val} gallons = ${convert(unit.volume.liter)} liters`
        pEl[2].innerHTML = `${val} kilos = ${convert(unit.mass.pound)} pounds | ${val} pounds = ${convert(unit.mass.kilogram)} kilos`
    }
}


