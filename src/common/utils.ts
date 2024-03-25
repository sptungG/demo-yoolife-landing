import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type TClassValue = ClassValue;

export const cn = (...inputs: TClassValue[]) => {
  return twMerge(clsx(inputs));
};
