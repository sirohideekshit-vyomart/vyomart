export const categories = ["Grocery & Food","Organic Products","Fashion & Clothing","Electronics","Beauty & Personal Care","Home & Kitchen","Health & Wellness","Sports & Fitness","Toys & Baby Products","Books & Stationery","Footwear","Accessories"];
export type Product = { slug:string; title:string; seller:string; mrp:number; price:number; rating:number; tone:string };
export const swaad: Product[] = [
 {slug:"organic-turmeric-powder",title:"Organic Turmeric Powder 200g",seller:"Swaad Roots",mrp:249,price:189,rating:4.7,tone:"#E8A33D"},
 {slug:"red-chilli-powder",title:"Red Chilli Powder 200g",seller:"Swaad Roots",mrp:229,price:169,rating:4.6,tone:"#B8412F"},
 {slug:"coriander-powder",title:"Coriander Powder 200g",seller:"Swaad Roots",mrp:199,price:149,rating:4.5,tone:"#8A9A3B"},
 {slug:"cumin-seeds",title:"Cumin Seeds 100g",seller:"Swaad Roots",mrp:179,price:139,rating:4.8,tone:"#8B6B3E"},
 {slug:"oregano",title:"Dried Oregano 50g",seller:"Swaad Roots",mrp:149,price:109,rating:4.4,tone:"#4F7A4A"}];
export const trending: Product[] = [
 {slug:"wireless-earbuds",title:"Wireless Earbuds with Case",seller:"SoundNest",mrp:2999,price:1499,rating:4.3,tone:"#2B4C7E"},
 {slug:"cotton-kurta",title:"Handloom Cotton Kurta",seller:"Jaipur Looms",mrp:1599,price:899,rating:4.5,tone:"#C46B4A"},
 {slug:"steel-cookware",title:"Tri-ply Steel Kadhai 3L",seller:"KitchenCraft",mrp:2199,price:1349,rating:4.6,tone:"#7A8590"},
 {slug:"yoga-mat",title:"Anti-slip Yoga Mat 6mm",seller:"FitRoot",mrp:1299,price:699,rating:4.2,tone:"#5B8C7A"}];
