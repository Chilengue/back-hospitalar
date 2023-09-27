const Paciente = require('../class/PAcienteClass')

exports.add = async (req, res) => {
    const paciente = new Paciente();
    console.log(req.body);

    paciente.clean(req.body);

    if (paciente.Error.length > 0) return res.json({ Errors: paciente.Error });

    await paciente.save();

    if (paciente.Error.length > 0) return res.status(409).json({ Errors: paciente.Error });

    return res.json({ info: 'Paciente salvo com sucesso!!!' });
};