type Props = {
    imageUrl: string
    caption: string,
    width?: string
  }
  
  export default function ImageCard({ imageUrl, caption }: Props) {
    return (
      <figure className={`w-full lg:w-52 overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow`}>
        <img className="w-full aspect-[4/3] object-cover" src={imageUrl} alt="image" />
        <figcaption className="border-t-2 text-mtext border-border p-4">
          {caption}
        </figcaption>
      </figure>
    )
  }