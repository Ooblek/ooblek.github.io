"use client"
import { Button } from "../button";
import { CSSProperties } from "react";
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

export default function Navbar() {

  const isMobile = useCustomMediaQuery('(max-width: 768px)');
  
  return (
    <nav style={style}>
        <div className="mx-auto max-w-7xl px-2 py-5">
            <div className="flex justify-between align-middle">
              <Avatar>
                <AvatarImage src="https://github.com/ooblek.png" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
                <div className="flex flex-1 justify-end align-middle">
                    {isMobile ? <Sheet>
                      <SheetTrigger asChild>
                        <Button variant={'neutral'}>
                          <Menu />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle></SheetTitle>
                          <SheetDescription>
                            
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <Button variant={'neutral'} className="mx-2">About</Button>
                          <Button variant={'neutral'} className="mx-2">My Portfolio</Button>
                          <Button variant={'neutral'} className="mx-2">Resume</Button>
                        </div>
                      
                      </SheetContent>
                    </Sheet>
                  :
                    <>
                    <Button className="mx-2">About</Button>
                    <Button className="mx-2">My Portfolio</Button>
                    <Button className="mx-2">Resume</Button>
                    </>
                  }
                    
                </div>
            </div>
        </div>
    </nav>
  );
}


const style: CSSProperties = {
  // boxShadow: `0 ${tailwindConfig.theme.extend.translate.boxShadowY} black`,
  background: tailwindConfig.theme.extend.colors.bw,
  borderBottom: '4px solid'
  
}
