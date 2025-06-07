"use client";

import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TableForm from "./form";
import { RateTable } from "@/lib/db/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function EditTableDialog({ table }: { table: RateTable }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Edit Table
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent className="!max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Table</DialogTitle>
        </DialogHeader>
        <TableForm setOpen={setOpen} table={table} />
      </DialogContent>
    </Dialog>
  );
}
