const Medico = require('../class/medigoClass');

exports.add = async (req, res) => {
    const Medicos = new Medigo();
    console.log(req.body);
    Medicos.clean(req.body)

    if(Medicos.Error.lenght > 0) return res.json({Errors: Medicos.Error});
    await Medicos.save();
    if(Medicos.Error.lenght > 0) return res.status(409).json({Errors: Medicos.Error});
    return res.json({info: 'Medigo salvo  com  sucesso!!!'})
}
    