

$( document ).ready(function() {

  $('#clock').countdown('2015/8/18 10:30:00')
  .on('update.countdown', function(event) {
    var hour = '%H<span class="unit">h</span>'
    var min = '%M<span class="unit">m</span>'
    var sec = '%S<span class="unit">s</span>'
    var clock_format = ' <span class="clock-style"> ' + hour + ' ' + min + ' ' + sec + ' </span>';

    var day_format = '%-d <span class="bigUnit">day%!d</span>';
    var week_format = '%-w <span class="bigUnit">week%!w</span> ';


    format = clock_format;
    if(event.offset.days > 0) {
      format = day_format + clock_format;
    }
    if(event.offset.weeks > 0) {
      format = week_format + day_format;
    }

    $(this).html(event.strftime(format));
  })
  .on('finish.countdown', function(event) {
    $(this).html('Kiwoo is back together!');


  });
});