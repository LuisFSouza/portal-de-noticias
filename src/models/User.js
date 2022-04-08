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

  function selectUsers(users){

    return db.select('*').from('users')
    .then(users => { return users })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    }) 
  }

  function selectUserById(id){
    return db.select('*').from('users').where('pk_id_user', id ).first()
    .then(user => { return user })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    }) 
  }

  function update(user,id){
    return db('users').where('pk_id_user', id ).update(user)
    .then( _ => { 
        return { tipo: "sucesso", corpo: "Usuário alterado com sucesso!" }
      })
      .catch(erro => {
        return { tipo: "erro", corpo: "Erro: " + erro }
      })
  }

module.exports = 
{
  save,
  selectUsers,
  selectUserById,
  update
}