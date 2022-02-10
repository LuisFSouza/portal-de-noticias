/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function(tableUsers){
        tableUsers.increments('pk_id_user').primary()
        tableUsers.text('login_user').notNullable()
        tableUsers.text('name_user').notNullable()
        tableUsers.text('email_user').notNullable()
      })
      .createTable('categories', function(tableCategories){
        tableCategories.increments('pk_id_category').primary()
        tableCategories.text('name_category').notNullable()
      })
      .createTable('notices', function(tableNotices){
        tableNotices.increments('pk_id_notice').primary()
        tableNotices.text('where_notice').notNullable()
        tableNotices.text('summary_notice').notNullable()
        tableNotices.datetime('dt_cad_notice').notNullable()
        tableNotices.datetime('dt_occur_notice').notNullable()
        tableNotices.integer('fk_id_category').unsigned().notNullable()
        tableNotices.integer('fk_id_user').unsigned().notNullable()
        tableNotices.foreign('fk_id_category').references('pk_id_category').inTable('categories')
        tableNotices.foreign('fk_id_user').references('pk_id_user').inTable('users')
      })

    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('notices')
  .dropTable('users')  
  .dropTable('categories')  
};
