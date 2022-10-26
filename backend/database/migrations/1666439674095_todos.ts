import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'todos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').references('id').inTable('users').onDelete('cascade').unsigned()
      table.string('todo', 255).notNullable()
      table.dateTime('completed_at').nullable()
      table.boolean('important').defaultTo(0)
      table.dateTime('reminder').nullable()
      table.string('remarks', 255).nullable()
      table.boolean('deleted').defaultTo(0)
      table.boolean('completed').defaultTo(0)
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
