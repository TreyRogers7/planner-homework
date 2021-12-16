function saveEvent(event) {
    var btnId = $(this).attr('id')
    var input = $(this).parent().siblings('.col-8').children().val()
    localStorage.setItem(btnId, input)
}


$('#currentDay').text(moment().format('dddd, MMMM Do'))

$(".save").on('click', saveEvent)

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

    $(".row").each(function(){
        var blockTime = parseInt($(this).attr(".row").split("-")[1]);

        if (blockTime < timeNow) {
            $(this).addClass("past");
        } else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
