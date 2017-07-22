
module.exports={
    saveIngredient:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {clientId, item} = req.body;

        dbInstance.add_shoppinglist_item([clientId, item])
        .then(()=>res.status(200).send('Data has successfully been posted to DB'))
        .catch((err)=>res.status(500).send(err));
    },

    getShoppingList:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {userid} = req.query;

        dbInstance.get_shoppinglist([userid])
        .then((list)=>res.status(200).send(list))
        .catch((err)=>res.status(500).send(err));
    }

}