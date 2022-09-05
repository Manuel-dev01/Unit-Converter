    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */


    const meterToFeet =  3.281
    const literToGallon =  0.264
    const kiloToPound =  2.204

    const feetToMeter = 0.3047
    const gallonToLiter = 3.7878
    const poundToKilo = 0.4537

    document.getElementById("value").addEventListener('keypress', function(){
        this.style.width =  `${this.value.length + 1}em`;
        this.style.fontSize = `${fontSize++}px`;
    })

    let conValue01 = document.getElementById("box2")
    let conValue = document.getElementById("box1")
    let conValue02 = document.getElementById("box3")
    let inputEl = document.getElementById("value");
    console.log(inputEl)


    document.getElementById("convert-btn").addEventListener("click", function(){

        let effect = document.querySelector("#convert-btn")
        effect.classList.add('convert')
        
        renderConversion(meterToFeet, feetToMeter)
        renderConversions_two()
        renderConversion_three()
        inputEl.value = ""
    })

    function renderConversion(con, cont){
        
        let val = inputEl.value;
        let value = ` ${val} meters = ${val * con} feet | ${val} feet = ${val * cont} meters `;
        conValue.innerHTML =  value;
        // meterToFeet
        // feetToMeter
            
    }

    function renderConversions_two(){
        // 
        let val = inputEl.value;
        let value = ` ${val} litre = ${val * literToGallon} Gallon | ${val} Galllon = ${val * gallonToLiter} litre`;
        conValue01.innerHTML =  value;
        // literToGallon
        // gallonToLiter
    
    }

    function renderConversion_three(){
        // 
         let val = inputEl.value;
         let value = ` ${val} Kilo = ${val * kiloToPound} Pound | ${val} Pound = ${val * poundToKilo} Kilo`;
        conValue02.innerHTML =  value;
        // kiloToPound
        // poundToKilo
    }
