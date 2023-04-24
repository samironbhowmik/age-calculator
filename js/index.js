const date = document.getElementById("date").value
const month = document.getElementById("month").value
const year = document.getElementById("year").value
const submit = document.getElementById("submit")

submit.addEventListener("click", function(e){
    e.preventDefault()
    console.log("working");

    if(date>31)
    {
        document.getElementById("result").innerHTML = "Please input valid data for date field"
    }
    if(month>31)
    {
        document.getElementById("result").innerHTML = "Please input valid data for month field"
    }
    const dates = new Date()
    const currentDate = dates.getDate()
    const currentMonth = 1+dates.getDate()
    const currentYear = dates.getFullYear()
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(date>currentDate)
    {
        currentDate = currentDate + months[currentMonth-1]
        currentMonth = currentMonth-1
    }
    if(month>currentMonth)
    {
        currentMonth = currentMonth+12
        currentYear = currentYear-1
    }
    const newDates = currentDate-date
    const newMonths = currentMonth-month
    const newYear = currentYear-year

    document.getElementById("result").innerHTML = `Your age is ${newYear} Years, ${newMonths} Months, ${newDates} Days`
})