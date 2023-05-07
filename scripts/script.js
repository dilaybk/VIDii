// JavaScript Document
console.log("Howdy!");


// //Pagina omslaan event listener
// var sections = document.querySelectorAll("li > section");


// sections.forEach(section => {
//   section.addEventListener("click", omslaan);
// });

// function omslaan(event) {
//   //Zodat de pagina's niet blijven omslaan wanneer je in een dialog bent
//   if (hunnyDialog.open) {
//     return;
//   }	
//   var dePagina = event.target;
//   var deLi = dePagina.closest("li");
//   deLi.classList.toggle("omgeslagen");
// }



// //Pagina omslaan event listener
var sections = document.querySelectorAll("li > section");
// document.addEventListener("keydown", e => {
// 	console.log(e);
// });

sections.forEach(section => {
    section.addEventListener("click", omslaan);
});


function omslaan(event) {

	// The length property returns the length of a string (W3Schools) - dus hij is hier aan het tellen hoeveel open dialogs er zijn
	// > 0 betekent groter dan 0 dus als het aantal groter dan 0 is, don't flip the pages
	if (document.querySelectorAll("dialog[open]").length > 0) {
		return;
	}

  // dePagina is waar 'the event' will take place
  // deLi is een variabele waarbij het kijkt naar de dichtsbijzijnde list item binnen dePagina
	var dePagina = event.target;

	var deLi = dePagina.closest("li");

	deLi.classList.toggle("omgeslagen");
};



// document.addEventListener("keydown", omslaanKey);

// function omslaanKey (event) {
// 	var key = event.key;
// 	if (key == "ArrowLeft") {

// 		var dePagina = event.target;
// 		var deLi = dePagina.querySelector("li");

// 		deLi.classList.toggle("omgeslagen");


// 	} else if (key == "ArrowRight") {
		
// 		var dePagina = event.target;
// 		var deLi = dePagina.querySelector("li");

// 		deLi.classList.toggle("omgeslagen");
// 	}
// };






/////////////////////////////
// OPEN/CLOSE DIALOG 1: HUNNY
/////////////////////////////

const hunnyBtn = document.querySelector("button:nth-of-type(1)");
const hunnyDialog = document.querySelector("dialog:nth-of-type(1)");

hunnyBtn.addEventListener("click", openDialog);

function openDialog() {
	hunnyDialog.showModal();
}



////////////////////////////
// OPEN/CLOSE DIALOG 1: MAP
///////////////////////////
const mapImg = document.querySelector(".mapPic");
const mapDialog = document.querySelector(".mapDialog"); //Ik heb hier classes gebruikt omdat de eventlistener anders niet werkte (null error)

mapImg.addEventListener("click", openMapDialog);

function openMapDialog() {
	mapDialog.showModal();
}


//////////////////////////////////////////////
// close all dialogs if clicked on the overlay
//////////////////////////////////////////////

const dialogs = document.querySelectorAll("dialog");

function lightDismiss (event) {
	const clickedElement = event.target;
	// not true if clicked on form in dialog
	if (clickedElement.nodeName == 'DIALOG') {
		clickedElement.close();
	}
}

dialogs.forEach(dialog => {
	dialog.addEventListener("click", lightDismiss);
});





/////////////////
// AUDIO IN BG //
/////////////////

//user has to interact before playing audio
document.addEventListener("click", function() {

	var bgAudio = document.querySelector("body > audio");

	bgAudio.play();

}, { once: true }); //zodat het 1x afspeelt en niet elke keer wanneer de user de pagina gebruikt



/////////////////
// AUDIO HOVER ON FRIENDS //
/////////////////

//PIGLET

const hoverPiglet = document.querySelector("li:nth-of-type(3) > section:nth-of-type(2) > picture");
const audioPiglet = hoverPiglet.querySelector("li:nth-of-type(3) > section:nth-of-type(2) > picture > audio");

hoverPiglet.addEventListener("mouseenter", () => {
  audioPiglet.currentTime = 0; // reset audio to start
  audioPiglet.play(); // play audio
});

hoverPiglet.addEventListener("mouseleave", () => {
  audioPiglet.pause(); // pause audio
});



//EEYORE

const hoverEeyore = document.querySelector("li:nth-of-type(3) > section:nth-of-type(2) > picture:nth-of-type(2)");
const audioEeyore = hoverEeyore.querySelector("li:nth-of-type(3) > section:nth-of-type(2) > picture:nth-of-type(2) > audio");

hoverEeyore.addEventListener("mouseenter", () => {
  audioEeyore.currentTime = 0; // reset audio to start
  audioEeyore.play(); // play audio
});

hoverEeyore.addEventListener("mouseleave", () => {
  audioEeyore.pause(); // pause audio
});



//TIGGER
const hoverTigger = document.querySelector("li:nth-of-type(4) > section:nth-of-type(1) > picture:nth-of-type(1)");
const audioTigger = hoverTigger.querySelector("li:nth-of-type(4) > section:nth-of-type(1) > picture:nth-of-type(1) > audio");

hoverTigger.addEventListener("mouseenter", () => {
  audioTigger.currentTime = 0; // reset audio to start
  audioTigger.play(); // play audio
});

hoverTigger.addEventListener("mouseleave", () => {
  audioTigger.pause(); // pause audio
});


//RABBIT

const hoverRabbit = document.querySelector("li:nth-of-type(4) > section:nth-of-type(1) > picture:nth-of-type(1)");
const audioRabbit = hoverRabbit.querySelector("li:nth-of-type(4) > section:nth-of-type(1) > picture:nth-of-type(2) > audio");

hoverRabbit.addEventListener("mouseenter", () => {
  audioRabbit.currentTime = 0; // reset audio to start
  audioRabbit.play(); // play audio
});

hoverRabbit.addEventListener("mouseleave", () => {
  audioRabbit.pause(); // pause audio
});


// //Pagina omslaan event listener
// var sections = document.querySelectorAll("li > section");

// sections.forEach(section => {
// 	section.addEventListener("click", omslaan);
	
// });

// function omslaan(event) {

// 	//Zodat de pagina's niet blijven omslaan wanneer je in een dialog bent
// 	if (hunnyDialog.open) {
// 		return;
// 	}	

// 	var dePagina = event.target;
	
// 	var deLi = dePagina.closest("li");
	

// 	deLi.classList.toggle("omgeslagen");
// }