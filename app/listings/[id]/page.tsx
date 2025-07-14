import Link from "next/link"
import { MapPin, Home, Bed, Bath, Maximize, Calendar, Heart, Share, Phone, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the listing data based on the ID
  const listing = listings.find((l) => l.id === params.id) || listings[0]

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

      <div className="container py-8">
        <Link href="/listings" className="flex items-center gap-2 text-muted-foreground mb-6 hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Images */}
            <div className="mb-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={`/placeholder.svg?height=600&width=1000&text=Property+Image+${index + 1}`}
                            alt={`Property image ${index + 1}`}
                            className="w-full aspect-video object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Property Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge>{listing.type}</Badge>
                <Badge variant="outline">Featured</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{listing.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-teal-600">
                  ${listing.price.toLocaleString()}
                  {listing.type === "For Rent" && <span className="text-base text-muted-foreground">/month</span>}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="h-5 w-5 text-teal-600 mb-2" />
                    <span className="font-bold">{listing.bedrooms}</span>
                    <span className="text-sm text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="h-5 w-5 text-teal-600 mb-2" />
                    <span className="font-bold">{listing.bathrooms}</span>
                    <span className="text-sm text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Maximize className="h-5 w-5 text-teal-600 mb-2" />
                    <span className="font-bold">{listing.sqft.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">Square Feet</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-teal-600 mb-2" />
                    <span className="font-bold">2020</span>
                    <span className="text-sm text-muted-foreground">Year Built</span>
                  </div>
                </div>

                <Tabs defaultValue="description">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="pt-4">
                    <p className="text-muted-foreground">
                      This beautiful {listing.bedrooms} bedroom, {listing.bathrooms} bathroom property located in{" "}
                      {listing.location}
                      offers the perfect blend of comfort and style. With {listing.sqft.toLocaleString()} square feet of
                      living space, this home provides ample room for both relaxation and entertainment.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      The property features modern finishes throughout, including hardwood floors, stainless steel
                      appliances, and large windows that fill the space with natural light. The open floor plan creates
                      a seamless flow between the living, dining, and kitchen areas, making it ideal for hosting
                      gatherings with family and friends.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      Outside, you'll find a beautifully landscaped yard with a patio perfect for outdoor dining and
                      relaxation. The property is conveniently located near shopping, dining, and transportation
                      options, providing easy access to everything the area has to offer.
                    </p>
                  </TabsContent>
                  <TabsContent value="details" className="pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Property Details</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Property Type:</span>
                            <span className="font-medium">Single Family</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Year Built:</span>
                            <span className="font-medium">2020</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Heating:</span>
                            <span className="font-medium">Central</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Cooling:</span>
                            <span className="font-medium">Central</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Parking:</span>
                            <span className="font-medium">2-Car Garage</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Lot Size:</span>
                            <span className="font-medium">0.25 Acres</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Interior Features</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Bedrooms:</span>
                            <span className="font-medium">{listing.bedrooms}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Bathrooms:</span>
                            <span className="font-medium">{listing.bathrooms}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Square Feet:</span>
                            <span className="font-medium">{listing.sqft.toLocaleString()}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Basement:</span>
                            <span className="font-medium">Finished</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Flooring:</span>
                            <span className="font-medium">Hardwood, Tile</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Appliances:</span>
                            <span className="font-medium">All Included</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Interior Features</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Open Floor Plan</li>
                          <li>• Hardwood Floors</li>
                          <li>• Stainless Steel Appliances</li>
                          <li>• Granite Countertops</li>
                          <li>• Walk-in Closets</li>
                          <li>• Fireplace</li>
                          <li>• Smart Home Features</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Exterior Features</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Landscaped Yard</li>
                          <li>• Patio</li>
                          <li>• Deck</li>
                          <li>• Sprinkler System</li>
                          <li>• Fenced Yard</li>
                          <li>• Outdoor Lighting</li>
                          <li>• Garden</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=800&text=Map"
                    alt="Property location map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-muted-foreground">
                  <p>
                    Located in the heart of {listing.location}, this property offers convenient access to local
                    amenities, including shopping centers, restaurants, parks, and schools. The neighborhood is known
                    for its safety, community events, and friendly atmosphere.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Contact Agent */}
            <Card className="mb-6 sticky top-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Agent"
                    alt="Agent"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 fill-current text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">(42 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-transparent">
                    <Mail className="h-4 w-4" />
                    Email Agent
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Schedule a viewing</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <Button key={day} variant="outline" className="text-xs bg-transparent">
                          {day}
                        </Button>
                      ))}
                    </div>
                    <Button className="w-full">Request Viewing</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Listings */}
            <h3 className="font-bold text-lg mb-4">Similar Properties</h3>
            <div className="space-y-4">
              {similarListings.map((item) => (
                <Link href={`/listings/${item.id}`} key={item.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex">
                      <div className="w-1/3">
                        <img
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardContent className="w-2/3 p-3">
                        <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                        <p className="text-teal-600 font-bold text-sm">${item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{item.bedrooms} bd</span>
                          <span>•</span>
                          <span>{item.bathrooms} ba</span>
                          <span>•</span>
                          <span>{item.sqft.toLocaleString()} sqft</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Gen A-Z Homes
              </h3>
              <p className="text-gray-400">Find your perfect home with our comprehensive listing platform.</p>
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
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
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
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-l-md px-4 py-2 w-full bg-gray-800 border-gray-700 text-white"
                />
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
  },
]

const similarListings = [
  {
    id: "4",
    title: "Luxury Penthouse with Rooftop",
    location: "Marina District, San Francisco",
    price: 3500000,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3200,
    type: "For Sale",
    imageUrl: "/placeholder.svg?height=200&width=300",
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
    imageUrl: "/placeholder.svg?height=200&width=300",
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
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]
