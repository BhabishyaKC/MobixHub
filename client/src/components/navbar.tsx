"use client"
import { useState } from "react"
import { Search, User, ShoppingCart, Menu, X, Bell, Heart, LogIn, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { logoutUser } from "@/redux/reducerSlices/userSlice"
import { useDispatch, useSelector } from "react-redux"

export default function NavbarPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navigationLinks = [
    { name: "Home", href: "/",active: false },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Deals", href: "/deals" },
    { name: "Support", href: "/support" },
  ]
    const {isLoggedIn} = useSelector(state=>state.user)
    const dispatch =useDispatch()
    const handleLogout = ()=>{
      dispatch(logoutUser())
    }
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
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

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      link.active
                        ? "bg-red-600/20 text-red-400 border border-red-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative h-12"> {/* Added explicit height */}
                <Search className="absolute left-4 top-[18px] transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl transition-all duration-200 w-full"
                />
              </div>
            </div>


            {/* Right Side Icons */}
            <div className="flex items-center space-x-3">
              {/* Search Icon for Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 relative hidden sm:flex"
              >
                <Bell className="w-5 h-5" />
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 relative hidden sm:flex"
              >
                <Heart className="w-5 h-5" />
              </Button>

              {/* Shopping Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 relative"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>

               {/* Login Button */}

               {isLoggedIn ?(
                <div>
                 <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer" onClick={handleLogout}><User className="w-5 h-5" /> <span>Logout</span></Button>
                </div>
             ):
              <Link href="/login">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  <User className="w-5 h-5" />
                  <span>Login</span>
                </Button>
              </Link>}
             


              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-800/50 mt-2 pt-4 pb-4">
              {/* Mobile Search */}
              <div className="mb-4 md:hidden">
                <div className="relative">
                  <Search className="absolute left-4 top-[18px] transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search for products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl transition-all duration-200 w-full"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      link.active
                        ? "bg-red-600/20 text-red-400 border border-red-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>


              {/* Mobile Additional Options */}
              <div className="mt-4 space-y-2 sm:hidden">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                >
                  <Bell className="w-5 h-5 mr-3" />
                  Notifications
                  <Badge className="ml-auto text-white text-xs"></Badge>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Wishlist
                  <Badge className="ml-auto  text-white text-xs"></Badge>
                </a>
              </div>
                
              {/* Mobile Login Button */}
              <div className="mt-4 pt-4 border-t border-gray-800/50">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/25 flex items-center justify-center space-x-2">
                    <LogIn className="w-5 h-5" />
                    <span>Login to Your Account</span>
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
