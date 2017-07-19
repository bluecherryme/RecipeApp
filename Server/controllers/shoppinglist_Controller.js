
module.exports={
    saveIngredient:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {clientId, item} = req.body;
        dbInstance.add_shoppinglist_item([clientId, item])
        .then((()=>res.status(200).send('Data has successfully been posted to DB')))
        .catch(()=>res.status(500).send());
    }
}