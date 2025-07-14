import Link from "next/link"
import { Search, MapPin, Filter, Grid, List, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ListingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <MapPin className="h-6 w-6" />
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

      <div className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-3xl font-bold">Property Listings</h1>
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">AI Verified</Badge>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Enter your ZIP code or address" className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="filters">
              <AccordionTrigger className="text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Advanced Filters
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label>Property Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Price Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Price</SelectItem>
                        <SelectItem value="0-250000">$0 - $250,000</SelectItem>
                        <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500000-750000">$500,000 - $750,000</SelectItem>
                        <SelectItem value="750000-1000000">$750,000 - $1,000,000</SelectItem>
                        <SelectItem value="1000000+">$1,000,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Bedrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Bathrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label>Square Feet</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="0-1000">0 - 1,000 sqft</SelectItem>
                        <SelectItem value="1000-1500">1,000 - 1,500 sqft</SelectItem>
                        <SelectItem value="1500-2000">1,500 - 2,000 sqft</SelectItem>
                        <SelectItem value="2000-3000">2,000 - 3,000 sqft</SelectItem>
                        <SelectItem value="3000+">3,000+ sqft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Year Built</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="2020+">2020 or newer</SelectItem>
                        <SelectItem value="2010-2020">2010 - 2020</SelectItem>
                        <SelectItem value="2000-2010">2000 - 2010</SelectItem>
                        <SelectItem value="1980-2000">1980 - 2000</SelectItem>
                        <SelectItem value="1950-1980">1950 - 1980</SelectItem>
                        <SelectItem value="pre-1950">Before 1950</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Lot Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="0-0.25">0 - 0.25 acres</SelectItem>
                        <SelectItem value="0.25-0.5">0.25 - 0.5 acres</SelectItem>
                        <SelectItem value="0.5-1">0.5 - 1 acres</SelectItem>
                        <SelectItem value="1-5">1 - 5 acres</SelectItem>
                        <SelectItem value="5+">5+ acres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Property Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="garage" />
                        <Label htmlFor="garage" className="text-sm">
                          Garage
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pool" />
                        <Label htmlFor="pool" className="text-sm">
                          Pool
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fireplace" />
                        <Label htmlFor="fireplace" className="text-sm">
                          Fireplace
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="waterfront" />
                        <Label htmlFor="waterfront" className="text-sm">
                          Waterfront
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="basement" />
                        <Label htmlFor="basement" className="text-sm">
                          Basement
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newConstruction" />
                        <Label htmlFor="newConstruction" className="text-sm">
                          New Construction
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Exclude Property Types</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="excludeCondo" />
                        <Label htmlFor="excludeCondo" className="text-sm">
                          Condos
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="excludeManufactured" />
                        <Label htmlFor="excludeManufactured" className="text-sm">
                          Manufactured Homes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exclude55plus" />
                        <Label htmlFor="exclude55plus" className="text-sm">
                          55+ Communities
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="excludeFixer" />
                        <Label htmlFor="excludeFixer" className="text-sm">
                          Fixer-Uppers
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="excludeForeclosure" />
                        <Label htmlFor="excludeForeclosure" className="text-sm">
                          Foreclosures
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="excludeShortSale" />
                        <Label htmlFor="excludeShortSale" className="text-sm">
                          Short Sales
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    Reset Filters
                  </Button>
                  <Button size="sm">Apply Filters</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2 text-sm text-teal-600">
              <Shield className="h-4 w-4" />
              <span>All listings are verified to match your exact search criteria</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <List className="h-4 w-4" />
              </Button>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="sqft">Square Feet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-6">Showing 1-12 of 48 results</p>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {listings.map((listing) => (
            <Link href={`/listings/${listing.id}`} key={listing.id}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <img
                    src={listing.imageUrl || "/placeholder.svg"}
                    alt={listing.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2">{listing.type}</Badge>
                  <Badge className="absolute top-2 left-2 bg-teal-100 text-teal-800 hover:bg-teal-100">Verified</Badge>
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
                  {listing.estimatedMonthly && (
                    <div className="mt-3 pt-3 border-t flex items-center text-sm text-teal-600">
                      <span>Est. monthly: ${listing.estimatedMonthly}/mo with all costs</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
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
const listings = [
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
  {
    id: "4",
    title: "Luxury Penthouse with Rooftop",
    location: "Marina District, San Francisco",
    price: 3500000,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3200,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "19,750",
  },
  {
    id: "5",
    title: "Charming Cottage Near Lake",
    location: "Lake View, Seattle",
    price: 875000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "5,320",
  },
  {
    id: "6",
    title: "Modern Townhouse in Gated Community",
    location: "Westside, Los Angeles",
    price: 2200,
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 1800,
    type: "For Rent",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "2,450",
  },
  {
    id: "7",
    title: "Renovated Loft in Arts District",
    location: "Arts District, Portland",
    price: 650000,
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 1100,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "3,980",
  },
  {
    id: "8",
    title: "Waterfront Property with Dock",
    location: "Bayside, Miami",
    price: 4200000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "23,600",
  },
  {
    id: "9",
    title: "Contemporary Condo with Mountain Views",
    location: "Highlands, Denver",
    price: 3200,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: "For Rent",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "3,450",
  },
  {
    id: "10",
    title: "Historic Brownstone with Garden",
    location: "Brooklyn Heights, New York",
    price: 2950000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3000,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "16,780",
  },
  {
    id: "11",
    title: "Bright Studio in University District",
    location: "University Area, Boston",
    price: 1600,
    bedrooms: 0,
    bathrooms: 1,
    sqft: 550,
    type: "For Rent",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "1,850",
  },
  {
    id: "12",
    title: "Ranch Style Home on Large Lot",
    location: "Countryside, Austin",
    price: 895000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=400&width=600",
    estimatedMonthly: "5,450",
  },
]
