export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  password: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role; // Assuming you have a Role interface defined
  createdAt: Date;
  updatedAt: Date;
  token: string;
}

// Assuming Role interface is defined as:
export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
