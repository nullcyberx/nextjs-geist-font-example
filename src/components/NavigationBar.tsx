"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Machines", href: "/machines" },
  { name: "Challenges", href: "/challenges" },
  { name: "Labs", href: "/labs" },
  { name: "Profile", href: "/profile" },
]

export default function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-[#9fef00]">HTB-like</span>
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm transition-colors duration-200",
                      isActive
                        ? "text-[#9fef00] font-medium"
                        : "text-gray-300 hover:text-[#9fef00]"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="rounded-md border border-[#9fef00] px-4 py-2 text-sm font-medium text-[#9fef00] hover:bg-[#9fef00] hover:text-black transition-colors duration-200"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
