export type ID = number;
export type Country = string;
export type City = string;
export type Image = string;
export type LeavingRoom = string;
export type TourDate = string;

export interface User {

  login: string;
  password: string;
  role: string;
  
}

export interface Tour {
  id: ID;

  country: Country;
  city: City;
  description: string;
  images: Image[];
  hotel: Hotel;
  startDate: TourDate;
  endDate: TourDate;
  price: number;
  duration: number;
}

export interface Message {
  id: ID;

  name: string;
  email: string;
  theme: string;
  message: string;
}

export interface Hotel {
  rating: number;
  name: string;
}

export interface Operator {
  name: string;
  phone: string;
  company: string;
  email: string;
  skype: string;
}

export interface Order {
  id: ID;

  name: string;
  email: string;
  phone: string;
  description: string;
  tour: ID;
  count: number;
  status: 'IN_PROGRESS' | 'CLOSED' | 'PAID' | 'AWAITING_PAYMENT';
}