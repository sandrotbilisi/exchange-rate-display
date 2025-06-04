"use client";

import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const mockImages = [
  {
    label: "USD - United States Dollar",
    currency: "USD",
    country: "United States",
    src: "https://flagcdn.com/us.svg",
  },
  {
    label: "EUR - Eurozone",
    currency: "EUR",
    country: "Eurozone",
    src: "https://flagcdn.com/eu.svg",
  },
  {
    label: "GBP - United Kingdom",
    currency: "GBP",
    country: "United Kingdom",
    src: "https://flagcdn.com/gb.svg",
  },
  {
    label: "JPY - Japan",
    currency: "JPY",
    country: "Japan",
    src: "https://flagcdn.com/jp.svg",
  },
  {
    label: "CNY - China",
    currency: "CNY",
    country: "China",
    src: "https://flagcdn.com/cn.svg",
  },
  {
    label: "CHF - Switzerland",
    currency: "CHF",
    country: "Switzerland",
    src: "https://flagcdn.com/ch.svg",
  },
  {
    label: "CAD - Canada",
    currency: "CAD",
    country: "Canada",
    src: "https://flagcdn.com/ca.svg",
  },
  {
    label: "AUD - Australia",
    currency: "AUD",
    country: "Australia",
    src: "https://flagcdn.com/au.svg",
  },
  {
    label: "NZD - New Zealand",
    currency: "NZD",
    country: "New Zealand",
    src: "https://flagcdn.com/nz.svg",
  },
  {
    label: "SEK - Sweden",
    currency: "SEK",
    country: "Sweden",
    src: "https://flagcdn.com/se.svg",
  },
  {
    label: "NOK - Norway",
    currency: "NOK",
    country: "Norway",
    src: "https://flagcdn.com/no.svg",
  },
  {
    label: "DKK - Denmark",
    currency: "DKK",
    country: "Denmark",
    src: "https://flagcdn.com/dk.svg",
  },
  {
    label: "RUB - Russia",
    currency: "RUB",
    country: "Russia",
    src: "https://flagcdn.com/ru.svg",
  },
  {
    label: "TRY - Turkey",
    currency: "TRY",
    country: "Turkey",
    src: "https://flagcdn.com/tr.svg",
  },
  {
    label: "INR - India",
    currency: "INR",
    country: "India",
    src: "https://flagcdn.com/in.svg",
  },
  {
    label: "BRL - Brazil",
    currency: "BRL",
    country: "Brazil",
    src: "https://flagcdn.com/br.svg",
  },
  {
    label: "ZAR - South Africa",
    currency: "ZAR",
    country: "South Africa",
    src: "https://flagcdn.com/za.svg",
  },
  {
    label: "KRW - South Korea",
    currency: "KRW",
    country: "South Korea",
    src: "https://flagcdn.com/kr.svg",
  },
  {
    label: "MXN - Mexico",
    currency: "MXN",
    country: "Mexico",
    src: "https://flagcdn.com/mx.svg",
  },
  {
    label: "PLN - Poland",
    currency: "PLN",
    country: "Poland",
    src: "https://flagcdn.com/pl.svg",
  },
  {
    label: "CZK - Czech Republic",
    currency: "CZK",
    country: "Czech Republic",
    src: "https://flagcdn.com/cz.svg",
  },
  {
    label: "HUF - Hungary",
    currency: "HUF",
    country: "Hungary",
    src: "https://flagcdn.com/hu.svg",
  },
  {
    label: "SGD - Singapore",
    currency: "SGD",
    country: "Singapore",
    src: "https://flagcdn.com/sg.svg",
  },
  {
    label: "HKD - Hong Kong",
    currency: "HKD",
    country: "Hong Kong",
    src: "https://flagcdn.com/hk.svg",
  },
  {
    label: "MYR - Malaysia",
    currency: "MYR",
    country: "Malaysia",
    src: "https://flagcdn.com/my.svg",
  },
  {
    label: "THB - Thailand",
    currency: "THB",
    country: "Thailand",
    src: "https://flagcdn.com/th.svg",
  },
  {
    label: "IDR - Indonesia",
    currency: "IDR",
    country: "Indonesia",
    src: "https://flagcdn.com/id.svg",
  },
  {
    label: "ILS - Israel",
    currency: "ILS",
    country: "Israel",
    src: "https://flagcdn.com/il.svg",
  },
  {
    label: "SAR - Saudi Arabia",
    currency: "SAR",
    country: "Saudi Arabia",
    src: "https://flagcdn.com/sa.svg",
  },
  {
    label: "AED - United Arab Emirates",
    currency: "AED",
    country: "United Arab Emirates",
    src: "https://flagcdn.com/ae.svg",
  },
  {
    label: "EGP - Egypt",
    currency: "EGP",
    country: "Egypt",
    src: "https://flagcdn.com/eg.svg",
  },
  {
    label: "NGN - Nigeria",
    currency: "NGN",
    country: "Nigeria",
    src: "https://flagcdn.com/ng.svg",
  },
  {
    label: "KZT - Kazakhstan",
    currency: "KZT",
    country: "Kazakhstan",
    src: "https://flagcdn.com/kz.svg",
  },
  {
    label: "UAH - Ukraine",
    currency: "UAH",
    country: "Ukraine",
    src: "https://flagcdn.com/ua.svg",
  },
  {
    label: "GEL - Georgia",
    currency: "GEL",
    country: "Georgia",
    src: "https://flagcdn.com/ge.svg",
  },
  {
    label: "RON - Romania",
    currency: "RON",
    country: "Romania",
    src: "https://flagcdn.com/ro.svg",
  },
  {
    label: "ARS - Argentina",
    currency: "ARS",
    country: "Argentina",
    src: "https://flagcdn.com/ar.svg",
  },
  {
    label: "CLP - Chile",
    currency: "CLP",
    country: "Chile",
    src: "https://flagcdn.com/cl.svg",
  },
  {
    label: "COP - Colombia",
    currency: "COP",
    country: "Colombia",
    src: "https://flagcdn.com/co.svg",
  },
  {
    label: "PEN - Peru",
    currency: "PEN",
    country: "Peru",
    src: "https://flagcdn.com/pe.svg",
  },
  {
    label: "PKR - Pakistan",
    currency: "PKR",
    country: "Pakistan",
    src: "https://flagcdn.com/pk.svg",
  },
  {
    label: "BDT - Bangladesh",
    currency: "BDT",
    country: "Bangladesh",
    src: "https://flagcdn.com/bd.svg",
  },
  {
    label: "TWD - Taiwan",
    currency: "TWD",
    country: "Taiwan",
    src: "https://flagcdn.com/tw.svg",
  },
  {
    label: "VND - Vietnam",
    currency: "VND",
    country: "Vietnam",
    src: "https://flagcdn.com/vn.svg",
  },
  {
    label: "IQD - Iraq",
    currency: "IQD",
    country: "Iraq",
    src: "https://flagcdn.com/iq.svg",
  },
  {
    label: "IRR - Iran",
    currency: "IRR",
    country: "Iran",
    src: "https://flagcdn.com/ir.svg",
  },
];

