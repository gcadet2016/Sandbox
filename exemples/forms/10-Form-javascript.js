// Variables globales
let planningJours = [{ jour: 'Lundi', status: false },
    { jour: 'Mardi', status: false }
];

// Au chargement de la page, utilisez une boucle JavaScript pour parcourir planningJours et peupler le tableau HTML dynamiquement.
(function () {

    // Ici ajouter des functions
    function findDay(d) { return planningJours.find(objet => objet.jour === d); }

    // ---------------------------------------- //
    function windowLoadListener() {
        console.log('document.forms', document.forms);       // Liste des formulaires
        let formulaire = document.getElementById('new-article-form');
        console.log('formulaire.elements', formulaire.elements);
        console.log('formulaire.elements.signature', formulaire.elements.signature);
        
        const signature = document.forms[0].elements.signature;
        signature.style['border-color']='red';


        // Récupération des valeurs de formulaire
        let contenu = document.getElementById('article');
        contenu.value += "\n *Ceci est généré par javascript*";

        formulaire.addEventListener('formdata', (event) => console.log('formdata'));
        formulaire.addEventListener('reset', (event) => console.log('reset'));
        formulaire.addEventListener('submit', function(event) {
            console.log("submit");
            event.preventDefault();
            console.error('Envoi du formulaire désactivé via `event.preventDefault();`');
        });

        let form = document.forms[0];
        console.log({"action":form.action, "method":form.method, "noValidate":form.noValidate, "checkValidity()":form.checkValidity()});
        form.checkValidity();   // false
        form.elements['article'].text = "test";
        form.checkValidity();   // true
        
        form.reset();

        
        // Ajouter les events listener: addEventListener
        // button1.addEventListener('click', function () {
        //     calc();
        // }
        // );
    }
    window.addEventListener('load', windowLoadListener);
    // window.addEventListener('load', function(event) {
    //     let form = document.getElementById('new-article-form');
    //     form.addEventListener('formdata', (event) => console.log('formdata'));
    //     form.addEventListener('reset', (event) => console.log('formdata'));
    //     }
    // );
})();

