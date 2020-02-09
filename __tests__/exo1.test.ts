import { print } from '../src/exo1';

// Assert greeter result
it('print 12345', async () => {
  expect(await print()).toBe('12345');
});
