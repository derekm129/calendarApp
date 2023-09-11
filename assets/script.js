// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// variables
const date = new Date();
const currentDay = document.getElementById("currentDay");
const currentHour = dayjs().format('HH');
const dataHour = document.querySelector(".time-block");
currentDay.innerHTML = date;
let userInput = "";

// Arrays
const scheduleTime = [
  'hour-9', 
  'hour-10', 
  'hour-11', 
  'hour-12', 
  'hour-13', 
  'hour-14', 
  'hour-15', 
  'hour-16', 
  'hour-17'
];

// const saveButton = [
//   'saveButton1',
//   'saveButton2',
//   'saveButton3',
//   'saveButton4',
//   'saveButton5',
//   'saveButton6',
//   'saveButton7',
//   'saveButton8',
//   'saveButton9',
// ];

// const userText = [
//   'userText1',
//   'userText2',
//   'userText3',
//   'userText4',
//   'userText5',
//   'userText6',
//   'userText7',
//   'userText8',
//   'userText9',
// ];

// Compare time function
$(function() {
  compareTime()
});

function compareTime() {
  for (let i = 0; i < scheduleTime.length; i++) {
    // Retrieve html element by id
    const element = document.getElementById(scheduleTime[i]);
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
  
  // Event listener
  $(document.body.addEventListener('click', function(event) {
    
    if (event.target.matches('.saveBtn')) {
      // Save schedule text with hour
        
      event.target.getAttribute('id');
      var buttonNumber = event.target.getAttribute('id').substr(-1);
      console.log(buttonNumber.substr(-1))
      // console.log(event.target.getAttribute('id').toString()[-1]);
      // Get parent element
        // const hour = event.parentElement.getAttribute("dataHour");
        // const text = event.parentElement.querySelector("text-area").value;
        // console.log("hour", hour);
        // console.log("text", text);
        saveText(buttonNumber);
        
     } 
    }));
 
  
  
  function saveText(textNumber) {
    // const userEvent = userText.textContent;
    console.log(textNumber);
    const textBlock = document.getElementById("userText" + textNumber)
    console.log(textBlock.value);
    localStorage.setItem("userText" + textNumber, textBlock.value);
    // console.log("saved text", userEvent);
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
  // const retrievedStringifiedArray = localStorage.getItem('myArrayKey');
  // const retrievedArray = JSON.parse(retrievedStringifiedArray);
  
// When page loads get value from local storage and update schedule
