import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import ImageCard from "../imagecard";

export default function ProjectDropdown({title, imageCaption, imageUrl, description, languages, url} : {
    title: string,
    description: string,
    imageCaption: string,
    imageUrl: string,
    languages: string[],
    url?: string
}){
    return(
        <Accordion className="w-full pt-5" type="single" collapsible>
        <AccordionItem className="max-w-full" value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <div className="flex w- flex-col lg:flex-row">
              <div className="flex bg-red-50 h-full">
                <ImageCard
                  caption={imageCaption}
                  imageUrl={imageUrl}
                ></ImageCard>
              </div>
              <div className="mt-5 lg:ml-5 lg:mt-0 flex flex-1">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h1 className="text-xl font-black">
                    Languages and Frameworks
                  </h1>
                  <ul>
                    {languages.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                  </ul>
                  <a href={url}>{url}</a>
                </CardContent>
              </Card>
              </div>

            </div>
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}