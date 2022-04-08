const db = require('../database/knexDatabase')

function save(users){
    return db.insert(users).into('users')
    .then( _ => { 
      return { tipo: "sucesso", corpo: "Usuário cadastrada com sucesso!" }
    })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
  }

module.exports = 
{
  save
}