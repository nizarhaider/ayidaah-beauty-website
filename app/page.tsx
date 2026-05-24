'use client'

import { useState } from 'react'
import { Heart, MapPin, Phone, Mail, Instagram, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Page() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const products = [
    {
      id: '1',
      name: 'Classic Gel Manicure',
      price: 'Rs. 2,500',
      category: 'Nail Service',
      rating: 4.9,
      reviews: 187,
      image: '/nail-art-1.jpg'
    },
    {
      id: '2',
      name: 'Premium Nail Art Design',
      price: 'Rs. 3,500',
      category: 'Nail Art',
      rating: 4.9,
      reviews: 142,
      image: '/nail-art-2.jpg'
    },
    {
      id: '3',
      name: 'Ombre Gradient Design',
      price: 'Rs. 3,000',
      category: 'Nail Art',
      rating: 4.8,
      reviews: 156,
      image: '/nail-art-3.jpg'
    },
    {
      id: '4',
      name: 'Chrome & Glitter Nails',
      price: 'Rs. 3,800',
      category: 'Premium Art',
      rating: 4.9,
      reviews: 203,
      image: '/nail-art-4.jpg'
    },
    {
      id: '5',
      name: 'Bridal Nail Package',
      price: 'Rs. 5,500',
      category: 'Special Service',
      rating: 4.9,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop'
    },
    {
      id: '6',
      name: 'Pedicure & Nail Care',
      price: 'Rs. 2,800',
      category: 'Nail Service',
      rating: 4.8,
      reviews: 172,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop'
    }
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h1 className="text-xl font-bold text-primary">Ayidaah Beauty</h1>
            </div>
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
      <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-primary mb-4">Welcome to Ayidaah Beauty</p>
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                  Radiant Beauty, <span className="text-primary">Perfectly Crafted</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Discover our curated collection of premium beauty products designed to enhance your natural glow. From skincare to makeup, find everything you need at our Rajagiriya store.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Explore Collection
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Visit Store
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Products</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <img
                  src="https://images.unsplash.com/photo-1607748328020-23404e976ac3?w=600&h=700&fit=crop"
                  alt="Beauty Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Our Collection</p>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Featured Products</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked beauty essentials to elevate your routine and showcase your best self.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h4 className="font-semibold text-lg text-foreground">{product.name}</h4>
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
                  <div className="flex justify-between items-center pt-2 border-t border-secondary">
                    <span className="font-bold text-lg text-primary">{product.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Customer Love</p>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who&apos;ve transformed their beauty routine with Ayidaah Beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;The quality of products is exceptional! I&apos;ve been a regular customer for over a year and I&apos;m always impressed with the selection and the staff&apos;s knowledge.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">N</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Nishanthi De Silva</p>
                  <p className="text-sm text-gray-500">Colombo, Sri Lanka</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;Ayidaah Beauty transformed my beauty routine completely. Their personalized recommendations were spot-on for my skin type. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Malini Kapoor</p>
                  <p className="text-sm text-gray-500">Rajagiriya, Sri Lanka</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                &quot;The nail art services are incredible! Every visit I leave feeling like a queen. The attention to detail is unmatched. Worth every rupee!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Amira Jayasena</p>
                  <p className="text-sm text-gray-500">Mount Lavinia, Sri Lanka</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Our Portfolio</p>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Nail Art Masterpieces</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest and most stunning nail art designs. Every design is a unique creation tailored to our clients&apos; preferences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571875285368-40aac642fa5d?w=600&h=700&fit=crop"
                alt="Ayidaah Beauty Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">About Us</p>
                <h3 className="text-4xl font-bold mb-4 text-balance">Your Beauty, Our Passion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ayidaah Beauty is your trusted destination for premium beauty and skincare products. Located in the heart of Rajagiriya, Sri Lanka, we&apos;re dedicated to bringing you the finest selection of cosmetics and skincare essentials.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of expertise, we carefully curate each product to ensure quality, authenticity, and effectiveness. Our knowledgeable team is always ready to help you find the perfect products for your unique beauty needs.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">100% authentic products from trusted brands</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Expert Support</h4>
                  <p className="text-sm text-gray-600">Personalized beauty advice from professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-2">Get In Touch</p>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Visit Us Today</h3>
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
                      <p className="text-gray-600">+94 (0) 123 456 789</p>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="font-bold">Ayidaah Beauty</span>
              </div>
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
    </main>
  )
}
