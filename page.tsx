import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Droplet, Sun, Wind, BarChart, Users } from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">GreenGrow Tech</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button
            className="text-sm font-medium hover:text-green-600 transition-colors"
            onClick={() => handleScroll('features')}
          >
            Features
          </button>
          <button
            className="text-sm font-medium hover:text-green-600 transition-colors"
            onClick={() => handleScroll('contact')}
          >
            Contact
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-400 via-green-500 to-green-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="space-y-4 text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl text-white">
                  Grow Smarter with GreenGrow Tech
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[700px] text-lg text-green-100 md:text-xl">
                  Revolutionize your greenhouse farming with AI-powered technology and data-driven insights.
                </p>
                <div className="space-x-4 flex items-center">
                  <Link href="/dashboard">
                    <Button className="bg-white text-green-600 hover:bg-green-50">
                      Start Growing Smarter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <button
                    className="bg-white text-green-600 hover:bg-green-50 flex items-center justify-center px-6 py-2 rounded-full font-medium text-sm transition-colors duration-200 ease-in-out"
                    onClick={() => handleScroll('features')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/mnt/data/A_realistic_image_of_a_basic_greenhouse_farming_pr.png"
                  width={600}
                  height={400}
                  alt="Smart Greenhouse"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">
              Cutting-Edge Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 bg-green-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                <Droplet className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold text-green-800">Smart Irrigation</h3>
                <p className="text-sm text-gray-600 text-center">
                  Optimize water usage with AI-driven irrigation systems that adapt to your crops' needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-green-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                <Sun className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-green-800">Adaptive Lighting</h3>
                <p className="text-sm text-gray-600 text-center">
                  Maximize growth with intelligent LED solutions that mimic natural sunlight patterns.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-green-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                <Wind className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold text-green-800">Climate Control</h3>
                <p className="text-sm text-gray-600 text-center">
                  Maintain optimal growing conditions year-round with precise temperature and humidity management.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-green-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                <Leaf className="h-12 w-12 text-green-700" />
                <h3 className="text-xl font-bold text-green-800">Crop Monitoring</h3>
                <p className="text-sm text-gray-600 text-center">
                  Track plant health and growth in real-time with advanced sensors and imaging technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-green-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                <BarChart className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold text-green-800">Data Analytics</h3>
                <p className="text-sm text-gray-600 text-center">
                  Gain actionable insights from comprehensive data analysis to optimize your farming strategies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-green-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                <Users className="h-12 w-12 text-indigo-500" />
                <h3 className="text-xl font-bold text-green-800">Expert Support</h3>
                <p className="text-sm text-gray-600 text-center">
                  Access our team of agricultural experts for personalized guidance and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-400 via-green-500 to-green-600">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-white">
              Get in Touch
            </h2>
            <div className="mx-auto max-w-[600px] bg-white p-8 rounded-xl shadow-2xl">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800">Name</label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-green-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-green-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-800">Message</label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-green-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 GreenGrow Tech. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

