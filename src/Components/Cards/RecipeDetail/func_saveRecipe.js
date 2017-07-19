import axios from 'axios';

export default function saveRecipe(a,b,c,d,e,f,g,h,i) {
    axios.post('/api/saveRecipe',{
    "id":a,
	"title":b,
	"extendedIngredients": {"ingredients":c},
	"instructions":d,
	"sourceURL":e,
	"aggregateLikes":f,
	"image":g,
	"servings":h,
	"readyInMinutes":i,
    "clientId":8
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}