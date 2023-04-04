//Code wrap that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  console.log('Get it done!');

  //Code that displays the current date in the header of the page.
  let nowDate = dayjs().format('dddd MMMM DD, YYYY, hh:MMA');
  let displayDate = document.getElementById('currentDay');
  displayDate.innerHTML = nowDate;
  let currentHour = dayjs().format('HH');

  //Code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  $('.time-div').each(function () {
    let timeDiv = $(this).attr('id').split('-')[1];

    if (currentHour == timeDiv) {
      $(this).addClass('present');
      $(this).children('.description').addClass('present');
    } else if (currentHour < timeDiv) {
      $(this).removeClass('present');
      $(this).addClass('future');
    } else if (currentHour > timeDiv) {
      $(this).removeClass('future');
      $(this).addClass('past');
    }
  });

  //Listener for click events on the save button.
  $('.saveBtn').click(function (event) {
    event.preventDefault();
    let value = $(this).siblings('.time-block').val();
    let time = $(this).parent().attr('id').split('-')[1];
    localStorage.setItem(time, value);
  });

  //Code to get any user input that was saved in localStorage.
  $('#hour-09 .time-block').val(localStorage.getItem('09'));
  $('#hour-10 .time-block').val(localStorage.getItem('10'));
  $('#hour-11 .time-block').val(localStorage.getItem('11'));
  $('#hour-12 .time-block').val(localStorage.getItem('12'));
  $('#hour-13 .time-block').val(localStorage.getItem('13'));
  $('#hour-14 .time-block').val(localStorage.getItem('14'));
  $('#hour-15 .time-block').val(localStorage.getItem('15'));
  $('#hour-16 .time-block').val(localStorage.getItem('16'));
  $('#hour-17 .time-block').val(localStorage.getItem('17'));

  //let now = dayjs();
});
