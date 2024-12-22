"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TemperatureMonitor from "../components/temperature-monitor"
import HumidityMonitor from "../components/humidity-monitor"
import LightMonitor from "../components/light-monitor"
import WaterMonitor from "../components/water-monitor"
import ControlPanel from "../components/control-panel"
import AutoWateringSystem from "../components/auto-watering-system"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function GreenhouseDashboard() {
  const [temperature, setTemperature] = useState(22)
  const [humidity, setHumidity] = useState(60)
  const [lightIntensity, setLightIntensity] = useState(50)
  const [watering, setWatering] = useState(false)

  const handleControlUpdate = (updates) => {
    if ('temperature' in updates) setTemperature(updates.temperature)
    if ('humidity' in updates) setHumidity(updates.humidity)
    if ('lightIntensity' in updates) setLightIntensity(updates.lightIntensity)
    if ('watering' in updates) setWatering(updates.watering)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-green-800">Greenhouse Farming Dashboard</h1>
        </header>
        <Tabs defaultValue="temperature" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-green-200 rounded-xl p-1">
            <TabsTrigger value="temperature" className="data-[state=active]:bg-white rounded-lg transition-all">Temperature</TabsTrigger>
            <TabsTrigger value="humidity" className="data-[state=active]:bg-white rounded-lg transition-all">Humidity</TabsTrigger>
            <TabsTrigger value="light" className="data-[state=active]:bg-white rounded-lg transition-all">Light</TabsTrigger>
            <TabsTrigger value="water" className="data-[state=active]:bg-white rounded-lg transition-all">Water</TabsTrigger>
            <TabsTrigger value="auto-watering" className="data-[state=active]:bg-white rounded-lg transition-all">Auto-Watering</TabsTrigger>
          </TabsList>
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <TabsContent value="temperature">
              <TemperatureMonitor currentTemperature={temperature} />
            </TabsContent>
            <TabsContent value="humidity">
              <HumidityMonitor currentHumidity={humidity} />
            </TabsContent>
            <TabsContent value="light">
              <LightMonitor currentLightIntensity={lightIntensity} />
            </TabsContent>
            <TabsContent value="water">
              <WaterMonitor wateringActive={watering} />
            </TabsContent>
            <TabsContent value="auto-watering">
              <AutoWateringSystem />
            </TabsContent>
          </div>
        </Tabs>
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <ControlPanel onUpdate={handleControlUpdate} />
        </div>
      </div>
    </div>
  )
}

