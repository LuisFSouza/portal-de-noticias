const db = require('../database/knexDatabase')

function selectCategories()
{
    return db.select('*').from('categories')
    .then(categories => { return categories })
    .catch(erro => {
      return { tipo: "erro", corpo: "Erro: " + erro }
    })
}

module.exports = 
{
  selectCategories
}