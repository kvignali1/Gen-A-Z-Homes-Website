import Link from "next/link"
import { Search, MapPin, Home, Building, Info, DollarSign, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrueCostCalculator } from "@/components/true-cost-calculator"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Home className="h-6 w-6" />
            <span>Gen A-Z Homes</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/listings" className="font-medium">
              Listings
            </Link>
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/listings/new">
              <Button>Post a Listing</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 py-20 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Home Search Without The Frustration</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find your perfect home with filters that actually work, transparent pricing, and no misleading listings.
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 shadow-lg">
            <Tabs defaultValue="buy">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>
              <TabsContent value="buy" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter your ZIP code or address" className="pl-10 py-6" />
                  </div>
                  <Button className="py-6">Search</Button>
                </div>
                <div className="text-left text-sm text-gray-600 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  <span>All listings are AI-verified to match your exact search criteria</span>
                </div>
              </TabsContent>
              <TabsContent value="rent" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter your ZIP code or address" className="pl-10 py-6" />
                  </div>
                  <Button className="py-6">Search Rentals</Button>
                </div>
                <div className="text-left text-sm text-gray-600 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  <span>All listings are AI-verified to match your exact search criteria</span>
                </div>
              </TabsContent>
              <TabsContent value="sell" className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter your property address" className="pl-10 py-6" />
                  </div>
                  <Button className="py-6">Get Estimate</Button>
                </div>
                <div className="text-left text-sm text-gray-600 flex items-center gap-2">
                  <Info className="h-4 w-4 text-teal-600" />
                  <span>Get accurate estimates based on real local market data</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Gen A-Z Homes is Different</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Listings Only</h3>
                <p className="text-muted-foreground">
                  Our AI moderation system ensures all listings match their stated criteria. No more 55+ communities
                  when you filter them out.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">True Cost Transparency</h3>
                <p className="text-muted-foreground">
                  See the real cost of homeownership including local taxes, insurance rates, and closing costs specific
                  to your area.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Filters That Work</h3>
                <p className="text-muted-foreground">
                  When you filter out condos or manufactured homes, you'll never see them in your results. Period.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* True Cost Calculator Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Know the True Cost of Homeownership</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Don't be surprised by hidden costs. Our True Cost Calculator shows you everything you need to budget
                for, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Mortgage</Badge>
                  <span>Based on current interest rates in your area</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Property Taxes</Badge>
                  <span>Pulled from local tax assessor data</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Insurance</Badge>
                  <span>Average rates for your specific location</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Closing Costs</Badge>
                  <span>Estimated fees for your area and purchase price</span>
                </li>
              </ul>
              <Link href="/calculator">
                <Button size="lg">Try the Calculator</Button>
              </Link>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <TrueCostCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <Link href="/listings">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <Link href={`/listings/${listing.id}`} key={listing.id}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <img
                      src={listing.imageUrl || "/placeholder.svg"}
                      alt={listing.title}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2">{listing.type}</Badge>
                    <Badge className="absolute top-2 left-2 bg-teal-100 text-teal-800 hover:bg-teal-100">
                      Verified
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{listing.location}</span>
                    </div>
                    <p className="text-2xl font-bold text-teal-600 mb-2">${listing.price.toLocaleString()}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <span className="font-medium">{listing.bedrooms} beds</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{listing.bathrooms} baths</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{listing.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t flex items-center text-sm text-teal-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>Est. monthly: ${listing.estimatedMonthly}/mo with all costs</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Browse by Property Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {propertyTypes.map((type) => (
              <Link href={`/listings?type=${type.value}`} key={type.value}>
                <Card className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center">
                      {type.icon}
                    </div>
                    <h3 className="font-bold">{type.label}</h3>
                    <p className="text-muted-foreground text-sm">{type.count} listings</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Gen A-Z Homes
              </h3>
              <p className="text-gray-400">
                Home search reimagined for Gen Z - with transparency, accuracy, and no misleading listings.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="text-gray-400 hover:text-white">
                    Listings
                  </Link>
                </li>
                <li>
                  <Link href="/calculator" className="text-gray-400 hover:text-white">
                    True Cost Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/first-time-buyers" className="text-gray-400 hover:text-white">
                    First-Time Buyer Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-2">Stay updated with the latest listings</p>
              <div className="flex">
                <Input placeholder="Your email" className="rounded-r-none bg-gray-800 border-gray-700 text-white" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gen A-Z Homes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const featuredListings = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, New York",
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "4,850",
  },
  {
    id: "2",
    title: "Spacious Family Home",
    location: "Suburbia, California",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "7,920",
  },
  {
    id: "3",
    title: "Cozy Studio in Historic District",
    location: "Old Town, Chicago",
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: "For Rent",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "2,100",
  },
]

const propertyTypes = [
  {
    label: "Houses",
    value: "house",
    count: 1245,
    icon: <Home className="h-6 w-6 text-teal-600" />,
  },
  {
    label: "Apartments",
    value: "apartment",
    count: 853,
    icon: <Building className="h-6 w-6 text-teal-600" />,
  },
  {
    label: "Condos",
    value: "condo",
    count: 621,
    icon: <Building className="h-6 w-6 text-teal-600" />,
  },
  {
    label: "Land",
    value: "land",
    count: 317,
    icon: <MapPin className="h-6 w-6 text-teal-600" />,
  },
]
