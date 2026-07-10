'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Instagram,
  Menu,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react'

const WHATSAPP_NUMBER = '94771679595'
const DELIVERY_FEE = 499

type Category = 'Nails' | 'Lashes' | 'Tints'

type Product = {
  id: string
  name: string
  price: number | null
  category: Category
  label?: string
  description: string
  image: string
}

const products: Product[] = [
  {
    id: 'coffin-nude-lux',
    name: 'Coffin Nude Lux',
    price: 2500,
    category: 'Nails',
    label: 'BEST SELLER',
    description: '15-piece press-on set · ready to wear',
    image: '/products/coffin-nude-lux.jpeg',
  },
  {
    id: 'mini-almond-french',
    name: 'Mini Almond Pink French',
    price: 3500,
    category: 'Nails',
    label: 'NEW',
    description: '15-piece press-on set · petite almond',
    image: '/products/mini-almond-pink-french-tip.jpeg',
  },
  {
    id: 'colombo-chic',
    name: 'Colombo Chic Lashes',
    price: null,
    category: 'Lashes',
    label: 'BEST SELLER',
    description: 'Soft volume · reusable lash pair',
    image: '/products/colombo-chic-lashes.jpeg',
  },
  {
    id: 'ceylon-goddess',
    name: 'Ceylon Goddess Lashes',
    price: null,
    category: 'Lashes',
    description: 'Full glamour · reusable lash pair',
    image: '/products/ceylon-goddess-lashes.jpeg',
  },
  {
    id: 'island-queen',
    name: 'Island Queen Lashes',
    price: null,
    category: 'Lashes',
    description: 'Wispy volume · reusable lash pair',
    image: '/products/island-queen-lashes.jpeg',
  },
  {
    id: 'lankan-empress',
    name: 'Lankan Empress Lashes',
    price: null,
    category: 'Lashes',
    description: 'Lightweight drama · reusable lash pair',
    image: '/products/lankan-empress-lashes.jpeg',
  },
  {
    id: 'universal-tint',
    name: 'Brown Universal Colour Tint',
    price: null,
    category: 'Tints',
    label: 'AYIDAAH PICK',
    description: 'Buildable colour · ask us for available shades',
    image: '/products/brown-universal-colour-tint-packaging.jpeg',
  },
]

const categories = [
  {
    name: 'Press-on nails',
    note: 'Your salon set in minutes',
    image: '/nail-art-1.jpg',
    target: 'Nails' as Category,
  },
  {
    name: 'Lashes',
    note: 'Made for every kind of gaze',
    image: '/products/colombo-chic-lashes.jpeg',
    target: 'Lashes' as Category,
  },
  {
    name: 'Colour tints',
    note: 'One tint, endless looks',
    image: '/products/brown-universal-colour-tint.jpeg',
    target: 'Tints' as Category,
  },
]

