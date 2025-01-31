"use client"
import { Button } from "../button";
import { CSSProperties, useState } from "react";
import tailwindConfig from "@/tailwind.config";
import {Avatar, AvatarFallback, AvatarImage} from '../avatar'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from "lucide-react";
import useCustomMediaQuery from "@/app/hooks/mediaQuery";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {

  const isMobile = useCustomMediaQuery('(max-width: 768px)');
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(0);
  const [isOpen, setIsOpen] = useState(false)


  const update = (latest: number, prev: number): void => {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }


  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prev);
    setPrev(latest);
  });

  const scrollToElement = (element: HTMLElement | null) => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false)
      }
  };

  const getElement = (element: string) => {
    if (typeof window !== 'undefined') {
      const e = document.getElementById(element);
      scrollToElement(e)
    }
  }
  
  return (
    <motion.nav  animate={hidden ? "hidden" : "visible"} variants={parentVariants} 
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }} 
      style={{...style, position: 'fixed'}}>
        <div className="mx-auto max-w-7xl px-2 py-5">
            <div className="flex justify-between align-middle">
              <Avatar>
                <AvatarImage src="https://github.com/ooblek.png" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
                <div className="flex flex-1 justify-end align-middle" style={{zIndex: 900}}>
                    {isMobile ? 
                    <Sheet open={isOpen} onOpenChange={() => {setIsOpen(!isOpen)}}>
                      <SheetTrigger asChild>
                        <Button variant={'neutral'}>
                          <Menu />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side={'bottom'}>
                        <SheetHeader>
                          <SheetTitle></SheetTitle>
                          <SheetDescription>
                            
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <Button onClick={() => {getElement('about-me') }} className="mx-2">About</Button>
                          <Button onClick={() => {getElement('my-skills') }} className="mx-2">My Skills</Button>
                          <Button onClick={() => {getElement('work') }} className="mx-2">Experience</Button>
                          <Button onClick={() => {getElement('education') }} className="mx-2">Education</Button>
                          <Button onClick={() => {getElement('resume') }} className="mx-2">Resume</Button>
                        </div>
                      
                      </SheetContent>
                    </Sheet>
                  :
                    <>
                      <Button onClick={() => {getElement('about-me') }} className="mx-2">About</Button>
                      <Button onClick={() => {getElement('my-skills') }} className="mx-2">My Skills</Button>
                      <Button onClick={() => {getElement('work') }} className="mx-2">Experience</Button>
                      <Button onClick={() => {getElement('education') }} className="mx-2">Education</Button>
                      <Button onClick={() => {getElement('resume') }} className="mx-2">Resume</Button>
                    </>
                  }
                </div>
            </div>
        </div>
    </motion.nav>
  );
}


const style: CSSProperties = {
  background: tailwindConfig.theme.extend.colors.bw,
  borderBottom: '4px solid',
  width: '100%',
  zIndex: '100'
  
}

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
};
