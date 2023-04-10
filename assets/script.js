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
  $('.saveBtn').on('click', function (event) {
    console.log(event.target);
    var parentOfThingClickedOn = $(event.target).parent();
    console.log(parentOfThingClickedOn);
    var textSibling = parentOfThingClickedOn.children('textarea').val();
    console.log(textSibling);
    localStorage.setItem(parentOfThingClickedOn.attr('id'), textSibling);
  });

  //Code to get any user input that was saved in localStorage.
  $('.time-div').each(function () {
    let id = $(this).attr('id');
    $(`#${id} .description`).val(localStorage.getItem(id));
  });
});

// TEST-Set a value in local storage
localStorage.setItem('test', 'hello world');

// Retrieve the value from local storage and log it to the console
console.log(localStorage.getItem('test')); // should output "hello world"
