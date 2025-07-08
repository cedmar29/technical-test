import { Mission } from './mission';

export interface Worker {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  job: string;
  experience: number;
  picture: string;
  missions?: Mission[];
}
