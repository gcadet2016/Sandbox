let planningJours = [{jour:'Lundi', status:false},
                    {jour:'Mardi', status:false},
                    {jour:'Mercredi', status:false},
                    {jour:'Jeudi', status:false},
                    {jour:'Vendredi', status:false},
                    {jour:'Samedi', status:false},
                    {jour:'Dimanche', status:false}
];




// Au chargement de la page, utilisez une boucle JavaScript pour parcourir planningJours et peupler le tableau HTML dynamiquement.
(function () {

    // Fonction pour retrouver un objet dans le tableau planning en utilisant la valeur de jour 
    function findDay(d) { return planningJours.find(objet => objet.jour === d); }

    // Comptez et montrez le nombre de créneaux libres et occupés via une alerte.
    function calc() {
        let totalAvailable = 7;
        for(dayObj of planningJours) {
            if(dayObj.status) {
                totalAvailable -= 1;
            } 
        }
        alert(`jours disponibles: ${totalAvailable} - jours indisponibles: ${7-totalAvailable}`)
    }

    function updateTableCell(cell, status) {
        cell.textContent = status;
        if(status) {
            cell.className = 'redBackground';
        } else {
            cell.className = 'greenBackground';
        }
    }
    function updateTable() {
        let lignes = document.querySelectorAll("#planning tbody tr");
        lignes.forEach(function(ligne) {
            let cellulePremiereColonne = ligne.cells[0];
            let celluleDeuxiemeColonne = ligne.cells[1];
            
            let x = findDay(cellulePremiereColonne.innerHTML);
            updateTableCell(celluleDeuxiemeColonne, x.status)
        })
    }

    function randReservation() {
        // Réinitialisez tous les statuts à false pour garantir que la réservation part d’un état vierge.
        // C'est trop facile, j'opte volontairement pour que le choix aléatoire soit fait dans le reste des jours libres

        // Liste des jours libres
        let planningJoursLibres = [];
        for(d of planningJours) {
            if(!d.status) {
                planningJoursLibres.push(planningJours.indexOf(d));
            }
        }

        if(planningJoursLibres.length > 0) {
            let nbJours = prompt(`Combien de réservations (0 à ${planningJoursLibres.length})?`);
            if ((nbJours >= 0) && (nbJours <= planningJoursLibres.length)) {
                for(i=0; i < nbJours; i++) {
                    // Choix alléatoire dans la liste des jours libres
                    let x = Math.floor(Math.random() * planningJoursLibres.length);    
                    planningJours[planningJoursLibres[x]].status = true;            // Mise à jour de planningJours
                    planningJoursLibres.splice(x, 1);                               // Mise à jour de planningJoursLibres
                } 
                updateTable();                                                      // Mise à jour affichage
            } else {
                alert(`Le nombre de jours saisi n'est pas compris entre 0 et ${planningJoursLibres.length}`);
            }
        } else {
            alert('Plus de jour libre pour une réservation aléatoire!');
        }

    }
    // ---------------------------------------- //
    function windowLoadListener() {
        // Remplir le tableau planning
        let tableau = document.getElementById("planning").getElementsByTagName("tbody")[0];

        for (day of planningJours) {
            let nouvelleLigne = tableau.insertRow();
            let celluleNom = nouvelleLigne.insertCell(0);
            let celluleStatus = nouvelleLigne.insertCell(1);

            celluleNom.textContent = day.jour;
            celluleStatus.textContent = day.status;
            celluleStatus.className = 'greenBackground';
        }

        // Sélectionnez toutes les lignes du tableau
        let lignes = document.querySelectorAll("#planning tbody tr");

        // Ajoutez un event listener pour chaque cellule de la 2ème colonne
        lignes.forEach(function(ligne) {
            let cellulePremiereColonne = ligne.cells[0];
            let celluleDeuxiemeColonne = ligne.cells[1];

            celluleDeuxiemeColonne.addEventListener("click", function() {
                let x = findDay(cellulePremiereColonne.innerHTML);
                x.status = !x.status;
                //console.log(x);
                updateTableCell(celluleDeuxiemeColonne, x.status);
            });
        });

        // Bouton "Calculer" eventListener
        const button1 = document.getElementById('btnCalc');
        button1.addEventListener('click', function () {
                calc();
            }
        );

        // Bouton "Réinitialiser" eventListener
        const button2 = document.getElementById('btnInit');
        button2.addEventListener('click', function () {
                for(dayObj of planningJours) {
                    dayObj.status = false;
                }
                updateTable();
            }
        );
        // Bouton "Réservation alléatoire" eventListener
        const button3 = document.getElementById('btnRndBooking');
        button3.addEventListener('click', function () {
                randReservation();
            }
        );
    }
    window.addEventListener('load', windowLoadListener);
})();

