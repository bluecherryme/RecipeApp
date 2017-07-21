import axios from 'axios';

export default function saveIngredient(item,clientid) {
    axios.post('/api/saveIngredient',{
    "clientId":clientid,
	"item":item,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}