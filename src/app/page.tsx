import ProductCard from "@/components/ProductCard";
import { categories, swaad, trending } from "@/data/demo";
export default function Home(){return <>
 <header className="sticky top-0 z-20 border-b border-forest/10 bg-white/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
   <a href="/"><img src="/logo.svg" alt="Vyomart" className="h-9"/></a>
   <button className="hidden rounded-lg border border-forest/15 px-3 py-2 text-sm md:block">Deliver to: Select pincode</button>
   <form action="/search" className="flex flex-1"><input name="q" aria-label="Search products" placeholder="Search spices, shirts, earbuds…" className="w-full rounded-l-lg border border-forest/20 px-4 py-2 text-sm"/>
    <button className="rounded-r-lg bg-saffron px-4 text-sm font-semibold text-ink">Search</button></form>
   <a href="/login" className="text-sm font-medium">Sign in</a><a href="/wishlist" className="text-sm">Wishlist</a><a href="/cart" className="rounded-lg bg-forest px-3 py-2 text-sm text-white">Cart</a></div>
  <nav className="border-t border-forest/10"><ul className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 py-2 text-sm">
   {categories.map(c=><li key={c} className="whitespace-nowrap"><a href={`/c/${c.toLowerCase().replace(/[^a-z]+/g,"-")}`} className="hover:text-forest2 hover:underline">{c}</a></li>)}</ul></nav></header>
 <main>
  <section className="bg-forest text-white"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
   <div><h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">Everything You Need. All in One Place.</h1>
    <p className="mt-4 max-w-md text-white/80">Shop from thousands of independent sellers and trusted brands, with UPI, cards and cash on delivery.</p>
    <div className="mt-7 flex gap-3"><a href="#deals" className="rounded-lg bg-saffron px-5 py-3 font-semibold text-ink">Shop today's deals</a>
     <a href="/sell" className="rounded-lg border border-white/40 px-5 py-3">Sell on Vyomart</a></div></div>
   <div className="grid grid-cols-3 gap-3" aria-hidden>{swaad.concat(trending).slice(0,6).map(p=><div key={p.slug} className="aspect-square rounded-xl" style={{background:p.tone}}/>)}</div></div></section>
  <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="font-display text-2xl font-bold">Shop by category</h2>
   <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">{categories.map(c=>
    <a key={c} href="#" className="rounded-xl bg-mist p-4 text-sm font-medium transition hover:bg-saffron/30">{c}</a>)}</div></section>
  <section id="deals" className="mx-auto max-w-7xl px-4 pb-12"><h2 className="font-display text-2xl font-bold">Trending now</h2>
   <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">{trending.map(p=><ProductCard key={p.slug} p={p}/>)}</div></section>
  <section className="bg-mist"><div className="mx-auto max-w-7xl px-4 py-12">
   <div className="flex flex-wrap items-end justify-between gap-2"><div><h2 className="font-display text-3xl font-bold text-forest">Swaad Roots</h2>
    <p className="mt-1 max-w-xl text-clay">Organic spices from our own farms partners, ground in small batches. A Vyomart-owned brand.</p></div>
    <a href="/brand/swaad-roots" className="font-medium text-forest underline">Visit the store</a></div>
   <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">{swaad.map(p=><ProductCard key={p.slug} p={p}/>)}</div></div></section>
  <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="font-display text-2xl font-bold">Stay in the loop</h2>
   <form className="mt-4 flex max-w-md gap-2"><input type="email" aria-label="Email" placeholder="you@example.com" className="flex-1 rounded-lg border border-forest/20 px-3 py-2"/>
    <button className="rounded-lg bg-forest px-4 text-white">Subscribe</button></form></section></main>
 <footer className="bg-ink text-sm text-white/70"><div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3">
  <div><p className="font-display text-lg text-white">VYOMART</p><p>Everything You Need. All in One Place.</p></div>
  <div><p className="text-white">Policies</p><p>Returns · Shipping · Privacy · Terms</p></div>
  <div><p className="text-white">Contact</p><p>support@vyomart.example</p></div></div></footer></>}
