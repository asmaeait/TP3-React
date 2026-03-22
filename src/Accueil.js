// Page d'accueil - Asma Ait El Mahjoub
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function Accueil() {
  return (
    <div>
      <div className="card">
        <h2>Bienvenue sur mon portfolio </h2>
        <p>Étudiante en développement web passionnée par React !</p>
      </div>

      <div className="card">
        <Notifications />
      </div>

      <div className="card">
        <Logo />
      </div>

      <div className="card">
        <LecteurAudio />
      </div>

      <div className="card">
        <ListeTaches />
      </div>
    <div className="card">
    <ListeCourses
        titre=" Mes courses de la semaine"
        elements={["Lait", "Pain", "Café", "Fruits", "Légumes"]}
    />
    </div>
    <div className="card">
        <Galerie />
    </div>

    </div>
  );
}

export default Accueil;