import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import Image from "next/image";

export default function WorkDopdown({fromTo, workEx}: {
  fromTo: string,
  workEx: {
    company: string,
  imageUrls: string[],
  designation: string, 
  account?: string, 
  team?: string, 
  description: string,
  languages: string[]
  }[]
  
}){
    return(
      <Accordion defaultValue="item-1"  className="w-full pt-5" type="single" collapsible>
        <AccordionItem className="max-w-full" value="item-1">
          <AccordionTrigger>{fromTo}</AccordionTrigger>
          <AccordionContent>
            { workEx.map((w, i) => (
              <InnerAccordion key={i} company={w.company} imageUrls={w.imageUrls} designation={w.designation} account={w.account} team={w.team} description={w.description} languages={w.languages}/>

            ))}

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}

const InnerAccordion = ({company, imageUrls, designation, account, team, description, languages}: {
  company: string,
  imageUrls: string[],
  designation: string, 
  account?: string, 
  team?: string, 
  description: string,
  languages: string[]
}) => {
  return(
    <Accordion  className="w-full pt-5" type="single" collapsible>
    <AccordionItem className="max-w-full" value="item-1">
      <AccordionTrigger>{company}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-1 lg:flex-initial justify-center lg:justify-normal">
              {imageUrls.map((c,i) => (
              <Image key={i} className="ml-2" style={{color: 'red', borderRadius:`10px`}} alt="" src={`/${c}.svg`} width={80} height={80}></Image>   

              ))}
            </div>
            <div className="flex flex-col flex-1 lg:ml-3 mt-3 lg:mt-0">
              <h1 className="font-black">
                Designation 
              </h1>
              <h1>{designation}</h1>
              {account && <div className="mt-2">
                <h1 className="font-black">
                  Account
                </h1>
                <h1>{account}</h1>
              </div>}
             {team && <div className="mt-2">
                <h1 className="font-black">
                  Team
                </h1>
                <h1>{team}</h1>
              </div>}
              <div className="mt-2">
                <h1 className="font-black">
                  Description
                </h1>
                <h1>
                 {description}
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="font-black">
                  Languages and Frameworks
                </h1>
                <ul>
                  {languages.map((l,i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
          
        </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}