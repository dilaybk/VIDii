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

	// Zodat de pagina's niet blijven omslaan wanneer je in een dialog bent
	if (hunnyDialog.open) {
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
const mapDialog = document.querySelector(".mapDialog");

mapImg.addEventListener("click", openMapDialog);

function openMapDialog() {
	// Zodat de pagina's niet blijven omslaan wanneer je in een dialog bent
	if (mapDialog.open) {
		return;
	}	

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
	dialog.addEventListener('click', lightDismiss);
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