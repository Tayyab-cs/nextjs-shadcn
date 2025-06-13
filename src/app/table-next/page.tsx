"use server"

import React from "react";
import { RegistrationForm, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<RegistrationForm[]> {
   const response = await fetch('http://localhost:3001/user-registration');

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch user data');
  }

  const users: RegistrationForm[] = await response.json();
  return users;
}

export default async function TableNext() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
