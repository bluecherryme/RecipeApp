
module.exports={
    saveRecipe:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes,clientId} = req.body;
        
        dbInstance.find_recipe([id]).then((recipe)=>{
            if (recipe[0]){
                res.status(200).send('Recipe has already been saved')
            } else {
                dbInstance.save_recipe([id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes,clientId])
                .then(()=>res.status(200).send('Data has successfully been posted to DB'))
                .catch((err)=>res.status(500).send(err));
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
        const {recipeid} = req.query;
        dbInstance.delet_recipe([recipeid])
        .then(()=>res.status(200).send('Recipe has been deleted'))
        .catch((err)=>res.status(500).send(err))
    }
}

