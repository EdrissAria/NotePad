import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Catagory from './Category'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public catagory_id: number

  @column()
  public todo: string

  @column()
  public completed_at: boolean

  @column()
  public important: boolean

  @column.dateTime()
  public reminder: DateTime

  @column()
  public remarks: string

  @column()
  public deleted: boolean

  @column()
  public completed: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relationships

  @belongsTo(()=> User)
  public user: BelongsTo<typeof User>

  @belongsTo(()=> Catagory)
  public catagory: BelongsTo<typeof Catagory>

}
