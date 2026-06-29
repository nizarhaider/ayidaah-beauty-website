'use client'

import { useState } from 'react'
import { Heart, MapPin, Phone, Mail, Instagram, Star, Truck } from 'lucide-react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const WHATSAPP_NUMBER = '94771679595'
const DISPLAY_PHONE = '+94 77 167 9595'

const products = [
  {
    id: '1',
    name: 'Classic Gel Manicure',
    price: 'Rs. 2,500',
    category: 'Nail Service',
    rating: 5,
    reviews: 9,
    image: '/nail-art-1.jpg'
  },
  {
    id: '2',
    name: 'Premium Nail Art Design',
    price: 'Rs. 3,500',
    category: 'Nail Art',
    rating: 5,
    reviews: 9,
    image: '/nail-art-2.jpg'
  },
  {
    id: '3',
    name: 'Ombre Gradient Design',
    price: 'Rs. 3,000',
    category: 'Nail Art',
    rating: 5,
    reviews: 9,
    image: '/nail-art-3.jpg'
  },
  {
    id: '4',
    name: 'Chrome & Glitter Nails',
    price: 'Rs. 3,800',
    category: 'Premium Art',
    rating: 5,
    reviews: 9,
    image: '/nail-art-4.jpg'
  },
  {
    id: '5',
    name: 'Bridal Nail Package',
    price: 'Rs. 5,500',
    category: 'Special Service',
    rating: 5,
    reviews: 9,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop'
  },
  {
    id: '6',
    name: 'Pedicure & Nail Care',
    price: 'Rs. 2,800',
    category: 'Nail Service',
    rating: 5,
    reviews: 9,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop'
  }
]

const reviews = [
  {
    name: 'Hashanee Lahirumalee',
    meta: '8 reviews · 3 photos',
    date: '5 months ago',
    text: 'I got these gorgeous nails done from Nails by Ayidaah, in under 15 minutes, yes it was that fast and the nails stayed on solid. My friends and family thought they my actual nails.'
  },
  {
    name: 'Kanishka Balasuriya',
    meta: '4 reviews · 14 photos',
    date: '8 months ago',
    text: 'Highly recommended❤️ I saw this place from TikTok and this was my very first time using press on.'
  },
  {
    name: 'G Kaushani',
    meta: '3 reviews · 1 photo',
    date: '5 months ago',
    text: 'Friendly staff and a lovely place... love it😍😍😍😍'
  },
  {
    name: 'Sashini Manamperi',
    meta: '3 reviews · 2 photos',
    date: '5 months ago',
    text: 'Great service',
    response: 'Thank you 😊'
  },
  {
    name: 'Sarah Ashfaq',
    meta: '2 reviews',
    date: '4 days ago',
    text: 'I went there today and loved it soo muchh!! The nails turned out soooo prettyy and the customer service was sooo goood!! They were soo friendly and kind.. loved it soo much!! Highly recommended!! Definitely going back again 🤭🫶🏻'
  },
  {
    name: 'Mihini Fernando',
    meta: '1 review · 3 photos',
    date: '4 days ago',
    text: 'Absolutely obsessed with the nails! The attention to detail, cleanliness, and professionalism were all top-tier. The staff was so friendly and made the whole experience relaxing and enjoyable. Highly recommend this place if you want quality work and amazing service! 💅✨',
    response: 'Thank you for your honesty!'
  },
  {
    name: 'WASSU JAY',
    meta: '4 reviews · 5 photos',
    date: 'a week ago',
    text: 'Love their products and the friendly service. Highly recommended. All the best to ayidaah and the team. Keep up.',
    response: 'Thank you so much for your honesty!'
  },
  {
    name: 'Vidasi Perera',
    meta: '3 reviews · 1 photo',
    date: 'a week ago',
    text: 'Highly recommended.'
  }
]

