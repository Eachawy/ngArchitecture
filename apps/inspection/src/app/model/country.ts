import { BaseModel } from './baseModel';

export interface Country extends BaseModel {
  label: string;
  value: string;
}
