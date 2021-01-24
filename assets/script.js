// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// add rows for each business hour?
// use header and footer bootstrap cards for calendar days?  https://getbootstrap.com/docs/4.3/components/card/#list-groups
// use modal to enter inital event    https://getbootstrap.com/docs/4.3/components/modal/

// use auditTask() function called timers.
// setInterval() function to force refresh periodically


function createTimeSlot(inputHour){
    const row=document.createElement("div")
    const hour=document.createElement("div")
    const task=document.createElement("div")
    const save=document.createElement("div")
    const button=document.createElement("button")
    const input=document.createElement("input")

    row.classList.add("row")
    row.id="row" + inputHour
    hour.classList.add("col-sm")
    task.classList.add("col-sm")
    save.classList.add("col-sm")
    button.classList.add("btn", "btn-primary")
    button.type="button"
    button.innerText="Save"
    // ternary operator
    input.placeholder=localStorage.getItem("task" + inputHour) === null? "Task": localStorage.getItem("task" + inputHour)
    input.id="taskInput" + inputHour
    input.type="text"
    hour.innerText=inputHour + ":00"

    $(button).on("click", function(){
        localStorage.setItem("task" + inputHour, $("#taskInput" + inputHour).val())
        $("#taskInput" + inputHour).attr("placeholder", $("#taskInput" + inputHour).val())
    })

    row.append(hour)
    row.append(task)
    row.append(save)
    task.append(input)
    save.append(button)

    // compare inputHour with current hour

    if (moment().isAfter(inputHour)) {
        $(row).addClass("list-group-item-primary");
    }
    
    return row
}

// page set to refresh
$(document).ready(function(){
    for (let i=0; i<9; i++){
        $("#content").append (createTimeSlot(i+9))
    }
    setInterval(function(){
        document.getElementById ("currentDay").innerText=moment().format('MMMM Do YYYY');
    }, 0)
})

