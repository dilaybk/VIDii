// JavaScript Document
console.log("Howdy!");

//Pagina omslaan event listener
var sections = document.querySelectorAll("li > section");

sections.forEach(section => {
	section.addEventListener("click", omslaan);
});

function omslaan(event) {
	var dePagina = event.target;
	
	var deLi = dePagina.closest("li");
	

	deLi.classList.toggle("omgeslagen");
}

