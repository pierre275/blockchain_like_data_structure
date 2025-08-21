export interface Transaction {
  from: string; // user id
  to: string;   // user id
  amount: number;
  timestamp: number; // epoch ms
}

