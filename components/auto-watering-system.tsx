"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Droplet, Clock } from 'lucide-react'

export default function AutoWateringSystem() {
  const [isAutoWateringOn, setIsAutoWateringOn] = useState(false)
  const [wateringFrequency, setWateringFrequency] = useState(12)
  const [wateringDuration, setWateringDuration] = useState(5)
  const [timeUntilNextWatering, setTimeUntilNextWatering] = useState(12 * 60 * 60)

  useEffect(() => {
    let timer
    if (isAutoWateringOn) {
      timer = setInterval(() => {
        setTimeUntilNextWatering((prevTime) => {
          if (prevTime <= 0) {
            // Trigger watering here
            return wateringFrequency * 60 * 60
          }
          return prevTime - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isAutoWateringOn, wateringFrequency])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }

  return (
    <Card className="bg-gradient-to-br from-blue-100 to-green-100">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-800">
          <Droplet className="w-6 h-6 mr-2" />
          Auto-Watering System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-watering"
              checked={isAutoWateringOn}
              onCheckedChange={setIsAutoWateringOn}
            />
            <Label htmlFor="auto-watering" className="text-green-800">Enable Auto-Watering</Label>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="watering-frequency" className="text-green-800">Watering Frequency (hours): {wateringFrequency}</Label>
            <Slider
              id="watering-frequency"
              min={1}
              max={24}
              step={1}
              value={[wateringFrequency]}
              onValueChange={(value) => setWateringFrequency(value[0])}
              className="[&_[role=slider]]:bg-blue-600"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="watering-duration" className="text-green-800">Watering Duration (minutes): {wateringDuration}</Label>
            <Slider
              id="watering-duration"
              min={1}
              max={30}
              step={1}
              value={[wateringDuration]}
              onValueChange={(value) => setWateringDuration(value[0])}
              className="[&_[role=slider]]:bg-blue-600"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-green-800">Time until next watering: {formatTime(timeUntilNextWatering)}</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Watering Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

