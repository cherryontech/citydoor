import Nav from './nav'
import Heading from './components/heading'
import ImageCard from './components/image-card'

export default function Home() {
  return (
    <div>
      <Heading level={"1"} className={"text-cd-brand text-4xl lg:text-6xl"}>Leading Door and Door Hardware Experts</Heading>
      <ol>
        <ImageCard 
          alt="Sweet little baby white dog being held up by clapping hands."
          descriptionText="I'm baby praxis artisan edison bulb, church-key master cleanse tumeric tofu chambray aesthetic food truck. Lo-fi tumblr selvage williamsburg gentrify cloud bread authentic polaroid green juice small batch tbh celiac roof party raw denim hashtag. Mlkshk distillery vegan helvetica, try-hard authentic lyft copper mug polaroid church-key tumeric yr iceland listicle fit. Sartorial palo santo austin woke. Hoodie crucifix meditation, pitchfork whatever gochujang freegan schlitz."
          headingText="Things that fit in one's purse"
          src="https://i.redd.it/gm1zqjjcm8351.jpg" 
          Tag={'li'}/>
      </ol>
    </div>
  )
}
