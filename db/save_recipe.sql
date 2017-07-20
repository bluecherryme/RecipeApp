insert into recipes(id,title,extendedIngredients,instructions,sourceURL,aggregatelikes,image,servings,readyInMinutes) 
values ($1,$2,$3,$4,$5,$6,$7,$8,$9);

insert into savedrecipes(clientid,recipeid) values ($10,$1);