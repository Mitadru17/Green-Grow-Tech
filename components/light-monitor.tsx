"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LightMonitor({ currentLightIntensity }) {
  const [data, setData] = useState([
    { time: '00:00', light: 0 },
    { time: '04:00', light: 0 },
    { time: '08:00', light: 500 },
    { time: '12:00', light: 1000 },
    { time: '16:00', light: 700 },
    { time: '20:00', light: 200 },
  ])

  useEffect(() => {
    const now = new Date()
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0')
    setData(prevData => [...prevData.slice(-5), { time, light: currentLightIntensity * 10 }])
  }, [currentLightIntensity])

  return (
    <Card className="bg-gradient-to-br from-yellow-100 to-orange-100">
      <CardHeader>
        <CardTitle className="flex items-center text-yellow-800">
          <Sun className="w-6 h-6 mr-2" />
          Light Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="time" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #999' }} />
              <Area type="monotone" dataKey="light" stroke="#FFB300" fill="#FFD54F" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

