import '../css/app.css';

import React    from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
// import { Formulaire } from './components/App';


// Recherche si la page actuelle contient une balise racine React.
let reactRoot = document.getElementById('react-root');

// Est-ce que la balise a été trouvée ?
if(reactRoot !== null) {

    // Oui, démarrage de React.
    ReactDOM.render(<App />, reactRoot);
}


