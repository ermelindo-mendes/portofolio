import logo from './linkedin.jpg';
import git from './github.png';
import './App.css';
import Nom from './components/nom';
import Lien from './components/lien';
import Diplomes from './components/diplomes';
import Competences from './components/competences';
import CentreInteret from './components/centreInteret';

function App() {
  return (
    <div className="App">
      <Nom
      nom='Mendes Lopes '
      prenom='Ermelindo '
      poste='Assistant développement & support'
      />
       <Lien
      nom='Linkedin'
      img={logo}
      lien='https://www.linkedin.com/in/ermelindo-mendes-lopes-506a8121b/'
      />
      <h3>Diplomes</h3>
      <Diplomes
      nom='BTS SIO SLAM'
      />

      <Diplomes
      nom='Bac Pro Elec'
      />

      <h3>Competences</h3>

      <Competences
      nom = 'PHP'
      niveau='Debutant'
      />

      <Competences
      nom = 'Node js'
      niveau='Debutant'
      />

      <Competences
      nom = 'HTML/CSS'
      niveau='Debutant'
      />

      <Competences
      nom = 'Symfony'
      niveau='Debutant'
      />

      <Competences
      nom = 'Python'
      niveau='Debutant'
      />

      <h3>Centre d'intérêt</h3>

      <CentreInteret
      nom = 'Mangas'
      />

      <CentreInteret
      nom = 'Jeux videos'
      />

      <CentreInteret
      nom = 'Nouvelles technologies'
      />

      <Lien
      nom='GitHub'
      img={git}
      lien='https://github.com/ermelindo-mendes/'
      />


    </div>
  );
}

export default App;
