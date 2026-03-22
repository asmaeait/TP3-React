// Composant connexion avec rendu conditionnel - Asma Ait Elmahjoub
import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);
  const [tentatives, setTentatives] = useState(0);

  function toggleConnexion() {
    setConnecte(!connecte);
    setTentatives(tentatives + 1);
  }

  return (
    <div>
      {connecte ? (
        <div>
          <h3> Connectée en tant que Asma</h3>
          <p>Bienvenue ! Vous êtes connectée avec succès.</p>
        </div>
      ) : (
        <div>
          <h3>Non connectée</h3>
          <p>Veuillez vous connecter pour accéder au contenu.</p>
        </div>
      )}
      {tentatives > 0 && (
        <p>Changements d'état : {tentatives}</p>
      )}
      <button onClick={toggleConnexion}>
        {connecte ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

export default Connexion;