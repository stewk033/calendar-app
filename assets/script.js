
// function to generate time slots
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

    // change color of row depending on time of day
    if (moment().isAfter(inputHour)){
        $(row).addClass("list-group-item-primary");
    }
    
    return row
}

// page set to refresh
$(document).ready(function(){
    for (let i=0; i<9; i++){
        $("#content").append (createTimeSlot(i+9))
    }
    // display current date
    setInterval(function(){
        document.getElementById ("currentDay").innerText=moment().format('MMMM Do YYYY');
    }, 0)
})

