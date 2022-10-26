import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Catagory from './Category'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public category_id: number

  @column()
  public note: string

  @column()
  public favorite: boolean

  @column()
  public deleted: boolean

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
