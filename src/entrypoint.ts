// code by myself: nicely reflected in .js and .d.ts
export { Foo } from './foo'

// node-internal code: nicely reflected in .js but as external reference in .d.ts
export { dirname } from 'path'

// external module: nicely reflected in .js but as external reference in .d.ts
export { createConnection } from 'typeorm'