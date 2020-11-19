exports.up = function(knex) {
    return knex.schema.createTable('meals', table => {
        table.increments('id')
        table.string('mealName')
        table.text('ingradients')
        table.text('description')
        table.text('imgURL')
        table.string('author')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('meals')
}
