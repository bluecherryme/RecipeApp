
module.exports={
    saveRecipe:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes,clientId} = req.body;
        console.log(clientId);
        dbInstance.save_recipe([id,title,extendedIngredients,instructions,sourceURL,aggregateLikes,image,servings,readyInMinutes,clientId])
        .then((()=>res.status(200).send('Data has successfully been posted to DB')))
        .catch(()=>res.status(500).send());
    }
}