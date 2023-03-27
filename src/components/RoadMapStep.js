import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoadMapSlider = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="UPCOMING PROJECTS"
          data-align="center"
        >
         UPCOMING PROJECTS
        </h3>
        <div className="fn_cs_roadmap">
          {/* <div className="step_holder">
            <div className="step_in" />
          </div> */}
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 01</span>
                    <div className="item_in">
                      <img src="https://images-cdn.ubuy.co.in/634e993163f2507123442456-fgaa-anime-poster-attack-on-titan-poster.jpg" alt="" />
                      <p className="date">October 09, 2023</p>
                      <h3 className="title">Attack On Titans</h3>
                      <p className="desc">
                      After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 02</span>
                    <div className="item_in">
                      <img src="https://sportshub.cbsistatic.com/i/2023/03/01/2172fd1a-552e-4c09-81ff-2cade2cf7f2f/fqimna-waautyas.jpg?auto=webp&width=849&height=1200&crop=0.708:1,smart" alt="" />
                      <p className="date">October 17, 2023</p>
                      <h3 className="title">Demon Slayer Dub</h3>
                      <p className="desc">
                      A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 03</span>
                    <div className="item_in">
                      <img src="https://images-cdn.ubuy.co.in/6359340599ba7c1c010b04dd-jujutsu-kaisen-poster-anime-characters.jpg" alt="" />
                      <p className="date">October 28, 2023</p>
                      <h3 className="title">Jujutsu Kaisen Dub</h3>
                      <p className="desc">
                      A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 04</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716ASj7z2GL._SL1000_.jpg" alt="" />
                      <p className="date">November 11, 2023</p>
                      <h3 className="title">Death Note Dub</h3>
                      <p className="desc">
                      An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 05</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KVomnzLmL._SL1500_.jpg" alt="" />
                      <p className="date">November 23, 2023</p>
                      <h3 className="title">Chain Saw Man Dub</h3>
                      <p className="desc">
                      Following a betrayal, a young man left for the dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 06</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81dwTCF6+XL._SL1500_.jpg" alt="" />
                      <p className="date">December 02, 2023</p>
                      <h3 className="title">Naruto Dub</h3>
                      <p className="desc">
                      Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 07</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/I/51nwDLVezGL.jpg" alt="" />
                      <p className="date">January 14, 2025</p>
                      <h3 className="title">Bleach Dub</h3>
                      <p className="desc">
                      High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from "Hollows".
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 08</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/M/MV5BODEzNjlkMDEtMDViNS00MWE5LWI0YjMtZDRiNjhjNWQ4ZDNlXkEyXkFqcGdeQXVyMjQ3NTQ4MjQ@._V1_FMjpg_UX1000_.jpg" alt="" />
                      <p className="date">January 28, 2023</p>
                      <h3 className="title">Hunter X Hunter</h3>
                      <p className="desc">
                      Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Project 09</span>
                    <div className="item_in">
                      <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61eyyyGXMKL._SL1500_.jpg" alt="" />
                      <p className="date">February 12, 2023</p>
                      <h3 className="title">Full Metal Archemist Dub</h3>
                      <p className="desc">
                      Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;
