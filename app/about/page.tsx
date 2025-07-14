import Link from "next/link"
import { Home, Shield, DollarSign, Search, Heart, Wrench, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
            <Link href="/about" className="font-medium text-teal-600">
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

      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Gen A-Z Homes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Home search reimagined for Gen Z - built by someone who experienced the frustration firsthand and decided to
            create a better way.
          </p>
        </div>

        {/* Founder Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Kevin+Vignali"
                  alt="Kevin Vignali, Founder of Gen A-Z Homes"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white p-3 rounded-full">
                  <Wrench className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Meet Kevin Vignali</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founder & Creator • Age 27 • Maintenance Mechanic at Amazon
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi, I'm Kevin Vignali, and I created Gen A-Z Homes because I lived through the frustration that so
                  many of us face when searching for a home. As a 27-year-old maintenance mechanic working at Amazon, I
                  have a vision of making the world a better place, one piece of tech at a time - offering the world an
                  easier way to live their life.
                </p>

                <p>
                  When I started my home search journey, I quickly discovered that the existing platforms were broken. I
                  would set filters to exclude 55+ communities, condos, and manufactured homes, only to find my search
                  results filled with exactly those types of properties. The platforms seemed designed to show me
                  everything except what I actually wanted to see.
                </p>

                <p>
                  But the real eye-opener came when I realized how much I didn't know about the true cost of
                  homeownership. I spent countless hours educating myself online about property taxes, insurance rates,
                  down payment requirements, and closing costs. I had to piece together information from dozens of
                  different sources just to understand what I could actually afford and what I'd need to bring to the
                  table.
                </p>

                <p>
                  That's when I realized: if I'm struggling with this, so are millions of other Gen Z buyers. We deserve
                  better than misleading filters and hidden costs. We deserve transparency, accuracy, and tools that
                  actually help us make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-teal-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <Target className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To create a home search platform that actually works for Gen Z - with filters that mean what they say,
              transparent pricing, and educational tools that empower informed decisions.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Gen A-Z Homes Different</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Verified Listings</h3>
                <p className="text-muted-foreground">
                  Every listing is verified by our AI system to ensure it matches the stated criteria. No more 55+
                  communities when you filter them out, no more condos when you specifically exclude them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">True Cost Transparency</h3>
                <p className="text-muted-foreground">
                  See the real cost of homeownership including local property taxes, insurance rates, and closing costs.
                  No more surprises or hidden expenses - just honest, upfront information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500">
              <CardContent className="pt-6">
                <div className="mb-4 bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Filters That Actually Work</h3>
                <p className="text-muted-foreground">
                  When you exclude something, it stays excluded. Our search filters are designed to respect your
                  preferences and show you only what you're actually looking for.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Problem We're Solving */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">The Problem We're Solving</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Traditional Home Search Platforms</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Filters that don't work - show excluded property types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Hidden costs and surprise fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Misleading listings that don't match descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No education about true homeownership costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Designed for older generations, not Gen Z needs</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-600">Gen A-Z Homes Solution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>AI-verified listings that match your exact criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>Complete cost transparency with regional data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>Accurate listings with consistent information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>Educational tools and cost calculators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  <span>Built specifically for Gen Z home buyers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4 bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                No hidden costs, no misleading information. Everything upfront and honest.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Every listing is verified to match its stated criteria and description.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Empowerment</h3>
              <p className="text-sm text-muted-foreground">
                Providing the tools and knowledge needed to make informed decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Built by Gen Z, for Gen Z - understanding our unique needs and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Home Search Done Right?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of Gen Z buyers who are finding their perfect homes with transparency and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings">
              <Button size="lg" variant="secondary">
                Browse Listings
              </Button>
            </Link>
            <Link href="/calculator">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600"
              >
                Try Our Calculator
              </Button>
            </Link>
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
