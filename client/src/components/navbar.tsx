"use client"

import { useState } from "react"
import { Search, User, ShoppingCart, Menu, X, Bell, Heart, LogIn } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Navigation Bar */}
      <nav className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                  <span className="text-white font-bold text-lg">MH</span>
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
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl transition-all duration-200 w-full"
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
              <Link href="/login">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/25 hidden sm:flex items-center space-x-2">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Button>
              </Link>

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
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl transition-all duration-200 w-full"
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

              {/* Mobile Login Button */}
              <div className="mt-4 pt-4 border-t border-gray-800/50">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/25 flex items-center justify-center space-x-2">
                    <LogIn className="w-5 h-5" />
                    <span>Login to Your Account</span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Additional Options */}
              <div className="mt-4 space-y-2 sm:hidden">
                <a
                  href="#"
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                >
                  <Bell className="w-5 h-5 mr-3" />
                  Notifications
                  <Badge className="ml-auto bg-red-600 text-white text-xs">2</Badge>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Wishlist
                  <Badge className="ml-auto bg-red-600 text-white text-xs">5</Badge>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Mobix Hub</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Your premium destination for cutting-edge gadgets and tech accessories. Experience the future of technology
            with our carefully curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/25">
              Explore Products
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Premium Quality",
              description: "Carefully selected products from top brands worldwide",
              icon: "⭐",
            },
            {
              title: "Fast Shipping",
              description: "Quick and secure delivery to your doorstep",
              icon: "🚀",
            },
            {
              title: "Expert Support",
              description: "24/7 customer support from tech specialists",
              icon: "🛠️",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-800/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
