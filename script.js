function saveEvent(event) {
    var btnId = $(this).attr('id')
    var input = $(this).parent().siblings('.col-9').children().val()
    localStorage.setItem(btnId, input)
}


$('#currentDay').text(moment().format('dddd, MMMM Do'))

$(".saveBtn").on('click', saveEvent)

$("#text09").val(localStorage.getItem('09'))
$("#text10").val(localStorage.getItem('10'))
$("#text11").val(localStorage.getItem('11'))
$("#text12").val(localStorage.getItem('12'))
$("#text13").val(localStorage.getItem('13'))
$("#text14").val(localStorage.getItem('14'))
$("#text15").val(localStorage.getItem('15'))
$("#text16").val(localStorage.getItem('16'))
$("#text17").val(localStorage.getItem('17'))


function timeTracker(){
    var timeNow = moment().hours();
    console.log(timeNow)

    $(".row").each(function(){
        // var blockTime = parseInt($(this).attr("id").split("#time-block")[1]);
        var blockTime = $(this).attr("data-time");
        console.log(blockTime)

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime == timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
timeTracker();