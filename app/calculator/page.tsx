"use client"
import Link from "next/link"
import { Home, DollarSign, Calculator, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrueCostCalculator } from "@/components/true-cost-calculator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculatorPage() {
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

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">True Cost Calculator</h1>
            <p className="text-xl text-muted-foreground">
              Understand the real cost of homeownership beyond just the listing price
            </p>
          </div>

          <Tabs defaultValue="calculator" className="mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="education">Understanding Costs</TabsTrigger>
            </TabsList>
            <TabsContent value="calculator">
              <Card>
                <CardContent className="pt-6">
                  <TrueCostCalculator />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding the True Cost of Homeownership</CardTitle>
                  <CardDescription>
                    There's more to buying a home than just the listing price. Here's what you need to know.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Upfront Costs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Down Payment</h4>
                        <p className="text-sm text-muted-foreground">
                          Typically 3-20% of the home's purchase price. The more you put down, the lower your monthly
                          payments.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Closing Costs</h4>
                        <p className="text-sm text-muted-foreground">
                          Usually 2-5% of the loan amount. Includes loan origination fees, appraisal, title insurance,
                          and more.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Moving Expenses</h4>
                        <p className="text-sm text-muted-foreground">
                          Don't forget to budget for moving costs, which can range from a few hundred to several
                          thousand dollars.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Initial Repairs/Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Budget for immediate repairs or updates you'll want to make before or shortly after moving in.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Monthly Costs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Mortgage Payment</h4>
                        <p className="text-sm text-muted-foreground">
                          Your principal and interest payment, which depends on your loan amount, interest rate, and
                          term.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Property Taxes</h4>
                        <p className="text-sm text-muted-foreground">
                          Varies by location but typically ranges from 0.5% to 2.5% of your home's value annually.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Homeowners Insurance</h4>
                        <p className="text-sm text-muted-foreground">
                          Protects your home and belongings. Costs vary by location, home value, and coverage level.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">HOA Fees</h4>
                        <p className="text-sm text-muted-foreground">
                          If applicable, can range from $100 to $700+ monthly depending on amenities and services
                          provided.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Utilities</h4>
                        <p className="text-sm text-muted-foreground">
                          Water, electricity, gas, internet, etc. Often higher in larger homes or extreme climates.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Maintenance</h4>
                        <p className="text-sm text-muted-foreground">
                          Budget 1-3% of your home's value annually for maintenance and repairs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-teal-600" />
                      First-Time Buyer Tip
                    </h3>
                    <p className="text-sm">
                      Many first-time buyers focus only on the down payment and mortgage, but the additional costs can
                      add 50% or more to your monthly housing expenses. Use our calculator to get a complete picture!
                    </p>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Link href="/first-time-buyers">
                      <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                        View Complete First-Time Buyer Guide
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-teal-600" />
                  Closing Cost Estimator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Estimate closing costs based on your location and loan amount.
                </p>
                <Link href="/calculator/closing-costs">
                  <Button variant="outline" className="w-full bg-transparent">
                    Calculate Closing Costs
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-teal-600" />
                  Rent vs. Buy Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Compare the costs of renting versus buying in your area.
                </p>
                <Link href="/calculator/rent-vs-buy">
                  <Button variant="outline" className="w-full bg-transparent">
                    Compare Rent vs. Buy
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-teal-600" />
                  Affordability Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Find out how much house you can afford based on your income and expenses.
                </p>
                <Link href="/calculator/affordability">
                  <Button variant="outline" className="w-full bg-transparent">
                    Calculate Affordability
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
