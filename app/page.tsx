"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import tailwindConfig from "@/tailwind.config";
import { useEffect, useState } from "react";
import { EDUCATION, FRAMEWORKS, HEROTYPES, OTHERS, PROJECTS, SKILLS, WORK } from "./constants/constants";
import {  AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Hand, Mail, Smile } from "lucide-react";
import Marquee from "@/components/ui/marquee";
import useCustomMediaQuery from "./hooks/mediaQuery";
import Skill from "@/components/ui/home/skill";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectDropdown from "@/components/ui/home/project-dropdown";
import WorkDopdown from "@/components/ui/home/work-dropdown";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import Education from "@/components/ui/home/education";



export default function Home() {
  const [currentType, setType] = useState('Full Stack Developer');

  useEffect(() => {
    const textInterval = setInterval(() => {
      setType(HEROTYPES[Math.floor(Math.random() * HEROTYPES.length)])
    }, 2500);

    return () => clearInterval(textInterval)
  })

  const isMobile = useCustomMediaQuery('(max-width: 768px)');



  return (
    <div style={{overflowX: 'hidden'}}>
      <div className="m-auto grid lg:grid-cols-2" style={{background: tailwindConfig.theme.extend.colors.bg}}>
        <div style={{background: `${tailwindConfig.theme.extend.colors.secondary}`}} className=" flex flex-col justify-center lg:px-36  mt-0 lg:min-h-[calc(100vh-15em)] min-h-screen lg:border-r-4 border-r-black border-solid">
          <div className="flex flex-col mx-10">
            <h1 className="font-bold text-5xl flex">
              Welcome to my Portfolio! <Smile size={isMobile ? 70 : 60} /> 
              <motion.span 
                animate="animate"
                exit={"exit"}
                initial={"initial"} variants={handAnimationVariant}  className="flex"><Hand /></motion.span>
            </h1>
            <h2 className="font-medium text-3xl pt-5 leading-10">
              I&apos;m <b>Silesh Ganesh</b> 
                
            </h2>
            <AnimatePresence mode='wait'>
              <motion.h2
                  className="font-medium lg:text-3xl text-xl leading-10"
                    animate="animate"
                    exit={"exit"}
                    initial={"initial"}
                    variants={textAnimationVariant}
                    key={currentType+Math.random().toFixed}
                  >
                    {currentType.split('').map((l,i) => (
                      <motion.span key={l+i} variants={letterAnimationVariant}>
                        {l}
                      </motion.span>
                    ))}
                </motion.h2>
              </AnimatePresence>
            <Button className="mt-5" size={'lg'}><ArrowDown />Explore<ArrowDown /></Button>
          </div>
          
        </div>
        {!isMobile && <div className="flex justify-center items-center min-h-[calc(100vh-5em)] flex-1" >
          <motion.span
            animate="animate"
            exit={"exit"}
            initial={"initial"}
            variants={imageAnimation}
          >
            <Image alt="" src="/computer.png" width={500} height={500}></Image>
          </motion.span>
        </div>}
      </div>

      {/* About me */}
      <Marquee items={['A LITTLE BIT ABOUT ME', 'A LITTLE BIT ABOUT ME', 'A LITTLE BIT ABOUT ME', 'A LITTLE BIT ABOUT ME', 'A LITTLE BIT ABOUT ME','A LITTLE BIT ABOUT ME']} />
      
      <div className="my-10 flex flex-col">
        <div className="">
          {/* Box */}
          <div className="rocking inline-block mx-5 p-5" style={{transform:`rotateZ(-5deg)`,boxShadow:`${tailwindConfig.theme.extend.boxShadow.shadow}`, background: tailwindConfig.theme.extend.colors.bw, borderRadius: tailwindConfig.theme.extend.borderRadius.base, fontFamily: 'Lexend Mega'}}>
            <h1 className="text-4xl">
              Who am I
            </h1>
            <Image style={{transform: `rotateZ(15deg)`,position: 'absolute',top:-20, right:-60}} alt="" src="/question.png" width={80} height={80}></Image>
          </div>

          {/* About Me */}
          <motion.div
           initial={{
            y:100
           }}
           whileInView={{
            y:0,
            transition:{duration:0.5}
           }}
           viewport={{ once: true }}
           className="mt-10 mx-10">
            <p className="text-2xl font-medium leading-10">
              I&apos;m a <mark>Full Stack Developer</mark> from India, with over <mark>5 years</mark> of experience in the field, and specialize in crafting 
              sophisticated <mark>web and mobile</mark> applications. Fluent in <mark>TypeScript</mark>, <mark>CSharp</mark>, 
              <mark>Python</mark>, <mark>SQL</mark> and <mark>JAVA</mark> and many more, I keep trying to add in more 
              languages to expand my repertoire (Got my eyes locked in on <mark>Rust</mark> and <mark>GO</mark>). 
              <br/><br/>

              
              A coder at heart, I&apos;ve always been fascinated at how computers manage 
              to perform what is seemingly magic with just a few lines of text, having been mesmerized seeing early internet websites and 
              games. I even got my start on programming in ActionScript, trying to make games on <span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>Flash†</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    RIP Flash, the best (and most insecure) animation program to ever exist :(
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </span>
              , and have never stopped since. 
              I sometimes really can&apos;t believe I get to do this as a job!
            </p>
          </motion.div>

        </div>
      </div>

      <Marquee items={['MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS','MY SKILLS', ]} />
      
      {/* Skills */}
      <div className="pt-10 flex flex-wrap flex-col" style={{background: tailwindConfig.theme.extend.colors.secondary, borderBottom: "solid 4px black"}}>
        <div className=" rocking inline-block mx-5 p-5" style={{alignSelf: 'flex-start', transform:`rotateZ(3deg)`,boxShadow:`${tailwindConfig.theme.extend.boxShadow.shadow}`, background: tailwindConfig.theme.extend.colors.bw, borderRadius: tailwindConfig.theme.extend.borderRadius.base, fontFamily: 'Lexend Mega'}}>
          <h1 className="text-4xl">
            Languages
          </h1>
          <Image style={{transform: `rotateZ(15deg)`,position: 'absolute',top:-20, right:-50}} alt="" src="/compute.png" width={100} height={100}></Image>
        </div>
        <div className="flex flex-wrap pt-10 pb-20">
          {SKILLS.map((s,i) => (
              <Skill key={i} bg={s.bg} borderRadius={s.borderRadius} skill={s.skill} icon={s.icon}/>
          ))}     
        </div>
      </div>
        {/* Frameworks */}
      <div className="pt-20 flex flex-wrap flex-col" style={{background: tailwindConfig.theme.extend.colors.bg, borderBottom: "solid 4px black"}}>
        <div className="rocking inline-block mx-5 p-5" style={{alignSelf: 'flex-start', transform:`rotateZ(-3deg)`,boxShadow:`${tailwindConfig.theme.extend.boxShadow.shadow}`, background: tailwindConfig.theme.extend.colors.bw, borderRadius: tailwindConfig.theme.extend.borderRadius.base, fontFamily: 'Lexend Mega'}}>
          <h1 className="text-4xl">
            Frameworks 
          </h1>
          <Image style={{transform: `rotateZ(15deg)`,position: 'absolute',top:-50, right:-30}} alt="" src="/framework.png" width={100} height={100}></Image>
        </div>
        <div className="flex flex-wrap pt-10 pb-20">
          {FRAMEWORKS.map((s,i) => (
              <Skill bg={s.bg} borderRadius={s.borderRadius} key={i} skill={s.skill} icon={s.icon}/>
          ))}     
        </div>
      </div>
      {/* Other Skills */}
      <div className="pt-20 flex flex-wrap flex-col" style={{background: tailwindConfig.theme.extend.colors.secondary}}>
        <div className=" rocking inline-block mx-5 p-5" style={{alignSelf: 'flex-start', transform:`rotateZ(-3deg)`,boxShadow:`${tailwindConfig.theme.extend.boxShadow.shadow}`, background: tailwindConfig.theme.extend.colors.bw, borderRadius: tailwindConfig.theme.extend.borderRadius.base, fontFamily: 'Lexend Mega'}}>
          <h1 className="text-4xl">
            Other Skills
          </h1>
          {/* <motion.div
           animate="animate"
           exit={"exit"}
           initial={"initial"}
           variants={rotationAnimation}
          > */}
            <Image className="rotation" style={{position: 'absolute',top:-20, right:-50}} alt="" src="/other.png" width={80} height={80}></Image>
          {/* </motion.div> */}
        </div>
        <motion.div initial={{
          y:100
        }} 
        viewport={{ once: true }}
        whileInView={{
          y:0,
          transition:{
            staggerChildren: 1
          }
        }}
        className="flex flex-wrap pt-10 pb-20">
          {OTHERS.map((s,i) => (
              <Skill bg={s.bg} borderRadius={s.borderRadius} key={i} skill={s.skill} icon={s.icon}/>
          ))}     
        </motion.div>
      </div>
      
      {/* Education */}
      <Marquee items={['EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION','EDUCATION',]} />
      
      <div className="pt-10 mx-5 pb-16  grid grid-cols-1 lg:grid-cols-2 bg-red-50" style={{background: tailwindConfig.theme.extend.colors.bg}}>
        {EDUCATION.map((e,i) => (
          <Education university={e.university} duration={e.duration} specialization={e.specialization} education={e.education} key={i} />

        ))}
      </div>


       {/* WorkEx */}
       <Marquee items={['WORK EXPERIENCE','WORK EXPERIENCE','WORK EXPERIENCE','WORK EXPERIENCE','WORK EXPERIENCE','WORK EXPERIENCE','WORK EXPERIENCE','WORK EXPERIENCE',]} />
      
      <div className="pt-10 mx-5 pb-16 flex flex-wrap flex-col bg-red-50" style={{background: tailwindConfig.theme.extend.colors.bg}}>
          {WORK.map((w,i) => (
            <WorkDopdown fromTo={w.fromTo} workEx={w.workEx} key={i} />
          ))}
      </div>


      {/* Projects */}
      <Marquee items={['PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS','PROJECTS', ]} />
      
      <div className="pt-10 mx-5 pb-16 flex flex-wrap flex-col" style={{background: tailwindConfig.theme.extend.colors.bg}}>
          {PROJECTS.map((p, i) => (
            <ProjectDropdown url={p.url} key={i} title={p.title} imageCaption={p.imageCaption} imageUrl={p.imageUrl} description={p.description} languages={p.languages} />
          ))}
      </div>

      {/* Get in touch */}
      <Marquee items={['GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!','GET IN TOUCH!',]} />
      
      <div className="pt-10 pb-10 min-h-[50vh] flex justify-center items-center flex-col" style={{backgroundColor: tailwindConfig.theme.extend.colors.main, backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px", backgroundPosition:"-2px -2px, -2px -2px, -1px -1px, -1px -1px"}}>
          <h1 className="text-4xl font-black text-center">
            I&apos;m available on all these platforms 
          </h1>
          <div className="grid grid-cols-2 mt-5">
            <Card className="mx-0 lg:mx:5">
              <CardHeader>
                <CardTitle>Linkedin</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
                <CardContent>
                  <Image style={{ background: 'white', borderRadius:`20px`, filter: `drop-shadow( 3px 4px 0px #000)`}} alt="" src={`/linkedin.svg`} width={80} height={80}></Image>   
                    
                </CardContent>
            </Card>
            <Card className="mx-0 lg:mx:5">
              <CardHeader>
                <CardTitle style={{textAlign: 'center'}}>Github</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
                <CardContent>
                  <Image style={{ background: 'white', borderRadius:`50px`, filter: `drop-shadow( 3px 4px 0px #000)`}} alt="" src={`/github.svg`} width={80} height={80}></Image>   
                    
                </CardContent>
            </Card>
            <Card className="mx-0 lg:mx:5">
              <CardHeader>
                <CardTitle>CodePen</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
                <CardContent>
                  <Image style={{ borderRadius:`10px`, filter: `drop-shadow( 3px 4px 0px #000)`}} alt="" src={`/codepen.svg`} width={80} height={80}></Image>   
                    
                </CardContent>
            </Card>

            <Card className="mx-0 lg:mx:5">
              <CardHeader>
                <CardTitle style={{textAlign:'center'}}>Email</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
                <CardContent>
                 <Mail width={80} height={80}/>
                    
                </CardContent>
            </Card>



          </div>

          <Button variant={"neutral"} size={"lg"} style={{padding: "2rem", marginTop: '2rem'}}>
            <h1 className="text-xl py-10">Download my resume! </h1><ArrowUpRight size={100} />
          </Button>
      </div>

    </div>
  );
}

const textAnimationVariant :Variants = {
  initial: {opacity: 0, x: 0},
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.05
    },
  },
  exit: {
    opacity: 0,
    x: 0,
  }
}

const letterAnimationVariant :Variants = {
  initial: {opacity: 0, x: 0},
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.05
    },
  },
  exit: {
    opacity: 0,
  }
}

const imageAnimation :Variants = {
  animate: {
    x: [],
    y: [0, 10, 15, -10, 0],
    rotateZ: [0, 5, 0, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      easings: ['circIn'],
      repeat: Infinity,
      duration: 30
    },
  },
  exit: {
    opacity: 0,
    y: -10,
  }
}

const handAnimationVariant :Variants = {
  // initial: {rotateZ: 20},
  
  animate: {
    rotateZ: [20, -20, 20],
    transition: {
      easings: ["circInOut"],
      repeat: Infinity,
      duration: 3
    }
  }
}
