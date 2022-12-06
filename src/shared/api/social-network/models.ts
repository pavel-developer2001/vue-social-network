export interface IUser {
  avatar: null | string;
  createdAt: string;
  email: string;
  name: string;
  password: string;
  updatedAt: string;
  _id: number;
}
export interface IPost {
  image: string | null;
  text: string;
  createdAt: string;
  stars: number;
  updatedAt: string;
  _id: number;
  user: IUser;
}
export interface IChat {
  createdAt: string;
  description: string;
  image: string;
  title: string;
  updatedAt: string;
  user: IUser;
  _id: number;
}
