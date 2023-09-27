const mongose = require('mongoose');
try {
    mongose.connect("mongodb://0.0.0.0/GestaoHospital").then(() =>
        console.log("database conect")).catch((error) =>
            console.log("Erro ao conect database"));
}
catch (error) {
    console.log("error ao ligar base de dados");
};


