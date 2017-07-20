import axios from 'axios';

export default function saveIngredient(item) {
    axios.post('http://localhost:8080/api/saveIngredient',{
    "clientId":1,
	"item":item,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}