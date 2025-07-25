import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/images/logo.png'
import { SignedIn, SignedOut, UserButton,SignInButton } from "@clerk/nextjs";
import SearchBar from '@/components/Searchbar'

function Header() {
  return (
    <div className="border-b">
      <div className="flex flex-row items-center justify-between gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>
        </div>

        <div className="lg:hidden">
            <SignedIn>
                <UserButton/>
            </SignedIn>
            <SignedOut>
                <SignInButton mode = "modal">
                    <button className ="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
      </div>
      <div className = "w-full lg:max-w-2xl">
        <SearchBar/>
      </div>
    </div>
  )
}

export default Header