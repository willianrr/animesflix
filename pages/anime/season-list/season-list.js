import { React, useEffect, useState, useContext, useRef } from 'react';
import { AnimesContext } from '../../../src/context/anime-context';
import styles from '../../../styles/SeasonList.module.scss';
import EpisodioService from '../../../src/services/episodio-service';
import ModalPlayer from '../modal-player/modal-player';
import TemporadaService from '../../../src/services/temporada-service';
import SkeletonAnimeListItem from '../../../src/components/skeletons/skeleton-anime-list/skeleton-anime-list-item';

const episodioService = new EpisodioService();
const temporadasService = new TemporadaService();

const SeasonList = location => {
  const { context } = useContext(AnimesContext);
  const [animeDefault, setAnimeDefault] = useState(null);
  const [episodiosTemporadas, setEpisodiosTemporadas] = useState([]);
  const [temporada, setTemporada] = useState();
  const playerRef = useRef(null)

  useEffect(() => {
    if (!context) return;

    temporadasService.getAll().then((temporadasResponse) => {
      return episodioService.getAll().then(epiList => {
        const episodiosAnime = context?.selectedItem?.episodios;
        const temporadasAnime = context?.selectedItem?.temporadas;

        if (!episodiosAnime || !temporadasAnime) return;

        const episodiosKeys = Object.keys(episodiosAnime);
        const episodiosFilter = episodiosKeys.filter((value) => episodiosAnime[value]);

        const temporadasKeys = Object.keys(temporadasAnime);
        const temporadasFilter = temporadasKeys.filter((value) => temporadasAnime[value]);

        const episodios = epiList.filter(episodio => episodiosFilter.includes(episodio.id));
        const temporadas = temporadasResponse.filter(temporada => temporadasFilter.includes(temporada.id));

        const episodiosTemporadas = temporadas.map((temporada) => {
          return {
            temporada,
            episodios: episodios.filter(episodio => episodio.temporada === temporada.id).sort((a, b) => a.index - b.index),
          }
        });

        setEpisodiosTemporadas(episodiosTemporadas)
        setTemporada(episodiosTemporadas[0].temporada.id)
      })
    });



  }, [context]);

  const handleModal = (episodio) => {
    setAnimeDefault(episodio);
    playerRef.current.scrollIntoView();
  }


  return (
    <>
      <div style={{ marginBottom: 200 }}>
        <div ref={playerRef}>
          {animeDefault &&
            <div id="player">
              <ModalPlayer
                link={animeDefault}
                className="player"
              />
            </div>
          }
        </div>
      </div>

      <div className={styles.wrapperSeasonList}>
        <div className={styles.seasonMobile}>
          <h2>Temporadas</h2>
          <div className={styles.selectSeason}>
            <div className={styles.wrapperSelect}>
              <ul className={styles.selectSeasonItem} >
                {episodiosTemporadas && episodiosTemporadas.map(temporada => {
                  return (
                    <li key={temporada} onClick={() => setTemporada(temporada.temporada.id)}>
                      {temporada.temporada.dsTituloTemporada}
                    </li>)
                })}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>Episódios</h2>
          <div className={styles.showLists}>
            {episodiosTemporadas && episodiosTemporadas.length >= 0 && episodiosTemporadas.map(episodios => {
              return (
                temporada === episodios.temporada.id && episodios.episodios.map((episodio, index) => {
                  const animeExternalId = extractUrlID(episodio.dsLinkEpisodio);
                  return (
                    <div className={styles.showListItem} key={index} onClick={() => handleModal(episodio.dsLinkEpisodio)}>
                      <div
                        className={styles.listThumbnail}
                        style={{
                          backgrounSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundImage: `url(https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${animeExternalId})`
                        }}
                      >
                        <h3 className={styles.listTitle}>{episodio.nmEpisodio}</h3>
                        <div className={styles.overlayThumbnail}>
                          <svg className={styles.playEpisode} viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor"></path></svg>
                        </div>
                      </div>
                      <div className={styles.listInfo}>
                        <p className={styles.listEp}>{episodio.dsEpisodio}</p>
                      </div>
                    </div>
                  )
                })
              )
            })}
            {(!episodiosTemporadas || (episodiosTemporadas && episodiosTemporadas.length <= 0)) && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => <SkeletonAnimeListItem key={n} />)}
          </div>
        </div>
        <div className={styles.seasonDesktop}>
          <h2>Temporadas</h2>
          <div className={styles.selectSeason}>
            <div className={styles.wrapperSelect}>
              <ul className={styles.selectSeasonItem} >
                {episodiosTemporadas && episodiosTemporadas.map(temporadaProp => {
                  return (
                    <li key={temporadaProp} className={temporadaProp.temporada.id === temporada ? styles.temporadaSelecionada : null} onClick={() => setTemporada(temporadaProp.temporada.id)}>
                      {temporadaProp.temporada.dsTituloTemporada}
                    </li>)
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function extractUrlID(url) {
    var expression = new RegExp(/[-\w]{25,}/);
    return expression.exec(url).toString();
  }
}

export default SeasonList;
