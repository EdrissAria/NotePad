import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notes'

  public async up () {

    this.schema.alterTable(this.tableName, (table) => {
      table.integer('category_id').references('id').inTable('categories').unsigned()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table)=>{
      table.dropColumn('category_id')
    })
  }
}
