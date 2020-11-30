
$(document).ready(function() {
    const currentDate = moment().format('MMMM Do YYYY');
    const currentTime = parseInt(moment().format('H'));
    $("#currentDay").text(currentDate)

    $("span").attr("style", "width: 75px")

    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time)

        const currentHour = moment().hour()

        if (currentHour > time) {
            $(`#${time}`).addClass("bg-danger text-white")
            $(`#${time}`).attr("disabled", true)
        } else if(currentHour === time) {
            $(`#${time}`).addClass("bg-secondary text-white")
        } else {
            $(`#${time}`).addClass("bg-success text-white")
        }

        if(timeCheck === null){
            window.localStorage.setItem(time, "")
        } else if(timeCheck.length > 0){
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        }
    })

    $("form").on("submit", function(e){
        e.preventDefault()
        const time = e.target.querySelector("input").getAttribute("id")
        const text = e.target.querySelector("input").value

        window.localStorage.setItem(time, text)
    })
})