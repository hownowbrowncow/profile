import {EntitySchema} from 'typeorm';

interface Link {
  id: string
  name: string
  href: string
  icon: string
}

export const LinkEntity = new EntitySchema<Link>({
  name: 'LinkEntity',
  tableName: 'links',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    href: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
});
