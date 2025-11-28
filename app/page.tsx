"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Award, Target, BarChart2, Heart, Zap, CheckCircle, Users, Sparkles } from "lucide-react"
import CharacterViewer from "@/components/character-viewer"
import ReflectionReminder from "@/components/reflection-reminder"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Achievements",
      description: "Unlock badges and rewards as you hit your fitness and personal development milestones."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Tracking",
      description: "Set, track, and achieve your fitness goals with our intuitive progress tracking system."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Analytics",
      description: "Gain insights into your progress with detailed analytics and performance metrics."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Wellness Focus",
      description: "Track your mental and physical wellbeing with our comprehensive health monitoring tools."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Daily Challenges",
      description: "Stay motivated with personalized daily challenges tailored to your fitness level."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Connect with like-minded individuals and share your fitness journey."
    }
  ]

  const testimonials = [
    {
      quote: "This app completely transformed my fitness routine. The gamification elements keep me motivated!"
    },
    {
      quote: "I've never been able to stick to a workout plan before. The daily challenges make it fun and engaging."
    },
    {
      quote: "The progress tracking is amazing. Seeing my stats improve over time is incredibly rewarding."
    }
  ]

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                  Level Up Your <span className="block">Fitness Journey</span>
                </h1>
                <p className="text-lg text-gray-600 md:text-xl max-w-2xl">
                  Transform your fitness and personal development into an epic adventure. 
                  Set goals, complete challenges, and watch yourself level up in real life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full bg-white border-2 border-white shadow-md overflow-hidden">
                        <div className="w-full h-full bg-gray-200"></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-purple-600">10,000+</span> users already leveling up
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm border border-white/20 shadow-2xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50">
                  <CharacterViewer character="cyberpunk" level={5} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm font-medium">Active Now</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">Your Character</h3>
                    <p className="text-sm text-gray-300">Level 5 • 250 XP to next level</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-yellow-800" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            </div>
            
            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '50K+', label: 'Workouts' },
                { value: '95%', label: 'Success Rate' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Personal Development, Gamified</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Combine fitness, education, and personal growth in one platform with game-like progression and
                  rewards.
                </p>
              </div>
            </div>
            <style jsx>{`
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
`}</style>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  ),
                  title: "Character Selection",
                  description:
                    "Choose from BGMI, Cyberpunk, Doodle, or Solo Leveling inspired characters to represent your journey.",
                  delay: "0s",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  ),
                  title: "Personalized Plans",
                  description:
                    "Get customized schedules for JEE, UPSC, NEET, coding, fitness, and more based on your skill level.",
                  delay: "0.2s",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  ),
                  title: "Level Up System",
                  description:
                    "Earn XP by completing daily tasks and watch your character evolve as you progress in real life.",
                  delay: "0.4s",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center space-y-4 float-animation"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-purple-50 to-transparent -z-10"></div>
          
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Your Personal Development, <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Gamified</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Combine fitness, education, and personal growth in one platform with game-like progression and rewards that keep you motivated.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 flex items-center justify-center mb-4 group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Users Say</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"></div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <div className="h-3 bg-gray-200 rounded-full w-24 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded-full w-16"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of users who are already leveling up their fitness and personal development journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-8 py-6 text-lg"
                  >
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-purple-100">
                <CheckCircle className="h-5 w-5" />
                <span>No credit card required • 7-day free trial</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Multiple Development Paths */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Multiple Development Paths</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                    Choose from various fields and combine them to create your unique development journey.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Academic Preparation (JEE, UPSC, NEET)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fitness & Physical Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Coding & Technical Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Mental Health & Mindfulness</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 rounded-lg bg-gradient-to-r from-purple-200 to-purple-300 flex items-center justify-center">
                    <span className="font-medium text-purple-800">JEE</span>
                  </div>
                  <div className="h-40 rounded-lg bg-gradient-to-r from-pink-200 to-pink-300 flex items-center justify-center">
                    <span className="font-medium text-pink-800">UPSC</span>
                  </div>
                  <div className="h-40 rounded-lg bg-gradient-to-r from-blue-200 to-blue-300 flex items-center justify-center">
                    <span className="font-medium text-blue-800">Fitness</span>
                  </div>
                  <div className="h-40 rounded-lg bg-gradient-to-r from-green-200 to-green-300 flex items-center justify-center">
                    <span className="font-medium text-green-800">Coding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <p className="text-center text-sm text-gray-500 md:text-left"> 2025 Fitness Quest. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline" href="#">
                Terms
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Privacy
              </Link>
              <Link className="text-sm font-medium hover:underline" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <ReflectionReminder />
    </div>
  )
}
