// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const date = new Date();
const currentDay = document.getElementById("currentDay");
const currentHour = dayjs().format('HH');
const ids = [
  'hour-9', 
  'hour-10', 
  'hour-11', 
  'hour-12', 
  'hour-13', 
  'hour-14', 
  'hour-15', 
  'hour-16', 
  'hour-17'];

currentDay.innerHTML = date;

// Compare time function
$(function() {
  compareTime()
});

function compareTime() {
  for (let i = 0; i < ids.length; i++) {
    // Retrieve html element by id
    const element = document.getElementById(ids[i]);
    // Hour value from element id
    const hourValue = parseInt(element.id.split('-')[1]);

    if (hourValue === currentHour) {
      element.classList.add('present');
    }
    else if (hourValue < currentHour) {
      element.classList.add('past');
    }
    else if (hourValue > currentHour) {
      element.classList.add('future');
    }
  }
  };

// $(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 

compareTime();