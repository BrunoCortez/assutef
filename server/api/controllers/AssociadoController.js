/**
 * AssociadoController
 *
 * @description :: Server-side logic for managing associadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const randomstring = require("randomstring"),
	jwt = require("jsonwebtoken");
module.exports = {
	create: function (req, res) {
		let self = this;
		Associado.create(req.body).exec(function (err, associado) {
			if (err) {
				return res.json(err.status, { err: err });
			}
			let token = jwToken.issue({ id: associado.id });
			if (associado) {
				self.makeActivation(associado, token);
				res.json(200, associado);
			}
		});
	},

	makeActivation: function (associado, token) {
		var self = this,
			activation = {};
		activation.token = token;
		activation.activated = 0;

		Activation.create(activation).exec((err, activation) => {
			if (err) {
				console.log(err);
			}
			if (activation) {
				console.log(activation);
				self.sendMailActivation(associado, activation);
			}
		});
	},

	sendMailActivation: function (associado, activation) {
		sails.hooks.email.send(
			"registerEmail",
			{
				recipientName: associado.nome,
				urlActivation: `http://localhost:4200/activation-associado/${activation.token}`,
				token: activation.token
			},
			{
				to: associado.email,
				subject: "Bem-vindo à assutef!"
			},
			(msg) => {
				console.log("email enviado!");
			}
		)
	},

	getRamdomString: function (length) {
		return randomstring.generate(length);
	},

	getPreAssociadoByToken: function (req, res) {
		let paramters = req.method == 'PUT' || req.method == 'POST' ? req.body : req.query,
			aux = jwt.decode(paramters.token, { complete: true });
		console.log(aux);
		Associado.findOne({ id: aux.payload.id }).then(associado => {
			return res.ok(associado);
		}, err => {
			res.forbidden("Erro ao buscar associado");
		})
	}

};

