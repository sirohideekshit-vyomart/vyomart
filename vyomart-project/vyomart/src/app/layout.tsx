import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title:"VYOMART – Everything You Need. All in One Place.",
 description:"India's multi-vendor marketplace for groceries, fashion, electronics and more.",
 icons:{icon:"/favicon.svg"}, openGraph:{title:"VYOMART",description:"Everything You Need. All in One Place."} };
export default function Root({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
