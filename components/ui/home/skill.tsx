import Image from "next/image";
import tailwindConfig from "@/tailwind.config";
import { motion } from "framer-motion";

export default function Skill({skill, icon, bg, borderRadius}: {skill: string, icon?: string, bg?:boolean, borderRadius?:string}) {
// const Svg = dynamic(() => import(`@/typescript.svg`));
  return (
    <motion.div
    initial={{y:100}}
    whileInView={{y:0}}
    viewport={{ once: true }}
    className=" inline-block mx-5 p-5 lg:mb-24 mb-24" style={{alignSelf: 'flex-start', position: 'relative', boxShadow:`${tailwindConfig.theme.extend.boxShadow.shadow}`, background: tailwindConfig.theme.extend.colors.bw, borderRadius: tailwindConfig.theme.extend.borderRadius.base, fontFamily: 'Lexend Mega'}}>
        <h1 className="text-2xl">
            {skill}
        </h1>
        {/* <Svg /> */}
        <Image style={{background: bg ? 'white' : 'transparent',right:-10, bottom: -65, position: 'absolute', color: 'red', borderRadius:`${borderRadius}px`, filter: `drop-shadow( 3px 4px 0px #000)`}} alt="" src={`/${icon}.svg`} width={80} height={80}></Image>   
    </motion.div>
  );
}

