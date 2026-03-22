// Liste dynamique avec map() - Asma Ait Elmahjoub
function ListeTaches() {
  const taches = [
    { id: 1, titre: "Apprendre React", statut: " Terminé" },
    { id: 2, titre: "Créer une SPA avec Router", statut: " Terminé" },
    { id: 3, titre: "Maîtriser useState", statut: "Terminé" },
    { id: 4, titre: "Maîtriser useEffect", statut: " En cours" },
    { id: 5, titre: "Faire un projet final", statut: " À faire" },
  ];

  return (
    <div>
      <h3>Mes tâches d'apprentissage</h3>
      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>
            {tache.titre} — {tache.statut}
          </li>
        ))}
      </ul>
      <p>Total : {taches.length} tâches</p>
    </div>
  );
}

export default ListeTaches;