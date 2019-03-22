var knoptekst = document.querySelector("#tekst");
var knopke = document.querySelector("button");
var doge = document.querySelector("button img");
var bigDoge = document.querySelector("#bigDoge");

function myFunction() {
	knoptekst.innerHTML = "WOOF";
};

knopke.addEventListener("mouseover", function(){
	doge.classList.remove("hidden");
	knoptekst.classList.add("hidden");
});

knopke.addEventListener("mouseout", function(){
	doge.classList.add("hidden");
	knoptekst.classList.remove("hidden");
});

knopke.addEventListener("click", function(){
	bigDoge.classList.toggle("hidden");
});