export default function ImageSelector({
  onChange,
  selected,
}: {
  selected: string | null;
  onChange: (selectedItem: (typeof mockImages)[number]) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filtered = mockImages.filter((img) =>
    img.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (item: (typeof mockImages)[number]) => {
    onChange(item);
    setOpen(false);
    setSearch("");
  };

  return (
    <Popover
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) setSearch("");
      }}
    >
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {selected ? (
            <img
              src={selected}
              alt="Selected"
              className="w-32 h-5 object-cover"
            />
          ) : (
            <img
              src={
                "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-blank-avatar-modern-vector-png-image_40962406.jpg"
              }
              alt="Selected"
              className="w-32 h-5 object-cover"
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-2">
        <Input
          placeholder="Search currency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2"
        />
        <ScrollArea className="h-48">
          <div className="space-y-1">
            {filtered.map((img) => (
              <button
                key={img.src}
                onClick={() => handleSelect(img)}
                className={cn(
                  "flex items-center gap-3 p-2 rounded-md w-full text-left transition-colors",
                  selected === img.src ? "bg-muted" : "hover:bg-muted/50"
                )}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="h-4 aspect-[4/3] object-contain"
                />
                <span className="text-sm truncate">{img.label}</span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-sm text-muted-foreground px-2 py-4 text-center">
                No results found.
              </p>
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
