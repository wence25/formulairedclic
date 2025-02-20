
document.addEventListener("DOMContentLoaded", function () {
   
    const form = document.getElementById("inscriptionForm");
    const resultSection = document.getElementById("resultat");

    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const nom = document.getElementById("nom").value.trim();
        const prenoms = document.getElementById("prenoms").value.trim();
        const email = document.getElementById("email").value.trim();
        const dateNaissance = document.getElementById("dateNaissance").value;
        const telephone = document.getElementById("telephone").value.trim();
        const motivation = document.getElementById("motivation").value.trim();
        const confidentialite = document.getElementById("confidebtialite").checked;

        
        if (!nom || !prenoms || !email || !dateNaissance || !telephone || !motivation) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        
        if (!confidentialite) {
            alert("Vous devez accepter la politique de confidentialité.");
            return;
        }

        
        document.getElementById("resultNom").textContent = nom;
        document.getElementById("resultPrenom").textContent = prenoms;
        document.getElementById("resultEmail").textContent = email;
        document.getElementById("resultDate").textContent = dateNaissance;
        document.getElementById("resultTelephone").textContent = telephone;
        document.getElementById("resultMotivation").textContent = motivation;

       
        resultSection.style.display = "block";

        
        form.reset();
    });
});