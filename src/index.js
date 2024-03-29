// INITIALIZE VARIABLES
let userInputDay=document.getElementById("user-input-day")
let userInputMonth=document.getElementById("user-input-month")
let userInputYear=document.getElementById("user-input-year")
let birthDateArray= []

let errorDay=document.getElementById("error-day")
let errorMonth=document.getElementById("error-month")
let errorYear=document.getElementById("error-year")

// userInput.max=new Date().toISOString().split("/")[0]
let result=document.getElementById("result")
const btn=document.getElementById("btn")
let span1=document.getElementById("span1")
let span2=document.getElementById("span2")
let span3=document.getElementById("span3")
const label1=document.getElementById("label1")
const label2=document.getElementById("label2")
const label3=document.getElementById("label3")

btn.addEventListener("click", () => {
    if (Boolean(userInputDay.value)===false) {
        errorDay.textContent="This field is required"
        label1.style.color="hsl(0, 100%, 67%)"
        userInputDay.style.border="1px solid hsl(0, 100%, 67%)"
    }
    if (Boolean(userInputMonth.value)===false) {
        errorMonth.textContent="This field is required"
        label2.style.color="hsl(0, 100%, 67%)"
        userInputMonth.style.border="1px solid hsl(0, 100%, 67%)"
    }
    if (Boolean(userInputYear.value)===false) {
        errorYear.textContent="This field is required"
        label3.style.color="hsl(0, 100%, 67%)"
        userInputYear.style.border="1px solid hsl(0, 100%, 67%)"
    }

    if (userInputDay.value>31) {
        errorDay.textContent="Must be a valid day"
        userInputDay.value=""
        label1.style.color="hsl(0, 100%, 67%)"
        userInputDay.style.border="1px solid hsl(0, 100%, 67%)"
    }
    if (userInputMonth.value>12) {
        errorMonth.textContent="Must be a valid month"
        userInputMonth.value=""
        label2.style.color="hsl(0, 100%, 67%)"
        userInputMonth.style.border="1px solid hsl(0, 100%, 67%)"
    }
    if (userInputYear.value>new Date().getFullYear()) {
        errorYear.textContent="Must be in the past"
        userInputYear.value=""
        label3.style.color="hsl(0, 100%, 67%)"
        userInputYear.style.border="1px solid hsl(0, 100%, 67%)"
    }
    if ((userInputMonth.value==4) && ((userInputDay.value>28) || (userInputDay.value>29))  ) {
            errorDay.textContent="Must be a valid day"
            userInputDay.value=""
            label1.style.color="hsl(0, 100%, 67%)"
            userInputDay.style.border="1px solid hsl(0, 100%, 67%)"
    }
    if (Boolean(userInputDay.value)===false || Boolean(userInputMonth.value)===false || Boolean(userInputYear.value)===false) {
        btn.removeEventListener()
    }

    birthDateArray= [userInputMonth.value, userInputDay.value, userInputYear.value]
    console.log(birthDateArray)

    // CONVERTING THE ARRAY TO A DATE OBJECT
    let birthDate=new Date(birthDateArray)
    console.log(birthDate)

    // GET THE INDIVIDUAL ELEMENTS OF THE BIRTH DATE OBJECT
    let d1=birthDate.getDate()
    console.log(d1)
    let m1=birthDate.getMonth()+1
    console.log(m1)
    let y1=birthDate.getFullYear()
    console.log(y1)
    
    // GET THE CURRENT DATE
    let currentDate=new Date()
    console.log(currentDate)
    
    // GET THE INDIVIDUAL ELEMENTS OF THE CURRENT DATE OBJECT
    let d2=currentDate.getDate()
    console.log(d2)
    let m2=currentDate.getMonth()+1
    console.log(m2)
    let y2=currentDate.getFullYear()
    console.log(y2)

    // GET THE DIFFERENCE
    let d3, m3, y3
    y3=y2-y1
    if (m2>=m1) {
        m3=m2-m1
    } else{
        y3--
        m3=12+m2-m1
    }
    
    if (d2>=d1) {
        d3=d2-d1
    }else{
        m3--
        // GET THE NUMBER OF DAYS IN THAT MONTH
        d3=getDaysInMonth(y1, m1)+ d2-d1
    }
    if (m3<0) {
        m3=11
        y3--
    }
    // DISPLAY THE RESULT
    span1.textContent=y3
    span2.textContent=m3
    span3.textContent=d3

    result.innerHTML=`
    <p><span>${y3}</span> years</p>
    <p><span>${m3}</span> months</p>
    <p><span>${d3}</span> days</p>
    `
    }
)

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}