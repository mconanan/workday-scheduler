

$(document).ready(function () {

    //displays current date & time in jumbotron//
    $('#current-day').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //function to store input from each text area//
    function storeInput(e) {
        e.preventDefault();
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')

        console.log(time, value);

        localStorage.setItem(time, value);
    }

    //click event to call storeInput function
    $('.saveBtn').on('click', storeInput)

    //retrieves items from local storage and allows the input to persist after page reload
    $("#time-9 .description").val(localStorage.getItem("time-9"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-13 .description").val(localStorage.getItem("time-13"));
    $("#time-14 .description").val(localStorage.getItem("time-14"));
    $("#time-15 .description").val(localStorage.getItem("time-15"));
    $("#time-16 .description").val(localStorage.getItem("time-16"));
    $("#time-17 .description").val(localStorage.getItem("time-17"));

   

    //function to change colors of time slots based on current time
    function hourCheck() {
        var currentHour = moment().hours()
        console.log(currentHour)
        $('.time-block').each(function () {
            var timeSlot = parseInt($(this).attr('id').split('-')[1])
            if (currentHour < timeSlot) {
                $(this).addClass('past');
            }
            else if (currentHour === timeSlot) {
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        })
    }
    hourCheck()
}
)


