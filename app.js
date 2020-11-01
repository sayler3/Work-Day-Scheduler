
$(document).ready(function() {
    const currentTime = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentTime)

    $("span").attr("style", "width: 75px")

    const times = [21, 22, 23]
    // const times = moment().format('H');

    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time)

        const currentHour = moment().hour()

        console.log(currentTime)
        console.log(time)

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