exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('id')
        table.integer('meal_id')
        table.text('comment')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
}