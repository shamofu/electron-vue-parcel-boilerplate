import getApp from './getapp'

let app

afterEach(async () => {
  if (app && app.isRunning()) {
    return await app.stop()
  }
})
beforeEach(async () => {
  app = getApp()
  return await app.start()
})

test('application title', async () => {
  expect(await app.client.getTitle()).toBe('Electron-Vue-Parcel-Boilerplate')
})

test('go to foo', async () => {
  expect(await app.client.element('a#foo').click().element('h1').getText()).toBe('foo!')
})

test('go to bar', async () => {
  expect(await app.client.element('a#bar').click().element('h1').getText()).toBe('bar!')
})
