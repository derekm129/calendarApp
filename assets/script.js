
// / variables
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

    if (hourValue == currentHour) {
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

  // Event listener
  $(document.body.addEventListener('click', function(event) {
    
    if (event.target.matches('.saveBtn')) {
      // Save schedule text with hour
        
      event.target.getAttribute('id');
      var buttonNumber = event.target.getAttribute('id').substr(-1);
      console.log(buttonNumber.substr(-1))
        saveText(buttonNumber);
        
     } 
    }));
 
  // Save user input  
  function saveText(textNumber) {
    console.log(textNumber);
    const textBlock = document.getElementById("userText" + textNumber)
    console.log(textBlock.value);
    localStorage.setItem("userText" + textNumber, textBlock.value);
    // console.log("saved text", userEvent);
  }

  // Get saved user input
function savedSchedule() {
  for (let i = 1; i < 10; i++) {
  const retrievedEvent = localStorage.getItem(`userText${i}`);
  document.getElementById(`userText${i}`).value = retrievedEvent;
  };
};



savedSchedule();
