import React from 'react'
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "pending@example.com",
        },
        {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "processing@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 135,
            status: "success",
            email: "success@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 145,
            status: "failed",
            email: "failed@gmail.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "pending@example.com",
        },
        {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "processing@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 135,
            status: "success",
            email: "success@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 145,
            status: "failed",
            email: "failed@gmail.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "pending@example.com",
        },
        {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "processing@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 135,
            status: "success",
            email: "success@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 145,
            status: "failed",
            email: "failed@gmail.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "pending@example.com",
        },
        {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "processing@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 135,
            status: "success",
            email: "success@gmail.com",
        },
        {
            id: "489e1d42",
            amount: 145,
            status: "failed",
            email: "failed@gmail.com",
        },
    ]
}

export default async function TableNext() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}