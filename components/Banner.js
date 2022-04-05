import Link from 'next/link';
import { React, useContext, useEffect, useState } from 'react';
import { AnimesContext } from '../src/context/anime-context';
import AnimeService from '../src/services/anime-service';
import styles from '../styles/Banner.module.scss';

const animeService = new AnimeService();

const Banner = () => {
  const [maxDescription, setDescription] = useState(200);
  const { context, setContext } = useContext(AnimesContext);
  const [animes, setAnimes] = useState();
  const hasData = context && animes;
  const [selectedAnime, setSelectedAnime] = useState();

  useEffect(() => {
    if (!animes) {
      animeService.getAll().then((animes) => {
        setContext((context) => ({ ...context, mainData: { ...context?.mainData, animes: [...animes] } }));
        setAnimes(animes);
      });
    }
    if (window.innerWidth < 768) {
      setDescription(100)
    }
  }, [])

  useEffect(async () => {
    if (!animes) return;

    let randomChosen = Math.floor(Math.random() * (animes.length));
    let chosen = animes[randomChosen];
    setSelectedAnime(chosen);

  }, [animes])

  const handleAnime = () => {
    setContext((context) => ({ ...context, selectedItem: selectedAnime }));
  }

  if (!hasData || !selectedAnime) { return <></> }

  return (
    <>
      <section className={styles.wrapperBanner} key={selectedAnime} style={{
        backgroundImage: `url(https://animesflix.tv/external/${selectedAnime.id}/${selectedAnime.dsImagemFundo})`
      }}>
        <div className={styles.bannerVertical}>
          <div className={styles.bannerHorizontal}>
            <div className={styles.wrapperLayer}>
              <h2>{selectedAnime.dsTitulo}</h2>
              {
                selectedAnime.dsAnime.length > maxDescription ?
                  (
                    <p >{`${selectedAnime.dsAnime.substring(0, maxDescription)}...`}</p>
                  ) :
                  <p >{selectedAnime.dsAnime}</p>
              }

              <Link href={`/anime/${selectedAnime.id}`}>
                <button className={styles.buttonWatch} type="button" onClick={() => handleAnime()} >
                  <svg className={styles.play} viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
                  Assistir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;
