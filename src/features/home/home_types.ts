export interface UserType {
  _id?: string;
  fullName: string;
  profilePic?: string;
  bio?: string;
}


export interface Message {
  senderId: string;
  text?: string;
  image?: string;
  createdAt: string;
}

export interface User {
  fullName: string;
  profilePic?: string;
  bio?: string;
}



