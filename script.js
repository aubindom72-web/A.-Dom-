function afficherMessage() {
    alert("Merci de visiter mon site !");
}

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message envoyé avec succès !");
});
function afficherMessage() {
    alert("Bienvenue sur mon site personnel !");
}
function changerCouleur() {
    document.body.style.backgroundColor = "lightblue";
}
// Fonction 1 : message quand on clique
function afficherMessage() {
    alert("Merci d’avoir visité mon site personnel !");
}

// Fonction 2 : changement de couleur du fond
function changerCouleur() {
    // Génère une couleur aléatoire
    const couleur = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = couleur;
}

// Fonction 3 : afficher la date actuelle
function afficherDate() {
    const date = new Date();
    alert("Nous sommes le " + date.toLocaleDateString("fr-FR"));
}

// Fonction 4 : message automatique au chargement
window.onload = function() {
    alert("Bienvenue sur mon site ! ");
};
// Faire clignoter le texte du paragraphe toutes les 2 secondes
setInterval(() => {
    const message = document.getElementById("message");
    message.style.color = (message.style.color === "black") ? "#007bff" : "black";
}, 2000);

// Faire apparaître les sections quand elles entrent dans le champ de vision
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const hauteur = window.innerHeight;
        if (position < hauteur - 100) {
            section.classList.add("visible");
        }
    });
});

// Simulation d'envoi de message dans le formulaire
const form = document.getElementById("form-contact");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le rechargement
        document.getElementById("confirmation").style.display = "block";
        form.reset(); // Vide le formulaire
    });
}