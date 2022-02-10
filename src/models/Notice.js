const db = require('../database/knexDatabase')

function selectNotices()
{
    return db.select('*').from('notices').innerJoin('categories', 'pk_id_category', 'fk_id_category').innerJoin('users', 'pk_id_user', 'fk_id_user')
    .then(notices => { return notices })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}

module.exports = 
{
  selectNotices
}