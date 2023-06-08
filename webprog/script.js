const formElem=document.querySelector("#szamzar")
const formElem1=document.querySelector("#szamzar1")
const formElem2=document.querySelector("#szamzar2")
const formElem3=document.querySelector("#szamzar3")
const formElem4=document.querySelector("#szamzar4")

const kod=1234

formElem.addEventListener("submit", (e) =>{
    let inputKod= szamElem.value+szamElem2.value+szamElem3.value+szamElem4.value
    if(Number(inputKod)=== kod) {
        console.log("nyitva")
    }
    else{
        console.log("Hibás kód")

    }

    e.preventDefault()
})


