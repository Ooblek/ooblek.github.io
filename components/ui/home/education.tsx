import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../card";
import Image from 'next/image'
export default function Education({education, specialization, duration, university}: {
    education: string,
    specialization: string,
    duration: string,
    university: string
}) {
    return(
    <Card className="w-auto mx-0 lg:mx-5 mt-2 lg:mt-0" style={{position:'relative'}}>
        <Image className="rotation" style={{position: 'absolute', right:-30, top: -30, filter: `drop-shadow( 3px 4px 0px #000)`}} alt="" src="/star-shape.svg" width={80} height={80}></Image>
        <CardHeader>
          <CardTitle>{education}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="font-black">
            Specialization
          </h1>
          <h1>
            {specialization}
          </h1>
          <h1 className="font-black">
            University
          </h1>
          <h1>
            {university}
          </h1>
          <h1 className="font-black">
            Duration
          </h1>
          <h1>
            {duration}
          </h1>
        </CardContent>
      </Card>
    )
}