"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TrueCostCalculator() {
  const [zipCode, setZipCode] = useState("")
  const [homePrice, setHomePrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTax, setPropertyTax] = useState(0)
  const [homeInsurance, setHomeInsurance] = useState(0)
  const [closingCosts, setClosingCosts] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  // Sync down-payment % when the $ amount changes
  useEffect(() => {
    const percent = Math.round((downPayment / homePrice) * 100)
    if (percent !== downPaymentPercent) {
      setDownPaymentPercent(percent)
    }
  }, [downPayment, homePrice, downPaymentPercent])

  // Sync down-payment $ amount when the % changes
  useEffect(() => {
    const amount = Math.round((downPaymentPercent / 100) * homePrice)
    if (amount !== downPayment) {
      setDownPayment(amount)
    }
  }, [downPaymentPercent, homePrice, downPayment])

  // Simulate fetching regional data when zip code changes
  useEffect(() => {
    if (zipCode.length === 5) {
      // This would be an API call in a real application
      setTimeout(() => {
        // Sample data - in a real app, this would come from an API
        setInterestRate(6.5)
        setPropertyTax(homePrice * 0.011) // 1.1% of home value annually
        setHomeInsurance(1200) // $1200 annually
        setClosingCosts(homePrice * 0.03) // 3% of home price
        setDataLoaded(true)
      }, 500)
    }
  }, [zipCode, homePrice])

  // Calculate monthly payment
  useEffect(() => {
    if (dataLoaded) {
      const loanAmount = homePrice - downPayment
      const monthlyInterestRate = interestRate / 100 / 12
      const numberOfPayments = loanTerm * 12

      // Calculate mortgage payment (principal + interest)
      const mortgagePayment =
        (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)

      // Add property tax and insurance
      const monthlyPropertyTax = propertyTax / 12
      const monthlyInsurance = homeInsurance / 12

      const total = mortgagePayment + monthlyPropertyTax + monthlyInsurance
      setMonthlyPayment(Math.round(total))
    }
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, homeInsurance, dataLoaded])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">True Cost Calculator</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="zipCode">Enter your ZIP code</Label>
          <Input
            id="zipCode"
            placeholder="e.g. 90210"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            maxLength={5}
          />
          <p className="text-sm text-muted-foreground">We'll use this to get accurate rates for your area</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="homePrice">Home Price</Label>
            <span className="font-medium">{formatCurrency(homePrice)}</span>
          </div>
          <Slider
            id="homePrice"
            min={100000}
            max={2000000}
            step={10000}
            value={[homePrice]}
            onValueChange={(value) => setHomePrice(value[0])}
          />
          <div className="flex gap-2 mt-1">
            <Button variant="outline" size="sm" onClick={() => setHomePrice(300000)}>
              $300k
            </Button>
            <Button variant="outline" size="sm" onClick={() => setHomePrice(500000)}>
              $500k
            </Button>
            <Button variant="outline" size="sm" onClick={() => setHomePrice(750000)}>
              $750k
            </Button>
            <Button variant="outline" size="sm" onClick={() => setHomePrice(1000000)}>
              $1M
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="downPayment">Down Payment</Label>
            <span className="font-medium">
              {formatCurrency(downPayment)} ({downPaymentPercent}%)
            </span>
          </div>
          <Slider
            id="downPaymentPercent"
            min={3}
            max={50}
            step={1}
            value={[downPaymentPercent]}
            onValueChange={(value) => setDownPaymentPercent(value[0])}
          />
          <div className="flex gap-2 mt-1">
            <Button variant="outline" size="sm" onClick={() => setDownPaymentPercent(3.5)}>
              3.5%
            </Button>
            <Button variant="outline" size="sm" onClick={() => setDownPaymentPercent(10)}>
              10%
            </Button>
            <Button variant="outline" size="sm" onClick={() => setDownPaymentPercent(20)}>
              20%
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanTerm">Loan Term</Label>
          <Tabs defaultValue="30" className="w-full" onValueChange={(value) => setLoanTerm(Number.parseInt(value))}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="15">15 Years</TabsTrigger>
              <TabsTrigger value="20">20 Years</TabsTrigger>
              <TabsTrigger value="30">30 Years</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {dataLoaded && (
        <>
          <Card className="bg-teal-50">
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Estimated Monthly Payment</h4>
                <p className="text-3xl font-bold text-teal-700">{formatCurrency(monthlyPayment)}</p>
                <p className="text-sm text-muted-foreground">Based on current rates in your area</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Principal & Interest
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-3 w-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Your loan payment based on {interestRate}% interest rate</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                  <span>
                    {formatCurrency(
                      ((homePrice - downPayment) *
                        (interestRate / 100 / 12) *
                        Math.pow(1 + interestRate / 100 / 12, loanTerm * 12)) /
                        (Math.pow(1 + interestRate / 100 / 12, loanTerm * 12) - 1),
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Property Taxes
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-3 w-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Based on local tax rates for {zipCode}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                  <span>{formatCurrency(propertyTax / 12)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Home Insurance
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-3 w-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Average insurance cost for your area</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                  <span>{formatCurrency(homeInsurance / 12)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h4 className="font-medium">Upfront Costs</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Down Payment</span>
                <span>{formatCurrency(downPayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-1">
                  Closing Costs
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Includes loan origination fees, appraisal, title insurance, and other closing costs</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
                <span>{formatCurrency(closingCosts)}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total Cash Needed</span>
                <span>{formatCurrency(downPayment + closingCosts)}</span>
              </div>
            </div>
          </div>
        </>
      )}

      {!dataLoaded && zipCode.length === 5 && (
        <div className="flex justify-center py-8">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      )}

      {!dataLoaded && zipCode.length !== 5 && (
        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
          <DollarSign className="h-12 w-12 mb-2 text-gray-300" />
          <p>Enter your ZIP code to see accurate cost estimates for your area</p>
        </div>
      )}
    </div>
  )
}
