const submit = document.getElementById("submit")

submit.addEventListener("click", function(e){
    e.preventDefault()
    console.log("working");

    const date = document.getElementById("date").value
    const month = document.getElementById("month").value
    const year = document.getElementById("year").value

    if(date>31 || date<1 || month>12 ||month<1)
    {
        document.getElementById("result").innerHTML = "Please input valid data for month field, year field, date field!"
        return
    }

    let currentDate = new Date().getDate()
    let currentMonth = new Date().getMonth()+1
    let currentYear = new Date().getFullYear()
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
    let newMonths = currentMonth-month
    let newYear = currentYear-year

    if(currentMonth<month)
    {
        newMonths +=12
        newYear -=1
    }

    document.getElementById("result").innerHTML = `Your age is ${newYear} Years, ${newMonths} Months, ${newDates} Days`
})