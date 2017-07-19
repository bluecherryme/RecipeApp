module.exports={
    addClient:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {firstname,lastname,name,emailaddress,shoppinglistid} = req.body;

        dbInstance.add_client([firstname,lastname,name,emailaddress,shoppinglistid])
        .then((()=>res.status(200).send('Data has successfully been posted to DB')))
        .catch(()=>res.status(500).send());
    }
}