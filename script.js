const billTotal = document.getElementById('billTotal')
const tipInput = document.getElementById('tipInput')
const people = document.getElementById('people')
const result = document.getElementById('totalResult')

function calculateBill(){
    let bill = Number(billTotal.value)
    let tip = Number(tipInput.value)
    let no_of_people = Number(people.innerText)
    let totalAmount = Math.floor((bill + tip/100 * bill)/no_of_people)
    result.innerText = totalAmount

}

function increase(){

    let no_of_people = Number(people.innerText)
    no_of_people += 1
    people.innerText = no_of_people
    calculateBill()
}

function decrease(){

    let no_of_people = Number(people.innerText)
    no_of_people -= 1
    if(no_of_people >= 1){

        people.innerText = no_of_people
    }
    else{
        people.innerText = 1
    }
    calculateBill()
}