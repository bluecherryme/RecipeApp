
module.exports={
    saveRecipe:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes,clientId} = req.body;
        
        dbInstance.find_recipe_client_ref([clientId,id]).then((reference)=>{
            if (reference[0]){
                res.status(200).send('Recipe has already been saved')
            }else{
                dbInstance.find_recipe([id]).then((recipe)=>{
                    if (recipe[0]){
                        dbInstance.save_recipe_reference([clientId,id])
                        .then(()=>res.status(200).send('Data has successfully been posted to DB'))
                        .catch((err)=>res.status(500).send(err));
                    } else {
                        dbInstance.save_recipe([id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes,clientId])
                        .then(()=>res.status(200).send('Data has successfully been posted to DB'))
                        .catch((err)=>res.status(500).send(err));
                    }
                })    
            }
        })
    },

    getSavedRecipes:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {userid} = req.query;
        
        dbInstance.get_saved_recipes([userid])
        .then((recipes)=>res.status(200).send(recipes))
        .catch((err)=>res.status(500).send(err));
    },

    deleteRecipe:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {clientid, recipeid} = req.query;
        console.log(clientid,recipeid);
        dbInstance.delete_recipe([clientid,recipeid])
        .then(()=>res.status(200).send('Recipe has been deleted'))
        .catch((err)=>res.status(500).send(err))
    }
}

