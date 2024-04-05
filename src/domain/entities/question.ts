import { randomUUID } from "crypto"
import { Slug } from "./value-object/slug"
import { Entity } from "../../core/entities/entity"

interface QUestionProps {
  title: string
  content: string
  authorId: string
  slug: Slug
}
export class Question extends Entity<QUestionProps> {

}
