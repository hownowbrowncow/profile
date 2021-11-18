import { ValueTransformer } from 'typeorm';

export const dateTransformer: ValueTransformer = {
  from: (date: string | null) => date && new Date(parseInt(date, 10)),
  to: (date?: Date) => date?.valueOf().toString(),
};

export const bigIntTransformer: ValueTransformer = {
  from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
  to: (bigInt?: number) => bigInt?.toString(),
};
