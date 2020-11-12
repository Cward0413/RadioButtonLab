$(document).ready(
    function () {

        //add event handlers
        $("#checkSchedule").click(showSchedule);

        //all other functions (program logic)

        var day = 0;

        function showSchedule(){
            event.preventDefault();

            var day = document.querySelector('input[name="weekDay"]:checked').value;

            switch (day){
                case "Monday":
                    $("#scheduleOutput").text("You have work from 8:00-5:00 and class from 6:00-9:45");
                    break;
                case "Tuesday":
                    $("#scheduleOutput").text("You have work from 8:00-5:00 and class from 6:00-9:45");
                    break;
                case "Wednesday":
                    $("#scheduleOutput").text("You have work from 8:00-5:00 and class from 6:00-9:45");
                    break;
                case "Thursday":
                    $("#scheduleOutput").text("You have work from 8:00-5:00");
                    break;
                case "Friday":
                    $("#scheduleOutput").text("You have work from 8:00-5:00");
                    break;
                case "Saturday":
                    $("#scheduleOutput").text("Its the weekend. No commitments!");
                    break;
                case "Sunday":
                    $("#scheduleOutput").text("Its the weekend. No commitments!");
                    break;
            }
        }
    }
)