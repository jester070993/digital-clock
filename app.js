let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let sec = d.getSeconds();
// if hours is greater or equal to 12, "end" variable is  equal to pm, if less than 12 "end" is AM
//if hours is greater than 12, do hours minus 12 to get time in PM, else keep hours as is
const hour = document.querySelector(".hours");
const min = document.querySelector(".min");
const seconds = document.querySelector(".sec");
const dayNight = document.querySelector(".dayNight");
let amPM = `<h1 class="padding"> am </h1>`;
	// hour.innerHTML  = hours;
	// min.innerHTML = minutes;
	// seconds.innerHTML = sec;
	// dayNight.innerHTML = amPM;


function setHours(){

	if(hours > 12){
	hours = hours - 12
	amPM = `<h1 class="padding"> pm </h1>`
	}
	else if (hours == 00){
		hours = 12 ;
	}
	else {
		hours = hours;
	}
	hours = `<h1> ${hours}</h1>`;
	hour.innerHTML  = hours;
	}

function setMinutes(){
	minutes = minutes.toString();
	if(minutes.length == 1){
		minutes = `<h1>:0${minutes} </h1> ` ;
	}
	else{
		minutes = `<h1>:${minutes} </h1> `;
	}
	min.innerHTML = minutes;
}

function setSec(){
	sec =   `<h1>:${sec} </h1> `
	seconds.innerHTML = sec;

}

function dayOrNight() {
	dayNight.innerHTML = amPM;
}

setSec();
setHours();
setMinutes();
dayOrNight();

// if hours is 00 then hours is equal to 12

// if hours is less than or 1

