// dit is een js code die ik in mijn opdracht van inleiding programmeren heb gebruikt


var htmlform = document.querySelector('form');
var htmlinput = document.querySelector('input[name="yourname"]');
var getName;
var textchange = document.querySelector('h3');

function formChanger(event) {
    getName = htmlinput.value;
    event.preventDefault();
    textchange.innerHTML = "Thanks for your message, " + getName + "!";
  }

  htmlform.addEventListener('submit', formChanger);



  var day = new Date();
  var x = day.getDay();
  var dateToday = document.querySelector('.todaysdate');
  
  switch (x) {
    case 1:
      dateToday.innerHTML = "Het is vandaag maandag";
      break;
    case 2:
      dateToday.innerHTML = "Het is vandaag dinsdag";
      break;
    case 3:
      dateToday.innerHTML = "Het is vandaag woensdag";
      break;
    case 4:
      dateToday.innerHTML = "Het is vandaag donderdag";
      break;
    case 5:
      dateToday.innerHTML = "Het is vandaag vrijdag";
      break;
    case 6:
      dateToday.innerHTML = "Het is vandaag zaterdag";
      break;
    case 0:
      dateToday.innerHTML = "Het is vandaag zondag";
      break;
    default:
      dateToday.innerHTML = "Ik weet niet zo goed welke dag het is oeps";
  }

