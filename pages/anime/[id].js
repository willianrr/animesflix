import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AnimesContext } from '../../src/context/anime-context';
import AnimeService from '../../src/services/anime-service';
import styles from '../../styles/Anime.module.scss';
import SeasonList from './season-list/season-list';

const animeService = new AnimeService();

const Anime = () => {

  const router = useRouter();
  const { id } = router.query;
  const { context, setContext } = useContext(AnimesContext);
  const { selectedItem: itemPreviousPage } = context;
  const [selectedItem, setSelectedItem] = useState(itemPreviousPage);
  let maxDescription = 200;
  const hasData = context && selectedItem;

  useEffect(() => {
    if (!selectedItem && !!id) {
      animeService.findById(id).then((anime) => {
        setContext((context) => ({ ...context, selectedItem: anime } ));
        setSelectedItem(anime);
      });
    }
  }, [selectedItem, id])

  if (!hasData) { return <></> }

  return (
    <>
      <section className={styles.wrapperBanner} style={{
        backgrounSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://animesflix.tv/external/${selectedItem.id}/${selectedItem.dsImagemFundo})`
      }}>
        <div className={styles.bannerVertical}>
          <div className={styles.bannerHorizontal}>
            <div className={styles.wrapperInfoAnime}>
              <div className={styles.wrapperLayerAnime}>
                <h2>{selectedItem.dsTitulo}</h2>
                {
                  selectedItem.dsAnime.length > maxDescription ?
                    (
                      <p >{`${selectedItem.dsAnime.substring(0, maxDescription)}...`}</p>
                    ) :
                    <p >{selectedItem.dsAnime}</p>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <SeasonList location={id} />
    </>
  );
}

export default Anime;
