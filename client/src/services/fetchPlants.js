import axios from 'axios';

function fetchPlants() {
    return axios
        .get('http://localhost:3333/plants')
        .then(res => {
            return(res)
        })
        .catch(error => console.log('You broke it', error))
}

export default fetchPlants;