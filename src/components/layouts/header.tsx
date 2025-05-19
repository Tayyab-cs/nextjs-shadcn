'use client'
import React from 'react'
import Link from 'next/link'
import DarkMode from '../common/dark-mode'


export default function Header() {
    return (
        <header className="px-4 py-2 top-0 sticky shadow flex flex-row items-center justify-between">
            <nav className="flex gap-4">
                <Link href="/">Main</Link>
                <Link href="/home">Home</Link>
                <Link href="/registration">Registration</Link>
            </nav>
            <div className="p-4 flex flex-row justify-end">
                <DarkMode />
            </div>
        </header>
    )
}