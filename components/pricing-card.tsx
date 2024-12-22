import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export default function PricingCard({ title, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-green-500 shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-4xl font-bold mb-2">{price}</div>
        <p className="text-gray-500 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${highlighted ? 'bg-green-600 hover:bg-green-700' : ''}`}>
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  )
}

