import Link from "next/link";
import FunFacts from "./FunFacts";
import SectionDivider from "./SectionDivider";
// import Animator, { AnimateProvider } from 'nextjs-animate-on-scroll'

const About = () => {
  return (
    <section id="about">
      <div className="fn_cs_video" data-aos="fade-up" >
              <img src="/img/video_thumbnail.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/7e90gBu4pas"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
 <FunFacts />
 <SectionDivider/>
            <div className="fn_cs_desc" >
          <p>
            "मैं इस नफ़रत को इस दुनिया के साथ खत्म कर दूंगा"
            <br />
            <br />
            Eren activates The Rumbling in an attempt to destroy the world.
            Countless Titans begin their march, trampling down everything in
            their path. Mikasa, Armin, Jean, Connie, Hange, Reiner, Annie,
            Pieck, and the mortally wounded Levi. The remaining ones challenge
            the final battle to stop Eren.
            <br />
            <br /> Will Eren Get The Freedom he wants For his People? <br />
            WATCH THIS EPIC SHOWDOWN IN YOUR OWN LANGAUGE IN <b /> HINDI <b />{" "}
            Only On
          </p>
          <a
            href="https://opensea.io/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
            style={{marginBottom:"2rem"}}
          >
            <span>WATCH NOW</span>
          </a>
        </div>
       
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="img/poster1.jpg">
              <img src="/img/poster1.jpg" alt="" />
            </div>
            
          </div>
          <div className="right_in">
            <h3 style={{lineHeight:"45px"}} className="fn__maintitle" data-text="ATTACK ON TITAN: THE FINAL SEASON PART 3">
            ATTACK ON TITAN: THE FINAL SEASON PART 3
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Attack on Titan: The Final Season Part 3, Shingeki no Kyojin: The Final Season - Kanketsu-hen, Shingeki no Kyojin: The Final Season Part 3, Shingeki no Kyojin Season 4, Attack on Titan Season 4, 進撃の巨人 The Final Season 完結編
              </p>
              <p>
              Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!
              </p>
              <p>
              <b style={{fontSize:"20px"}}>Type :</b> TV Series
              </p>
              <p>
              <b style={{fontSize:"20px"}}>Studios:</b> MAPPA
              </p>
              <p>
              <b style={{fontSize:"20px"}}>Genre:</b> Action, Drama
              </p>
              <p>
              <b style={{fontSize:"20px"}}>Duration:</b> 61 min
              </p>
            </div>
            <a
              href="https://chapmanganato.com/manga-oa952283"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Manga</span>
            </a>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/aot_poster2.png" />
          </div>
        </div>
      </div>
      {/* !About Shortcode */}
      <div className="container">
      <h3
          className="fn__maintitle big"
          data-text="Which Anime DUB Do You Want in Future?"
          data-align="center"
          style={{marginBottom:"3rem"}}
        >
          Which Anime DUB Do You Want in Future?
        </h3>
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          {/* <div className="left_part">
            <h3 className="fn__maintitle" data-text="How to Mint">
              How to Mint
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <Link href="/nft-single">
              <a className="metaportal_fn_button">
                <span>How to Mint</span>
              </a>
            </Link>
          </div> */}
          <div className="right_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <img src="https://sportshub.cbsistatic.com/i/2023/03/01/2172fd1a-552e-4c09-81ff-2cade2cf7f2f/fqimna-waautyas.jpg?auto=webp&width=849&height=1200&crop=0.708:1,smart" alt="" />
                      <h3 className="fn__gradient_title">01</h3>
                      <p>Demon Slayer</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <img src="https://images-cdn.ubuy.co.in/633feb8bd279163476374ad1-japan-anime-manga-poster-jujutsu.jpg" alt="" />
                      <h3 className="fn__gradient_title">02</h3>
                      <p>Jujutsu Kaisen</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KVomnzLmL._SL1500_.jpg" alt="" />
                      <h3 className="fn__gradient_title">03</h3>
                      <p>ChainSaw Man</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/naruto-shippuden-anime-poster.jpg" alt="" />
                      <h3 className="fn__gradient_title">04</h3>
                      <p>Naruto</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
    </section>
  );
};
export default About;

export const About2 = () => (
  <section id="about2">
    <div className="container small">
      <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="The Rise of Legends">
            The Rise of Legends
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
              As the first hero of the Meta Legends, collection has over 9,999
              unique skins drawn from the different missions and challenges he
              faced throughout his life.
            </p>
            <p>
              The artwork has been hand-drawned by Robert Green in the
              traditional anime style and composited by Layla Efiyo.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find us On Discord</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/2.jpg" />
        </div>
      </div>
      <div className="fn_cs_collection_info">
        <h3 className="fn__gradient_title">10,000</h3>
        <h3
          className="fn__maintitle upper"
          data-text="Total Items in Collection"
        >
          Total Items in Collection
        </h3>
        <p>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {`don't`} look even slightly
          believable.
        </p>
      </div>
    </div>
    <div className="fn_cs_video bg">
      <div className="abs_img" data-bg-img="/img/video/1.jpg" />
      <a
        className="popup-youtube"
        href="https://www.youtube.com/embed/7e90gBu4pas"
      >
        <img src="/svg/play.svg" alt="" className="fn__svg" />
      </a>
    </div>
    <div className="container">
      {/* Steps Shortcode */}
      <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
        <ul>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">01</h3>
                <p>Connect your Wallet</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">02</h3>
                <p>Select Your Quantity</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">03</h3>
                <p>Confirm The Transaction</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">04</h3>
                <p>Receive Your {`NFT’s`}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* !Steps Shortcode */}
      <div className="fn_cs_join">
        <div className="join_in">
          <h3 className="fn__maintitle upper" data-text="Join Our Community">
            Join Our Community
          </h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {`don't`} look even slightly
            believable.
          </p>
          <div className="buttons">
            <a
              href="https://opensea.io/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Buy On Opensea</span>
            </a>
            <a
              href="#"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhiteList Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
