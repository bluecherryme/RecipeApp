
module.exports={
    saveIngredient:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {clientId, item} = req.body;
        dbInstance.save_recipe([clientId, item])
        .then((()=>res.status(200).send('Data has successfully been posted to DB')))
        .catch(()=>res.status(500).send());
    }
}