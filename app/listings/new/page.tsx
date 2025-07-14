"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Home, Upload, X, AlertCircle, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function NewListingPage() {
  const [images, setImages] = useState<string[]>([])
  const [features, setFeatures] = useState<string[]>([])
  const [newFeature, setNewFeature] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [description, setDescription] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [listingType, setListingType] = useState("")
  const [aiVerificationStatus, setAiVerificationStatus] = useState<"idle" | "verifying" | "passed" | "failed">("idle")
  const [aiVerificationMessage, setAiVerificationMessage] = useState("")
  const [aiVerificationDetails, setAiVerificationDetails] = useState<string[]>([])
  const [currentTab, setCurrentTab] = useState("details")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures((prev) => [...prev, newFeature.trim()])
      setNewFeature("")
    }
  }

  const removeFeature = (index: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index))
  }

  const verifyListing = () => {
    // This would be an actual AI verification in a real app
    setAiVerificationStatus("verifying")

    setTimeout(() => {
      // Simulate AI verification
      if (description.toLowerCase().includes("55+") && propertyType === "house") {
        setAiVerificationStatus("failed")
        setAiVerificationMessage("Listing contains inconsistent information")
        setAiVerificationDetails([
          "You've selected 'House' as the property type but mentioned '55+' in the description, which typically refers to age-restricted communities",
          "Please clarify if this is an age-restricted community and select the appropriate property type",
        ])
      } else if (description.toLowerCase().includes("manufactured") && propertyType !== "manufactured") {
        setAiVerificationStatus("failed")
        setAiVerificationMessage("Property type mismatch detected")
        setAiVerificationDetails([
          "Your description mentions a manufactured home, but you've selected a different property type",
          "Please select 'Manufactured Home' as the property type for accuracy",
        ])
      } else if (description.toLowerCase().includes("condo") && propertyType !== "condo") {
        setAiVerificationStatus("failed")
        setAiVerificationMessage("Property type mismatch detected")
        setAiVerificationDetails([
          "Your description mentions a condo, but you've selected a different property type",
          "Please select 'Condo' as the property type for accuracy",
        ])
      } else {
        setAiVerificationStatus("passed")
        setAiVerificationMessage("Listing verified successfully")
        setAiVerificationDetails([
          "All information is consistent and accurate",
          "Your listing meets our transparency standards",
        ])
      }
    }, 2000)
  }

  const handleSubmitListing = () => {
    // This would be an actual API call in a real app
    alert("Listing submitted successfully! You will be redirected to your dashboard.")
    // In a real app, you would:
    // 1. Send the form data to your API
    // 2. Show a success message
    // 3. Redirect to the listings page or user dashboard
    // Example: router.push('/dashboard')
  }

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
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl font-bold">Post a New Listing</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Shield className="h-5 w-5 text-teal-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    All listings are verified by our AI system to ensure accuracy and prevent misleading information
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Alert className="mb-6 bg-teal-50 border-teal-200">
            <Shield className="h-4 w-4 text-teal-600" />
            <AlertTitle>Listing Verification</AlertTitle>
            <AlertDescription>
              Our AI system will verify your listing to ensure it matches your selected criteria. Listings with
              inconsistent information will not be published until corrected.
            </AlertDescription>
          </Alert>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="verify">Verify & Submit</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                  <CardDescription>
                    Enter accurate information about your property. All fields must be truthful and consistent.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Property Title</Label>
                    <Input id="title" placeholder="e.g. Modern Apartment with City View" />
                    <p className="text-sm text-muted-foreground">
                      Be specific and accurate. Don't include misleading terms.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Property ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="e.g. 90210"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      maxLength={5}
                    />
                    <p className="text-sm text-muted-foreground">
                      We'll use this to provide accurate regional pricing data
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="listingType">Listing Type</Label>
                      <Select value={listingType} onValueChange={setListingType}>
                        <SelectTrigger id="listingType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sale">For Sale</SelectItem>
                          <SelectItem value="rent">For Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select value={propertyType} onValueChange={setPropertyType}>
                        <SelectTrigger id="propertyType">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">Single Family Home</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="manufactured">Manufactured Home</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Is this property in an age-restricted community?</Label>
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="not-restricted" />
                        <Label htmlFor="not-restricted">No, open to all ages</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="age-restricted" />
                        <Label htmlFor="age-restricted">Yes, this is a 55+ or age-restricted community</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input id="price" type="number" className="pl-7" placeholder="e.g. 750000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Input id="bedrooms" type="number" placeholder="e.g. 3" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                      <Input id="bathrooms" type="number" step="0.5" placeholder="e.g. 2.5" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sqft">Square Feet</Label>
                      <Input id="sqft" type="number" placeholder="e.g. 1500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your property accurately..."
                      className="min-h-[150px]"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      Be honest and accurate. Our AI system will verify that your description matches your selected
                      property type.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Draft</Button>
                  <Button onClick={() => setCurrentTab("media")}>Continue to Media</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Property Media</CardTitle>
                  <CardDescription>
                    Upload accurate, recent photos of your property. Misleading images will be flagged.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <h3 className="font-medium mb-1">Drag and drop your images here</h3>
                    <p className="text-sm text-muted-foreground mb-4">or click to browse (max 10 images)</p>
                    <div className="relative">
                      <Input
                        type="file"
                        accept="image/*"
                        multiple
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                      />
                      <Button variant="outline">Select Files</Button>
                    </div>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Property image ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertTitle>Photo Guidelines</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                        <li>Photos must be recent (taken within the last 3 months)</li>
                        <li>Do not use stock photos or images of similar properties</li>
                        <li>Include photos of any issues or damage for transparency</li>
                        <li>
                          Photos will be analyzed by our AI system to verify consistency with your listing details
                        </li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentTab("details")}>
                    Previous
                  </Button>
                  <Button onClick={() => setCurrentTab("features")}>Continue to Features</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle>Property Features</CardTitle>
                  <CardDescription>Add accurate features and amenities of your property.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year-built">Year Built</Label>
                      <Input id="year-built" type="number" placeholder="e.g. 2020" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lot-size">Lot Size</Label>
                      <Input id="lot-size" placeholder="e.g. 0.25 acres" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Features</Label>
                    <div className="flex gap-2">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder="Add a feature (e.g. Fireplace)"
                      />
                      <Button type="button" onClick={addFeature}>
                        Add
                      </Button>
                    </div>

                    {features.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {features.map((feature, index) => (
                          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                            <span>{feature}</span>
                            <button className="text-gray-500 hover:text-gray-700" onClick={() => removeFeature(index)}>
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id="garage" />
                      <Label htmlFor="garage">Garage</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="pool" />
                      <Label htmlFor="pool">Swimming Pool</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="ac" />
                      <Label htmlFor="ac">Air Conditioning</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="heating" />
                      <Label htmlFor="heating">Central Heating</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="laundry" />
                      <Label htmlFor="laundry">Laundry Room</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="wifi" />
                      <Label htmlFor="wifi">WiFi</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="gym" />
                      <Label htmlFor="gym">Gym</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="security" />
                      <Label htmlFor="security">Security System</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="furnished" />
                      <Label htmlFor="furnished">Furnished</Label>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <Label className="text-base font-medium">Property Condition</Label>
                    <RadioGroup defaultValue="good">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excellent" id="condition-excellent" />
                        <Label htmlFor="condition-excellent">Excellent/Like New</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="condition-good" />
                        <Label htmlFor="condition-good">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fair" id="condition-fair" />
                        <Label htmlFor="condition-fair">Fair</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="needs-work" id="condition-needs-work" />
                        <Label htmlFor="condition-needs-work">Needs Work/Fixer-Upper</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentTab("media")}>
                    Previous
                  </Button>
                  <Button onClick={() => setCurrentTab("verify")}>Continue to Verification</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="verify">
              <Card>
                <CardHeader>
                  <CardTitle>Verify & Submit Your Listing</CardTitle>
                  <CardDescription>
                    Our AI system will verify your listing for accuracy before publishing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Listing Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI system will check your listing for consistency and accuracy. This helps ensure all listings
                      on Gen A-Z Homes are transparent and match their stated criteria.
                    </p>

                    {aiVerificationStatus === "idle" && (
                      <Button onClick={verifyListing} className="w-full">
                        Verify Listing
                      </Button>
                    )}

                    {aiVerificationStatus === "verifying" && (
                      <div className="flex flex-col items-center py-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500 mb-4"></div>
                        <p>Verifying your listing...</p>
                      </div>
                    )}

                    {aiVerificationStatus === "passed" && (
                      <Alert className="bg-green-50 border-green-200">
                        <Shield className="h-4 w-4 text-green-600" />
                        <AlertTitle className="text-green-800">{aiVerificationMessage}</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 text-sm space-y-1 mt-2 text-green-700">
                            {aiVerificationDetails.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        </AlertDescription>
                      </Alert>
                    )}

                    {aiVerificationStatus === "failed" && (
                      <Alert className="bg-red-50 border-red-200">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertTitle className="text-red-800">{aiVerificationMessage}</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 text-sm space-y-1 mt-2 text-red-700">
                            {aiVerificationDetails.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" placeholder="Your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Contact Phone</Label>
                    <Input id="contact-phone" placeholder="Your phone number" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">
                      I confirm that all information provided is accurate and truthful. I understand that misleading
                      listings will be removed.
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentTab("features")}>
                    Previous
                  </Button>
                  <Button disabled={aiVerificationStatus !== "passed"} onClick={handleSubmitListing}>
                    {aiVerificationStatus === "passed" ? "Submit Listing" : "Complete Verification First"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
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
