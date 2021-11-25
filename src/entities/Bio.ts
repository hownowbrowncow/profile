import {EntitySchema} from 'typeorm';

export interface Bio {
    id: string
    title: string
    phone: string
    email: string
    displayName: string
    description: string
}

export const BioEntity = new EntitySchema<Bio>({
    name: 'bios',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: true
        },
        title: {
          type: String,
        },
        phone: {
          type: String,
        },
        displayName: {
          type: String,
        },
        email: {
          type: String,
        },
        description: {
          type: String,
        },
    },
});
