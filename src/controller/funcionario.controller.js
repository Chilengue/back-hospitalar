const Paciente = require('../class/PAcienteClass');
const Funcinario = require('../class/funcionario.cass');

exports.add = async (req, res) => {
    const funcinario = new Funcinario();
    console.log(req.body);

    funcinario.clean(req.body);

    if (Paciente.Error.lenght > 0) return res.json({ Errors: funcinario.Error });
    await funcinario.save();

    if (funcinario.Error.length > 0) return res.status(409).json({ Errors: funcinario.Error });
    res.json({ info: 'funcionario salvo com sucesso' })
}