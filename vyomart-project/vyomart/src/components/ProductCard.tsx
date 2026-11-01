import type { Product } from "@/data/demo";
export default function ProductCard({p}:{p:Product}){
 const off=Math.round((1-p.price/p.mrp)*100);
 return <a href={`/product/${p.slug}`} className="group block rounded-xl border border-forest/10 bg-white overflow-hidden transition hover:border-saffron">
  <div className="aspect-square flex items-end p-3" style={{background:`linear-gradient(160deg,${p.tone}33,${p.tone}88)`}}>
   <span className="rounded bg-forest px-2 py-0.5 text-xs text-white">{off}% off</span></div>
  <div className="p-3"><p className="text-xs text-clay">{p.seller}</p>
   <h3 className="mt-0.5 line-clamp-2 text-sm font-medium">{p.title}</h3>
   <p className="mt-2 text-sm"><b className="text-base">₹{p.price}</b> <s className="text-clay">₹{p.mrp}</s> <span className="float-right text-xs">★ {p.rating}</span></p></div></a>}
