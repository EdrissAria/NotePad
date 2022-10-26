import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Note from './Note'
import Todo from './Note'

export default class Category extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public classify_type: string

  @column()
  public name: string

  @column()
  public color: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relationships

  @hasMany(()=> Note)
  public notes: HasMany<typeof Note>

  @hasMany(()=> Todo)
  public todos: HasMany<typeof Todo>
}
