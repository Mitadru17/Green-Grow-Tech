"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, Droplet } from 'lucide-react'

export default function ControlPanel({ onUpdate }) {
  const [temperature, setTemperature] = useState(22)
  const [humidity, setHumidity] = useState(60)
  const [lightIntensity, setLightIntensity] = useState(50)
  const [watering, setWatering] = useState(false)
  const [waterUsage, setWaterUsage] = useState(0)

  const handleUpdate = (key, value) => {
    if (key === 'temperature') setTemperature(value);
    if (key === 'humidity') setHumidity(value);
    if (key === 'lightIntensity') setLightIntensity(value);
    if (key === 'watering') setWatering(value);
    onUpdate({ [key]: value });
  }

  useEffect(() => {
    let timer;
    if (watering) {
      timer = setInterval(() => {
        setWaterUsage(prevUsage => prevUsage + 0.1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [watering]);

  return (
    <Card className="mt-4 bg-gradient-to-br from-green-100 to-teal-100">
      <CardHeader>
        <CardTitle className="flex items-center text-green-800">
          <Settings className="w-6 h-6 mr-2" />
          Control Panel
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="temperature" className="text-green-800">Temperature (°C): {temperature}</Label>
            <Slider
              id="temperature"
              min={15}
              max={35}
              step={1}
              value={[temperature]}
              onValueChange={(value) => handleUpdate('temperature', value[0])}
              className="[&_[role=slider]]:bg-green-600"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="humidity" className="text-green-800">Humidity (%): {humidity}</Label>
            <Slider
              id="humidity"
              min={30}
              max={90}
              step={1}
              value={[humidity]}
              onValueChange={(value) => handleUpdate('humidity', value[0])}
              className="[&_[role=slider]]:bg-green-600"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="light" className="text-green-800">Light Intensity (%): {lightIntensity}</Label>
            <Slider
              id="light"
              min={0}
              max={100}
              step={1}
              value={[lightIntensity]}
              onValueChange={(value) => handleUpdate('lightIntensity', value[0])}
              className="[&_[role=slider]]:bg-green-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="watering"
                checked={watering}
                onCheckedChange={(value) => handleUpdate('watering', value)}
                className="bg-green-600"
              />
              <Label htmlFor="watering" className="text-green-800">Watering System</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Droplet className="w-5 h-5 text-blue-600" />
              <span className="text-green-800 font-medium">
                Water Usage: {waterUsage.toFixed(1)} L
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

