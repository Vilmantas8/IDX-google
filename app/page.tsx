import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, ConeIcon as Crane, Truck, HelpCircle, FileText, UserPlus, Package } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Crane className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold text-white">MachineMart</span>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-white hover:text-orange-500 px-3 py-2">Home</Link>
                  <Link href="/ads" className="text-white hover:text-orange-500 px-3 py-2">Ads</Link>
                  <Link href="/about" className="text-white hover:text-orange-500 px-3 py-2">About Us</Link>
                  <Link href="/help" className="text-white hover:text-orange-500 px-3 py-2">Help</Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" className="text-white hover:text-orange-500">Register</Button>
              <Button className="ml-4 bg-orange-500 hover:bg-orange-600">Login</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920"
            alt="Construction site with heavy machinery"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-white mb-4">HOME</h1>
          <p className="text-gray-300 max-w-xl mb-8">
            Marketplace for construction equipment and machinery. Find the best deals on new and used equipment.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Get Started
          </Button>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">ADD ADS</h2>
          <div className="flex gap-4">
            <Input 
              placeholder="Search Ads" 
              className="flex-1 bg-gray-800 border-gray-700 text-white"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group">
              <div className="relative">
                <img
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-sm px-2 py-1 rounded">
                  {index + 1}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-400 p-0">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    title: "Construction Equipment",
    description: "Browse our selection of heavy machinery and construction equipment",
    icon: Truck,
  },
  {
    title: "About Us",
    description: "Learn more about our marketplace and services",
    icon: FileText,
  },
  {
    title: "How It Works",
    description: "Discover how our platform connects buyers and sellers",
    icon: HelpCircle,
  },
  {
    title: "Register",
    description: "Join our marketplace to start buying or selling equipment",
    icon: UserPlus,
  },
  {
    title: "Request Quote",
    description: "Get personalized quotes for your equipment needs",
    icon: Package,
  },
]

