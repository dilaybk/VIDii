// JavaScript Document
console.log("Howdy!");






//Pagina omslaan event listener
var sections = document.querySelectorAll("li > section");

sections.forEach(section => {
	section.addEventListener("click", omslaan);
});

function omslaan(event) {

	//Zodat de pagina's niet blijven omslaan wanneer je in een dialog bent
	if (hunnyDialog.open) {
		return;
	}	

	var dePagina = event.target;
	
	var deLi = dePagina.closest("li");
	

	deLi.classList.toggle("omgeslagen");
}




//////////////////////
// OPEN/CLOSE DIALOG 1: HUNNY
//////////////////////

const hunnyBtn = document.querySelector("button:nth-of-type(1)");
const hunnyDialog = document.querySelector("dialog:nth-of-type(1)");

hunnyBtn.addEventListener("click", openDialog);

function openDialog() {
	hunnyDialog.showModal();
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
	dialog.addEventListener('click', lightDismiss);
});




//////////////////////
// VERANDEREN AFB WANNEER SWITCH DARKMODE
//////////////////////


// const images = document.querySelectorAll('img');

// //MatchMedia is om te checken welke mode (light/dark) je gebruikt
// // && wordt gebruikt om een waarde te geven en te kijken of de browser 'match media' support
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

//   // als je in dark mode bent, verander de img src
//   images.forEach((img) => {
//     img.src = img.getAttribute('data-dark-src');
//   });

// }
