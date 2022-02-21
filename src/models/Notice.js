const db = require('../database/knexDatabase')

function selectNotices()
{
    return db.select('*').from('notices').innerJoin('categories', 'pk_id_category', 'fk_id_category').innerJoin('users', 'pk_id_user', 'fk_id_user')
    .then(notices => { return notices })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}

function save(notice){
  return db.insert(notice).into('notices')
  .then( _ => { 
    return { tipo: "sucesso", corpo: "Noticia cadastrada com sucesso!" }
  })
  .catch(erro => {
    return { tipo: "erro", corpo: "Erro: " + erro }
  })
}

function update(notice, id){
  return db('notices').where('pk_id_notice', id).update(notice)
  .then( _ => { 
    return { tipo: "sucesso", corpo: "Noticia alterada com sucesso!" }
  })
  .catch(erro => {
    return { tipo: "erro", corpo: "Erro: " + erro }
  })
}

function selectNoticeById(id){
  return db.select('*').from('notices').innerJoin('categories', 'pk_id_category', 'fk_id_category').where('pk_id_notice', id ).first()
  .then(notice => {return notice})
  .catch(erro => {
    return { tipo: "erro", corpo: "Erro: " + erro }
  })
  
}
module.exports = 
{
  selectNotices,
  save,
  update,
  selectNoticeById
}