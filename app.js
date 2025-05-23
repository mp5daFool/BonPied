// Fetch permettant à chaques chaussures de s'afficher dans la section nos Produits
fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        data.produits.forEach(produit => {
            document.getElementById('nosProduits').innerHTML += `
            <div class="carte">
					<img class="carteImg" alt="" src="${produit.imageurl}">

					<p class="grisFonce">${produit.nom}</p>
					<div class="carteDiv">

						<p>${produit.description}</p>
					</div>

					<a href="#nul" class="grandBtnAcheter" id="btnAcheter">
						<div class="btnAcheter">
							<p>Acheter</p>
						</div>
					</a>
				</div>

            `;
        });
    })

// Fetch pour afficher les Services proposés par le site

fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        data.services.forEach(service => {
            document.getElementById('nosServices').innerHTML += `
            <div class="carteServices">

					<div class="divDroite flex align-start column">
						<h4 class="grisFonce">${service.nom}</h4>
						<p class="gris">${service.description}</p>
						<a href="#nul" class="miniBtnDiv">
							<div class="btnServices">
								<div class="noir">
									<p>En savoir Plus</p>
								</div>
							</div>
						</a>
					</div>
				</div>

            `;
        });
    })

// Fetch permettant d'afficher chaques avis utilisateurs "Témoignages" 

fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        data.temoignages.forEach(temoignage => {
            document.getElementById('nosTemoignanes').innerHTML += `
            <div class="carteUtilisateur column">
					<p class="nomUtilisateur">${temoignage.prenom}</p>
					<div class="div2">
						<div class="typeExperience">${temoignage.typeExperience}</div>
					</div>
					<p class="commentaire">${temoignage.commentaire}</p>
					<p class="grisFonce">Note : ${temoignage.note} / 5 </p>
				</div>

            `;
        });
    })

// Fonctionnalités Autres

// Panier 

let btnAcheter = document.querySelectorAll("#btnAcheter")
let panier = document.getElementById("btnPanier");


btnAcheter.forEach(btn =>{
    btn.addEventListener("click",()=>{
    console.log("test")
    })
})


btnAcheter.addEventListener("click", (e) => {
    
})


function articleAjoute() {

    panier.classList.add("actif");

    setTimeout(() => {
        bouton.classList.remove("actif");
    }, 3000);

}