import { expect, test } from "vitest";
import { Slug } from "./slug";

test('it should be able to create a new slug from text.', () => {
  let textToSlug = 'Meu Texto de - test'

  let slug = Slug.createFromText(textToSlug)
  expect(slug.value).toEqual('meu-texto-de-test')


})
