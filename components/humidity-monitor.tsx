"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Droplet } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HumidityMonitor({ currentHumidity }) {
  const [data, setData] = useState([
    { time: '00:00', humidity: 60 },
    { time: '04:00', humidity: 65 },
    { time: '08:00', humidity: 70 },
    { time: '12:00', humidity: 68 },
    { time: '16:00', humidity: 62 },
    { time: '20:00', humidity: 58 },
  ])

  useEffect(() => {
    const now = new Date()
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0')
    setData(prevData => [...prevData.slice(-5), { time, humidity: currentHumidity }])
  }, [currentHumidity])

  return (
    <Card className="bg-gradient-to-br from-blue-100 to-cyan-100">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-800">
          <Droplet className="w-6 h-6 mr-2" />
          Humidity Monitor
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
              <Line type="monotone" dataKey="humidity" stroke="#0088FE" strokeWidth={2} dot={{ fill: '#0088FE' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

