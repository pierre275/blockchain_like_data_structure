import type { Transaction } from './Transaction';

export interface BlockShape {
  timestamp: number;
  data: Transaction;
  previousHash: string;
  hash: string;
  number: string
}

