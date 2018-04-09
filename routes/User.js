var Usuario = require('../models/Usuario');

module.exports = function(app){

	app.post("/login",function(req,res){
        console.log('ENTROOOOO:',req.body)
        
        Usuario.findOne({username:req.body.username},function(err,usuario){
            if(err){
                res.json(err)
            }else if(usuario){
                res.json(usuario)
            }else{
                res.json({"Msj":"No se encontro el usuario"})
            }
        })
    });
    
    app.post("/registro",function(req,res){
        console.log('ENTROOOOO:',req.body)
        
        Usuario.findOne({username:req.body.username},function(err,usuario){
            if(err){
                res.json(err)
            }else if(usuario){
                res.json({"Msj":"El usuario existe", usuario})
            }else{
                Usuario.create({
                    username: req.body.username, password: req.body.password

                }, function(err, usuario){
                    if(err){
                        res.json(err)
                    }else if(usuario){
                        res.json(usuario)
                    } else {
                        res.json({"Msj":"El usuario no se pudo crear"})
                    }
                })
            }
        })
    });

}