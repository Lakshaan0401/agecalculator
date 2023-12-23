const buttonElement = document.getElementById("age")
const birthDayElement = document.getElementById("birthday")
const resultElement = document.getElementById("result")

function calculateAge(){
    console.log("Calculating Age...")
    const birthDayValue= birthDayElement.value
    console.log(" birthdayValue: ",birthDayValue)
    if(birthDayValue === ""){
        alert("Please Enter Your Birthday")
    }
    else{
        const age = getAge(birthDayValue)
        resultElement.innerText = `Your age is ${age} ${age >1?"Years": "Year}"} old`
    }
}

function getAge(mybirthdayValue){
    const currentDate = new Date()
    const birthdayDate = new Date(mybirthdayValue)
    var age = currentDate.getFullYear()- birthdayDate.getFullYear();
    console.log("Age: ",age)

    var month = currentDate.getMonth()- birthdayDate.getMonth();
    console.log("Month :",month)

    console.log("CD: ",currentDate)
    console.log("BD: ",birthdayDate)

    if(month <0 || month==0 && currentDate.getDate() < birthdayDate.getDate()){
        age--;
    }
    return age
}

buttonElement.addEventListener("click",calculateAge)