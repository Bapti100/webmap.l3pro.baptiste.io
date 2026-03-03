// Condition qui permet, lorsqu'il n'y a pas de div carte dans le HTML, de ne pas avoir d'erreur dans le JS
document.addEventListener("DOMContentLoaded", function () {
    const mapDiv = document.getElementById("map"
    );

	if (mapDiv) {
		var map = L.map("map").setView([46.019306,7.746185], 13);
	
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);
	
		var marker = L.marker([46.019306,7.746185]).addTo(map)
		}
	});

//  Écouteur de click qui permet, loprsqu'on click sur une image, de l'afficher dans un nouvel onglet
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".grille img");
  
    images.forEach((img) => {
      img.addEventListener("click", function () {
        window.open(img.src, "_blank");
      });
    });
  });