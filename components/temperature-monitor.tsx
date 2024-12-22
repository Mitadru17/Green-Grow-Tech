"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TemperatureMonitor({ currentTemperature }) {
  const [data, setData] = useState([
    { time: '00:00', temperature: 22 },
    { time: '04:00', temperature: 20 },
    { time: '08:00', temperature: 25 },
    { time: '12:00', temperature: 28 },
    { time: '16:00', temperature: 26 },
    { time: '20:00', temperature: 23 },
  ])

  useEffect(() => {
    const now = new Date()
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0')
    setData(prevData => [...prevData.slice(-5), { time, temperature: currentTemperature }])
  }, [currentTemperature])

  return (
    <Card className="bg-gradient-to-br from-orange-100 to-red-100">
      <CardHeader>
        <CardTitle className="flex items-center text-orange-800">
          <Sun className="w-6 h-6 mr-2" />
          Temperature Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="time" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #999' }} />
              <Line type="monotone" dataKey="temperature" stroke="#ff7300" strokeWidth={2} dot={{ fill: '#ff7300' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

