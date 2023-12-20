document.addEventListener("DOMContentLoaded", function () {
    // Variable Declarations
    var timeElement = document.getElementById("time");
    var dateTimeElement = document.getElementById("date-time");

    // Updating Clock Function
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var day = now.getDay();
        var date = now.getDate();
        var month = now.getMonth();
        var year = now.getFullYear();

        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Formating time
        hours = hours % 12 || 12; // Convert to 12-hour format
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Determining AM/PM
        var period = hours < 12 ? "AM" : "PM";

        // Updating time element
        var timeString = hours + ":" + minutes + ":" + seconds + " " + period;
        timeElement.innerHTML = timeString;

        // Updating date-time element
        var dateString = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year;
        dateTimeElement.innerHTML = dateString;
    }

    // Initialing update and interval (update every 1000 milliseconds or 1 second)
    updateClock();
    setInterval(updateClock, 1000);
});