const money = (value: number) => `Rs. ${value.toLocaleString('en-LK')}`

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All')
  const [cart, setCart] = useState<Record<string, number>>({})
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [toast, setToast] = useState('')

  const shownProducts = useMemo(() => {
    const pool = activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory)
    if (!query.trim()) return pool
    const search = query.toLowerCase()
    return pool.filter((product) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(search))
  }, [activeCategory, query])

  const searchMatches = useMemo(() => {
    const search = query.trim().toLowerCase()
    if (!search) return []
    return products.filter((product) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(search))
  }, [query])

  const cartItems = products.filter((product) => cart[product.id])
  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  const subtotal = cartItems.reduce((total, product) => total + (product.price ?? 0) * cart[product.id], 0)
  const hasQuoteItem = cartItems.some((product) => product.price === null)

  const announce = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2200)
  }

  const addToBag = (product: Product) => {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] ?? 0) + 1 }))
    announce(`${product.name} added to your bag`)
  }

  const updateQuantity = (id: string, change: number) => {
    setCart((current) => {
      const next = Math.max(0, (current[id] ?? 0) + change)
      const updated = { ...current, [id]: next }
      if (!next) delete updated[id]
      return updated
    })
  }

  const shopCategory = (category: Category) => {
    setActiveCategory(category)
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  const checkout = () => {
    const lines = cartItems.map((product) => `• ${product.name} × ${cart[product.id]} — ${product.price ? money(product.price * cart[product.id]) : 'please confirm price'}`)
    const message = [
      'Hi Ayidaah Beauty! I would like to place this order:',
      '',
      ...lines,
      '',
      subtotal ? `Product subtotal: ${money(subtotal)}` : '',
      `Islandwide delivery: ${money(DELIVERY_FEE)}`,
      hasQuoteItem ? 'Please confirm the available styles/shades and final total.' : `Estimated total: ${money(subtotal + DELIVERY_FEE)}`,
      '',
      'Please share payment and delivery details. Thank you!',
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="announcement" aria-label="Store announcements">
        <div className="announcement-track">
          <span>ISLANDWIDE DELIVERY FOR RS. 499</span><i />
          <span>TRACKING SHARED AFTER DISPATCH</span><i />
          <span>PRESS-ON SETS INCLUDE 15 PIECES</span><i />
          <span>ISLANDWIDE DELIVERY FOR RS. 499</span><i />
          <span>TRACKING SHARED AFTER DISPATCH</span><i />
        </div>
      </div>

      <header className="site-header">
        <button className="header-icon mobile-only" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu /></button>
        <a className="wordmark" href="#top" aria-label="Ayidaah Beauty home">
          <span>AYIDAAH</span><small>BEAUTY</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#shop">NEW</a>
          <a href="#shop" onClick={() => setActiveCategory('Nails')}>NAILS</a>
          <a href="#shop" onClick={() => setActiveCategory('Lashes')}>LASHES</a>
          <a href="#shop" onClick={() => setActiveCategory('Tints')}>TINTS</a>
          <a href="#story">OUR STORY</a>
        </nav>
        <div className="header-actions">
          <button className="header-icon" aria-label="Search products" onClick={() => setSearchOpen(true)}><Search /></button>
          <a className="header-icon desktop-only" href="https://www.instagram.com/ayidaah_beauty/" target="_blank" rel="noreferrer" aria-label="Ayidaah Beauty on Instagram"><Instagram /></a>
          <button className="header-icon bag-button" aria-label={`Open bag with ${cartCount} items`} onClick={() => setCartOpen(true)}>
            <ShoppingBag />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
        </div>
      </header>

      <div id="top" />
      <section id="main-content" className="hero" aria-labelledby="hero-heading">
        <video className="hero-video" src="/products/mobile-hero-nails.mp4" autoPlay muted loop playsInline preload="metadata" />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="eyebrow">NAILS BY AYIDAAH</p>
          <h1 id="hero-heading">YOUR LOOK.<br /><em>YOUR RULES.</em></h1>
          <p>Salon-impact beauty, made effortless. Designed in Sri Lanka for every mood, moment, and main-character entrance.</p>
          <a className="button button-light" href="#shop">SHOP THE EDIT <ArrowRight /></a>
        </div>
        <div className="hero-stamp"><Sparkles /><span>BEAUTY<br />WITHOUT<br />LIMITS</span></div>
      </section>

      <section id="delivery" className="trust-strip" aria-label="Shopping benefits">
        <div><Truck /><span><strong>ISLANDWIDE DELIVERY</strong><small>Ships within 1–2 working days</small></span></div>
        <div><PackageCheck /><span><strong>TRACKED TO YOUR DOOR</strong><small>Tracking shared after dispatch</small></span></div>
        <div><Sparkles /><span><strong>AYIDAAH QUALITY</strong><small>Curated with care in Rajagiriya</small></span></div>
      </section>

      <section className="section category-section" aria-labelledby="category-heading">
        <div className="section-heading split-heading">
          <div><p className="eyebrow dark">FIND YOUR FAVOURITE</p><h2 id="category-heading">SHOP BY MOOD</h2></div>
          <p>From five-minute transformations to full-glam moments, your next signature look starts here.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <button className="category-card" key={category.name} onClick={() => shopCategory(category.target)}>
              <img src={category.image} alt="" />
              <span className="category-number">0{index + 1}</span>
              <span className="category-copy"><small>{category.note}</small><strong>{category.name}</strong><i>SHOP NOW <ArrowRight /></i></span>
            </button>
          ))}
        </div>
      </section>

      <section id="shop" className="section shop-section" aria-labelledby="shop-heading">
        <div className="section-heading centered">
          <p className="eyebrow dark">AYIDAAH ICONS</p>
          <h2 id="shop-heading">THE BEAUTY SHORTLIST</h2>
        </div>
        <div className="tabs" role="tablist" aria-label="Product categories">
          {(['All', 'Nails', 'Lashes', 'Tints'] as const).map((category) => (
            <button key={category} role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)}>{category === 'All' ? 'BEST SELLERS' : category.toUpperCase()}</button>
          ))}
        </div>
        <div className="product-grid">
          {shownProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                {product.label && <span className="product-label">{product.label}</span>}
                <button className={`heart ${favorites[product.id] ? 'active' : ''}`} onClick={() => setFavorites((current) => ({ ...current, [product.id]: !current[product.id] }))} aria-label={`${favorites[product.id] ? 'Remove' : 'Add'} ${product.name} ${favorites[product.id] ? 'from' : 'to'} favourites`}><Heart /></button>
                <button className="quick-add" onClick={() => addToBag(product)}>QUICK ADD <Plus /></button>
              </div>
              <div className="product-info">
                <div className="stars" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div><strong>{product.price ? money(product.price) : 'ASK FOR PRICE'}</strong><button onClick={() => addToBag(product)} aria-label={`Add ${product.name} to bag`}><ShoppingBag /></button></div>
              </div>
            </article>
          ))}
        </div>
        {shownProducts.length === 0 && <div className="empty-state">No products match “{query}”. <button onClick={() => setQuery('')}>Clear search</button></div>}
      </section>

      <section className="campaign" aria-labelledby="campaign-heading">
        <div className="campaign-image"><img src="/nail-art-4.jpg" alt="Pink and gold Ayidaah nail art" /></div>
        <div className="campaign-copy">
          <p className="eyebrow">THE PRESS-ON ERA</p>
          <h2 id="campaign-heading">BIG NAIL<br />ENERGY.</h2>
          <p>Fifteen pieces. No sizing guesswork. A fresh set whenever the moment calls for it.</p>
          <button className="button button-light" onClick={() => shopCategory('Nails')}>DISCOVER PRESS-ONS <ArrowRight /></button>
        </div>
      </section>

      <section id="story" className="section story-section" aria-labelledby="story-heading">
        <div className="story-copy">
          <p className="eyebrow dark">BORN IN SRI LANKA</p>
          <h2 id="story-heading">BEAUTY THAT<br /><em>FEELS LIKE YOU.</em></h2>
          <p>Ayidaah began with one simple belief: great beauty should feel expressive, personal, and easy to wear. From our Rajagiriya studio, we curate details that turn everyday routines into rituals.</p>
          <a className="text-link" href="https://wa.me/94771679595?text=Hi%20Ayidaah%20Beauty!%20I%27d%20love%20to%20know%20more%20about%20your%20products." target="_blank" rel="noreferrer">CHAT WITH OUR TEAM <ArrowRight /></a>
        </div>
        <div className="story-collage">
          <img className="story-main" src="/ayidaah-team.jpeg" alt="The Ayidaah Beauty team" />
          <img className="story-detail" src="/nail-art-3.jpg" alt="Ayidaah nail art detail" />
          <span>4.8<small>GOOGLE RATING</small></span>
        </div>
      </section>

      <section className="social-section" aria-labelledby="social-heading">
        <p className="eyebrow dark">FOLLOW THE LOOK</p>
        <h2 id="social-heading">@AYIDAAH_BEAUTY</h2>
        <div className="social-grid">
          {['/nail-art-2.jpg', '/products/brown-universal-colour-tint-results.jpeg', '/products/island-queen-lashes.jpeg', '/nail-art-1.jpg'].map((image, index) => (
            <a key={image} href="https://www.instagram.com/ayidaah_beauty/" target="_blank" rel="noreferrer" aria-label={`View Ayidaah Beauty on Instagram, gallery image ${index + 1}`}><img src={image} alt="" /><span><Instagram /> VIEW ON INSTAGRAM</span></a>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div><p className="eyebrow">THE AYIDAAH LIST</p><h2>FIRST LOOKS.<br />FRESH DROPS.</h2></div>
        <form onSubmit={(event) => {
          event.preventDefault()
          const email = new FormData(event.currentTarget).get('email')
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Ayidaah Beauty! Please add ${email} to the Ayidaah List for new drops and offers.`)}`, '_blank', 'noopener,noreferrer')
          event.currentTarget.reset()
          announce('Opening WhatsApp to confirm your sign-up')
        }}>
          <label htmlFor="email">Get launches, beauty notes, and private offers.</label>
          <div><input id="email" name="email" type="email" placeholder="YOUR EMAIL ADDRESS" required /><button aria-label="Join the Ayidaah list"><ArrowRight /></button></div>
          <small>By signing up, you agree to receive Ayidaah Beauty updates. Unsubscribe anytime.</small>
        </form>
      </section>

      <footer>
        <div className="footer-brand"><span>AYIDAAH</span><small>BEAUTY</small><p>Expressive beauty, curated in Sri Lanka.</p></div>
        <div><h3>SHOP</h3><a href="#shop" onClick={() => setActiveCategory('Nails')}>Press-on nails</a><a href="#shop" onClick={() => setActiveCategory('Lashes')}>Lashes</a><a href="#shop" onClick={() => setActiveCategory('Tints')}>Colour tints</a><a href="#shop">Best sellers</a></div>
        <div><h3>HELP</h3><a href="https://wa.me/94771679595" target="_blank" rel="noreferrer">Contact us</a><a href="#delivery">Delivery</a><a href="https://maps.google.com/?q=Ayidaah+Beauty+Rajagiriya" target="_blank" rel="noreferrer">Find us</a><a href="#story">Our story</a></div>
        <div><h3>VISIT & CONNECT</h3><p>Rajagiriya, Sri Lanka</p><a href="tel:+94771679595">+94 77 167 9595</a><a href="https://www.instagram.com/ayidaah_beauty/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a></div>
        <div className="footer-bottom"><span>© 2026 AYIDAAH BEAUTY</span><span>PRICES IN LKR · SRI LANKA</span></div>
      </footer>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
      <aside className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button className="close-button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
        <p>SHOP AYIDAAH</p>
        {(['All', 'Nails', 'Lashes', 'Tints'] as const).map((category) => <a key={category} href="#shop" onClick={() => { setActiveCategory(category); setMenuOpen(false) }}>{category === 'All' ? 'New & best sellers' : category}<ArrowRight /></a>)}
        <a href="#story" onClick={() => setMenuOpen(false)}>Our story <ArrowRight /></a>
        <div><a href="https://www.instagram.com/ayidaah_beauty/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a><a href="https://wa.me/94771679595" target="_blank" rel="noreferrer">WhatsApp us</a></div>
      </aside>

      {searchOpen && <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search Ayidaah products">
        <div className="search-top"><Search /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="WHAT ARE YOU LOOKING FOR?" /><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X /></button></div>
        <p>POPULAR: <button onClick={() => setQuery('nails')}>PRESS-ON NAILS</button> <button onClick={() => setQuery('lashes')}>LASHES</button> <button onClick={() => setQuery('tint')}>TINTS</button></p>
        {query && <div className="search-results">{searchMatches.slice(0, 4).map((product) => <button key={product.id} onClick={() => { setSearchOpen(false); setActiveCategory(product.category); setQuery(''); window.setTimeout(() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }), 0) }}><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.price ? money(product.price) : 'Ask for price'}</small></span><ArrowRight /></button>)}</div>}
      </div>}

      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)} />}
      <aside className={`cart-drawer ${cartOpen ? 'open' : ''}`} aria-hidden={!cartOpen}>
        <div className="cart-header"><div><h2>YOUR BAG</h2><p>{cartCount} {cartCount === 1 ? 'ITEM' : 'ITEMS'}</p></div><button onClick={() => setCartOpen(false)} aria-label="Close bag"><X /></button></div>
        {cartItems.length === 0 ? <div className="empty-bag"><ShoppingBag /><h3>YOUR BAG IS WAITING</h3><p>Add an Ayidaah favourite and it’ll appear right here.</p><button className="button button-dark" onClick={() => { setCartOpen(false); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }}>START SHOPPING</button></div> : <>
          <div className="cart-items">{cartItems.map((product) => <div className="cart-item" key={product.id}><img src={product.image} alt="" /><div><h3>{product.name}</h3><p>{product.description}</p><strong>{product.price ? money(product.price) : 'PRICE TO CONFIRM'}</strong><div className="quantity"><button onClick={() => updateQuantity(product.id, -1)} aria-label={`Remove one ${product.name}`}><Minus /></button><span>{cart[product.id]}</span><button onClick={() => updateQuantity(product.id, 1)} aria-label={`Add one ${product.name}`}><Plus /></button></div></div></div>)}</div>
          <div className="cart-summary"><div><span>SUBTOTAL</span><strong>{money(subtotal)}{hasQuoteItem ? ' +' : ''}</strong></div><p>Delivery is {money(DELIVERY_FEE)}. Final availability and total are confirmed on WhatsApp.</p><button className="button button-dark" onClick={checkout}>CHECK OUT ON WHATSAPP <ArrowRight /></button><small><Check /> No online payment required</small></div>
        </>}
      </aside>

      {toast && <div className="toast" role="status"><Check /> {toast}</div>}
      <a className="whatsapp-fab" href="https://wa.me/94771679595?text=Hi%20Ayidaah%20Beauty!" target="_blank" rel="noreferrer" aria-label="Chat with Ayidaah Beauty on WhatsApp">WA</a>
    </main>
  )
}
