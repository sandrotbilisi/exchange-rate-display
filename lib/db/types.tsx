export type Link = {
  id: string;
  url: string; // e.g. "/display/abc123"
  branchId: string; // foreign key to Branch
  expiresAt?: string;
  createdAt: string;
};

export type Branch = {
  id: string;
  name: string;
  address?: string;
  tableId: string; // foreign key to RateTable
  createdAt: string;
};

// types.ts
export type RateTable = {
  id?: string;
  name: string;
  currencies: {
    code: string; // e.g. "USD"
    label: string; // e.g. "US Dollar"
    buyRate: number;
    sellRate: number;
    notableRate: number;
    image: string | null;
  }[];
  createdAt?: string;
  updatedAt?: string;
};
