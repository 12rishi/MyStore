"use client";
import React, { useEffect, useState } from "react";

import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 300);
  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);
  return (
    <Input
      type="search"
      placeholder="Search product..."
      className="max-w-xs  dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};

export default NavSearch;
