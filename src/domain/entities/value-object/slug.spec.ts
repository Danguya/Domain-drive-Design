import { Slug } from './slug'

test('it should be able to create a new slug from text.', () => {
  const textToSlug = 'Meu Texto de - test'

  const slug = Slug.createFromText(textToSlug)
  expect(slug.value).toEqual('meu-texto-de-test')
})
