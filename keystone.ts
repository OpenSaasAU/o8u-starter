import { config } from '@keystone-6/core'

import { lists } from './src/keystone/schema'

export default config({
  db: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL!,
    extendPrismaSchema: (schema) => {
      return schema.replace(
        /(generator [^}]+)}/g,
        ['$1', 'previewFeatures = ["driverAdapters"]\n', '}'].join(''),
      )
    },
  },
  lists,
})
