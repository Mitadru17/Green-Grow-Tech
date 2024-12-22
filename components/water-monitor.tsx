"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Droplet } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WaterMonitor({ wateringActive }) {
  const [data, setData] = useState([
    { day: 'Mon', usage: 300 },
    { day: 'Tue', usage: 280 },
    { day: 'Wed', usage: 310 },
    { day: 'Thu', usage: 290 },
    { day: 'Fri', usage: 305 },
    { day: 'Sat', usage: 270 },
    { day: 'Sun', usage: 260 },
  ])

  useEffect(() => {
    if (wateringActive) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const today = days[new Date().getDay()]
      setData(prevData => 
        prevData.map(item => 
          item.day === today ? { ...item, usage: item.usage + 10 } : item
        )
      )
    }
  }, [wateringActive])

  return (
    <Card className="bg-gradient-to-br from-blue-100 to-indigo-100">
      <CardHeader>
        <CardTitle className="flex items-center text-blue-800">
          <Droplet className="w-6 h-6 mr-2" />
          Water Usage Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="day" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #999' }} />
              <Bar dataKey="usage" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

