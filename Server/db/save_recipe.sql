insert into Recipes(RecipeID,Name,Image,Ingredients,Instructions,linktoinstructions,
preptime,nutritionid)
values($1,$2,$3,$4,$5,$6,$7,$8);

insert into savedrecipes(clientid,recipeid)
values ($1,$2);