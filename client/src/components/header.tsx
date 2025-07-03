"use client"

import { useState } from "react"
import { Search, User, ShoppingCart, Menu, X, Bell, Heart, LogIn, Smartphone, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { logoutUser } from "@/redux/reducerSlices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function NavbarPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)
  const [showMobileCategories, setShowMobileCategories] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/" },
    { name: "Categories", href: "/" },
    { name: "Deals", href: "/" },
    { name: "Support", href: "/" },
  ]

  const { isLoggedIn } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logoutUser())

  return (
    <div className="w-full">
      <nav className="bg-gray-900 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-999">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="bg-red-600 p-3 rounded-xl">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Mobix Hub</span>
                  <span className="text-xs text-gray-400 hidden sm:block">Tech Excellence</span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center space-x-1 relative">
                {navigationLinks.map((link) => (
                  link.name === "Categories" ? (
                    <div key={link.name} className="relative">
                      <button
                        onClick={() => setShowCategories(!showCategories)}
                        className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                      >
                        Categories <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      {showCategories && (
                        <div className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                          {['Laptops', 'Mobiles', 'Keyboards', 'Mouse', 'Monitors', 'Accessories'].map((item) => (
                            <Link key={item} href={`/categories/${item.toLowerCase()}`} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative h-12">
                <Search className="absolute left-4 top-[18px] transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl w-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300  hidden sm:flex">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300  hidden sm:flex">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 ">
                <ShoppingCart className="w-5 h-5" />
              </Button>

              {isLoggedIn ? (
                <>
                
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>   
                    <DropdownMenuContent className="bg-gray-900 text-white w-50 ">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                     <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                   
                </>
              ) : (
                <Link href="/login">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
                    <User className="w-5 h-5" /> <span>Login</span>
                  </Button>
                </Link>
              )}

              <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-800/50 mt-2 pt-4 pb-4">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-4 top-[18px] transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                {navigationLinks.map((link) => (
                  link.name === "Categories" ? (
                    <div key={link.name}>
                      <Button onClick={() => setShowMobileCategories(!showMobileCategories)} className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 flex items-center justify-between">
                        Categories <ChevronDown className="w-4 h-4" />
                      </Button>
                      {showMobileCategories && (
                        <div className="ml-4">
                          {['Laptops', 'Mobiles', 'Keyboards', 'Mouse', 'Monitors', 'Accessories'].map((item) => (
                            <Link key={item} href={`/categories/${item.toLowerCase()}`} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800/50">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                    <LogIn className="w-5 h-5" /> <span>Login to Your Account</span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
