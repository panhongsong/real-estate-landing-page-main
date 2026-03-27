import { MENU_CUSTOMER } from "@/common/mocks/customer";
import CardCustomer from "@/components/elements/CardCustomer";
import React from "react";

interface CustomersProps {}

export default function Customers({}: CustomersProps) {
  return (
    <section
      id="customers"
      className="w-full flex flex-col gap-y-12 items-center px-4 md:px-16 2xl:px-48 py-28"
    >
      <h1 className="font-medium text-2xl md:text-5xl lg:text-6xl text-[#2A3B8F]">
        What our customers say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-auto">
        {MENU_CUSTOMER.map((item, index) => (
          <CardCustomer key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
