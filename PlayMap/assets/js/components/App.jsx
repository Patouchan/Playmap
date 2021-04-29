import React from 'react';


export class App extends React.Component {

    databaseValues = [];

    state = {
        search        : '',         // saisie de la recherche
        searchResults : []          // résultats trouvés pour la recherche en cours
    };


    componentDidMount() {

        // Déclenche une requête HTTP (AJAX) pour récupérer les données de la base SQL
        window.fetch('/database').then((response) => {

            // Récupération de la réponse HTTP, désérialisation du JSON
            return response.json(); // équivalent à JSON.parse()

        }).then((databaseValues) => {

            console.log(databaseValues);

            // Stockage des données.
            this.databaseValues = databaseValues;
            
        });
    }

    onChangeInput = (event) => {

        // La variable search va contenir la nouvelle chaîne à rechercher
        let search = event.target.value.trim();
        console.log(search);
        let searchResults = [];

        // Enregistrement de la saisie de l'utilisateur
        this.setState({ search: event.target.value });

        // Y a t'il une saisie valable ?
        if(search.length == 0) {
            // Non, efface les résultats de la recherche
            this.setState({ searchResults: [] });

            // On quitte immédiatement
            return;
        }

        for(const value of this.databaseValues) {

            /*
             * Vérifier si la valeur en base de données (value) contient la saisie 
             * de l'utilisateur (search)
             */
            if(value.name.includes(search) == true) {
                searchResults.push(value.name);
            }
        }

        // searchResults = searchResults.map((searchResult) => <p>{ searchResult }</p>);
        searchResults = searchResults.map((searchResult, index) => {

            return <p key={ index }>{ searchResult }</p>
        });

        this.setState({ searchResults: searchResults });
    }

    onSubmit = (event) => {

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={ this.onSubmit }>
                <input onChange={ this.onChangeInput } value={ this.state.search } />
                { this.state.searchResults.length > 0 &&
                    <article className="search-results my-3">{ this.state.searchResults }</article>
                }
            </form>
        );
    }
}