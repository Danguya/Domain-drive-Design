import { Slug } from "./value-object/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

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
  static create(props: Optional<QUestionProps, 'createdAt'>, id?: UniqueEntityId) {
    const question = new Question({
      ...props,
      createdAt: new Date()
    }, id)
    return question
  }
}
