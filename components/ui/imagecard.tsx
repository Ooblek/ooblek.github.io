type Props = {
    imageUrl: string
    caption: string,
    width?: string
  }
  
  export default function ImageCard({ imageUrl, caption, width }: Props) {
    return (
      <figure className={`w-${width} overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow`}>
        <img className="w-full aspect-[4/3]" src={imageUrl} alt="image" />
        <figcaption className="border-t-2 text-mtext border-border p-4">
          {caption}
        </figcaption>
      </figure>
    )
  }