select id, title, extendedingredients,instructions,sourceurl,aggregatelikes,image,servings,readyinminutes
from recipes
join savedrecipes 
on recipes.id = savedrecipes.recipeid
where clientid = $1
;