import React from "react";
import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <Input
      type="search"
      placeholder="Search product..."
      className="max-w-xs  dark:bg-muted"
    />
  );
};

export default NavSearch;
