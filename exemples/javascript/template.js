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
        // Configuration, initialisation etc...
        function calc() {...}
        
        // Ajouter les event listener: addEventListener
        const button1 = document.getElementById('btnCalc');
        button1.addEventListener('click', function () {
            calc();
        }
        );
    }
    window.addEventListener('load', windowLoadListener);
})();

