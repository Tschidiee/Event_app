'use client'
import Link from "next/link";
import { useSession } from "next-auth/react"

const GetStartedButton = () => {
    const {status, data:session} = useSession()
    
  return (
    <Link href={status !== "authenticated" ? '/login' : '/menu' }>
        <button
            className="cta_button hover:bg-white hover:text-black"          
            >Get Started
        </button>
      </Link>
  )
}

export default GetStartedButton


