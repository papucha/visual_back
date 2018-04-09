var fs = require('fs'); 
module.exports = function(app){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js" ||  file == ".DS_Store") return;
        var name = file.substr(0, file.indexOf('.'));
        //console.log(name);
        require('./' + name)(app);
    });
}