import { Separator } from "@/components/ui/separator";
import React from "react";
import SidebarLink from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Dashboard </h1>
      <Separator className="mt-4" />
      <section className="grid lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-2 mt-12">
          <SidebarLink />
        </div>
        <div className="lg:col-span-10 px-4 py-6 mt-12">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
