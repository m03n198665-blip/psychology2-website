'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Brain, Heart, Users, Activity, ChevronRight, Star, Calendar, Phone, Mail, MapPin } from 'lucide-react'

export default function PsychologyWebsite() {
  const [showBooking, setShowBooking] = useState(false)

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'مشاوره فردی',
      description: 'کمک به شما برای شناخت بهتر خود و حل مشکلات شخصی',
      features: ['اضطراب و استرس', 'افسردگی', 'خودشناسی', 'مدیریت خشم']
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: 'مشاوره زوج‌درمانی',
      description: 'بهبود روابط عاطفی و حل تعارضات زناشویی',
      features: ['ارتباط موثر', 'حل تعارض', 'اعتمادسازی', 'صمیمیت']
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'مشاوره خانواده',
      description: 'تقویت روابط خانوادگی و حل مشکلات بین نسلی',
      features: ['فرزندپروری', 'مشکل نوجوانان', 'تعارضات خانوادگی', 'طلاق']
    },
    {
      icon: <Activity className="w-8 h-8 text-green-600" />,
      title: 'ترک اعتیاد',
      description: 'برنامه درمانی جامع برای ترک مواد مخدر و الکل',
      features: ['سم‌زدایی', 'درمان دارویی', 'روان‌درمانی', 'بعد از درمان']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Brain className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">روانشناسان</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">خدمات</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">تماس</a>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => setShowBooking(true)}
              >
                رزرو نوبت
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                سلامت روان شما، اولویت ماست
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                به سوی زندگی شادتر و سالم‌تر
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                با کمک متخصصان مجرب، به شناخت بهتر خود بپردازید و چالش‌های زندگی را با آگاهی بیشتری مدیریت کنید.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setShowBooking(true)}
                >
                  شروع مشاوره
                  <ChevronRight className="w-5 h-5 mr-2" />
                </Button>
                <Button size="lg" variant="outline">
                  تماس با ما
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5000+</div>
                  <div className="text-gray-600">مراجعین راضی</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15+</div>
                  <div className="text-gray-600">متخصص مجرب</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600">رضایت مندی</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <Brain className="w-32 h-32 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات ما</h2>
            <p className="text-xl text-gray-600">
              خدمات جامع روانشناسی برای بهبود کیفیت زندگی شما
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 ml-2 text-purple-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">تماس با ما</h2>
            <p className="text-xl text-gray-600">
              آماده پاسخگویی به سوالات شما هستیم
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>تلفن</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">021-12345678</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>ایمیل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@psychology.ir</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <CardTitle>آدرس</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">تهران، خیابان ولیعصر</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">روانشناسان</span>
          </div>
          <p className="text-gray-400">
            © 2024 روانشناسان. تمام حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </div>
  )
}