export default function Page() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi! I'm interested in ${productName}. Can you provide more details?`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
            <h1 className="text-lg font-bold text-primary sm:text-xl">Ayidaah Beauty</h1>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#featured" className="text-sm font-medium hover:text-primary transition">Products</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition">About</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition">Contact</a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">Shop Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 py-12 sm:min-h-[calc(100svh-4rem)] sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="mx-auto max-w-xl space-y-5 text-center sm:mx-0 sm:space-y-8 sm:text-left">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:mb-4 sm:text-sm sm:normal-case sm:tracking-normal">Nails by Ayidaah</p>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-balance sm:mb-5 sm:text-5xl lg:text-6xl">
                  Beauty, <span className="text-primary">perfectly crafted</span>
                </h2>
                <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-gray-600 sm:mx-0 sm:mb-7 sm:max-w-xl sm:text-lg">
                  <span className="sm:hidden">Premium press-on nails and beauty services in Rajagiriya.</span>
                  <span className="hidden sm:inline">Discover our curated collection of premium beauty products designed to enhance your natural glow. From nail art to lipsticks, find everything you need at our Rajagiriya store.</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white sm:w-auto" asChild>
                  <a href="#featured">
                  Explore Collection
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="hidden border-primary text-primary hover:bg-primary/10 sm:inline-flex" asChild>
                  <a href="#contact">
                  Visit Store
                  </a>
                </Button>
              </div>
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm sm:hidden">
                <Star size={15} className="fill-yellow-400 text-yellow-400" />
                <span>4.8 Google rating · Rajagiriya</span>
              </div>
              <div className="hidden gap-6 pt-2 sm:flex sm:gap-8 sm:pt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">4.8</p>
                  <p className="text-sm text-gray-600">Google Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">15 min</p>
                  <p className="text-sm text-gray-600">Fast Sets</p>
                </div>
              </div>
            </div>
            <div className="relative hidden sm:block">
              <div className="relative h-[340px] overflow-hidden rounded-xl sm:h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_kzcllckzcllckzcl-tAr7RLjl6DNyFhnPjzsFDESDnl51jd.png"
                  alt="Ayidaah Lip Liner - Before and After Results"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-12 bg-primary/5 border-y border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Truck className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Fast Delivery</p>
                <p className="text-sm text-gray-600">Available Now</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-secondary" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/uber-logo.png"
                  alt="Uber Eats"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">Uber Eats</p>
                <p className="text-sm text-gray-600">Order & Deliver</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-secondary" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/pickme-logo.png"
                  alt="PickMe Food"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">PickMe Food</p>
                <p className="text-sm text-gray-600">Easy Ordering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Our Collection</p>
            <h3 className="mb-4 text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">Featured Products</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked beauty essentials to elevate your routine and showcase your best self.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden bg-secondary/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                    aria-label={favorites[product.id] ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart
                      size={20}
                      className={favorites[product.id] ? 'fill-primary text-primary' : 'text-gray-400'}
                    />
                  </button>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h4 className="text-base font-semibold text-foreground sm:text-lg">{product.name}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex flex-col gap-3 border-t border-secondary pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-bold text-lg text-primary">{product.price}</span>
                    <Button 
                      size="sm" 
                      className="w-full bg-primary hover:bg-primary/90 sm:w-auto"
                      onClick={() => handleWhatsAppInquiry(product.name)}
                    >
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to see all Ayidaah products.")}`} target="_blank" rel="noopener noreferrer">
              View All Products
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Customer Love</p>
            <h3 className="mb-4 text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">NAILS BY AYIDAAH Reviews</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              4.8 rating from real Google reviews for our Rajagiriya location.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <Card key={review.name} className="flex h-full flex-col p-5 transition-shadow hover:shadow-lg sm:p-6">
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                  &quot;{review.text}&quot;
                </p>
                {review.response && (
                  <div className="mb-5 rounded-lg bg-primary/5 p-3 text-sm text-gray-600">
                    <span className="font-semibold text-primary">Owner response:</span> {review.response}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <span className="font-bold text-primary">{review.name.charAt(0)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.meta}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Our Portfolio</p>
            <h3 className="mb-4 text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">Nail Art Masterpieces</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest and most stunning nail art designs. Every design is a unique creation tailored to our clients&apos; preferences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['/nail-art-1.jpg', '/nail-art-2.jpg', '/nail-art-3.jpg', '/nail-art-4.jpg'].map((image, index) => (
              <div key={index} className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img
                  src={image}
                  alt={`Nail art design ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-primary text-white px-6 py-2 rounded-full transition-opacity hover:bg-primary/90">
                    View Design
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative h-[340px] overflow-hidden rounded-xl shadow-lg sm:h-96 lg:h-[450px]">
              <img
                src="ayidaah-team.jpeg"
                alt="Ayidaah Beauty Founder with Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">About Us</p>
                <h3 className="mb-4 text-3xl font-bold text-balance sm:text-4xl">Your Beauty, Our Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ayidaah Beauty is your trusted destination for premium beauty and nail art services. Located in the heart of Rajagiriya, Sri Lanka, we&apos;re dedicated to bringing you the finest selection of cosmetics, skincare, and professional nail design services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for beauty and self-expression, we carefully curate each product and service to ensure quality, authenticity, and exceptional results. Our expert team is always ready to help you discover the perfect look for any occasion.
              </p>
              <div className="grid gap-5 pt-4 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">100% authentic products from trusted brands</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Expert Service</h4>
                  <p className="text-sm text-gray-600">Professional nail art and beauty advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Get In Touch</p>
            <h3 className="mb-4 text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">Visit Us Today</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl mb-6">Contact Information</h4>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Visit Our Store</h5>
                      <p className="text-gray-600">Rajagiriya, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Call Us</h5>
                      <p className="text-gray-600">{DISPLAY_PHONE}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Email Us</h5>
                      <p className="text-gray-600">hello@ayidaahbeauty.lk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/ayidaah_beauty" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 space-y-6">
              <h4 className="font-bold text-xl">Send us a Message</h4>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to contact Ayidaah Beauty.")}`} target="_blank" rel="noopener noreferrer">
                  Send Message
                  </a>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground pb-28 pt-12 text-white sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Ayidaah Beauty</h3>
              <p className="text-sm text-gray-300">Premium beauty products for the modern you.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Shop</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition">Skincare</a></li>
                <li><a href="#" className="hover:text-primary transition">Makeup</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Ayidaah Beauty. All rights reserved. Rajagiriya, Sri Lanka</p>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp
        phoneNumber={WHATSAPP_NUMBER}
        accountName="Ayidaah Beauty"
        avatar="/ayidaah-logo.png"
        statusMessage="Usually replies quickly"
        chatMessage="Hi! How can we help with your nails today?"
        placeholder="Type your message..."
        notification
        notificationDelay={8000}
        allowEsc
      />
    </main>
  )
}
