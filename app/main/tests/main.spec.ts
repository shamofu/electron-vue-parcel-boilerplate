import getApp from './getapp'

jest.setTimeout(60000)
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
  const foo = await app.client.$('a#foo')
  await foo.click()
  const bar = await app.client.$('h1')
  expect(await bar.getText()).toBe('foo!')
})

test('go to bar', async () => {
  const foo = await app.client.$('a#bar')
  await foo.click()
  const bar = await app.client.$('h1')
  expect(await bar.getText()).toBe('bar!')
})
