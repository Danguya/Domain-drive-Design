import { Slug } from "./value-object/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface QUestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}
export class Question extends Entity<QUestionProps> {

}
