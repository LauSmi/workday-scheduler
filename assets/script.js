$(document).ready(function () {
  console.log('Get it done!');

  //Code that displays the current date in the header of the page.
  let nowDate = dayjs().format('dddd MMMM DD, YYYY, h:mm A');
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

  // Change time block color based on current time
  function updateTimeBlockColor() {
    var currentHour = moment().hours();
    $('.time-div').each(function () {
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  // Listener for click events on the save button.
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');
    localStorage.setItem(key, value);
  });

  // Get stored data from localStorage
  $('.description').each(function () {
    var id = $(this).parent().attr('id');
    $(this).val(localStorage.getItem(id));
  });

  // Initialize time block color
  updateTimeBlockColor();
});
