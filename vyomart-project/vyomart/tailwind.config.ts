import type { Config } from "tailwindcss";
export default { content:["./src/**/*.{ts,tsx}"], theme:{ extend:{
 colors:{ forest:"#0E3B2E", forest2:"#165240", saffron:"#E8A33D", ink:"#14201B", mist:"#F2F6F1", clay:"#6B7A72" },
 fontFamily:{ display:["Fraunces","Georgia","serif"], sans:["Inter","system-ui","sans-serif"] } } }, plugins:[] } satisfies Config;
