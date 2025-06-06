import { RateTable } from "@/lib/db/types";

let endpoint = "rate-tables";

export const getTables = async (): Promise<RateTable[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
  const data = await res.json();
  return data;
};

export const addTable = async (table: RateTable): Promise<RateTable> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(table),
  });

  if (!res.ok) {
    throw new Error(`Failed to add table: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};

export const editTable = async (id: string, table: RateTable): Promise<RateTable> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(table),
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to edit table: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
