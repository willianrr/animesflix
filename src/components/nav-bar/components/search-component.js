import useSearchState from './hooks/use-search-state';
import styles from './styles/search.module.scss';
import Image from 'next/image'
import Link from 'next/link';


const SearchComponent = ({ show, small, showList, onClick }) => {
  const { resetFilter, filtered, handleFilter, handleAnime } = useSearchState(onClick);

  if (!show) {
    return <></>
  }

  const renderItem = (anime) => {
    const { generos } = anime;
    let novosGeneros = generos ? generos.replaceAll(',', ', ') : '';

    return (
      showList &&
      <div style={{zIndex: 99999}}>
        <Link href={`/anime/${anime.id}`}>
          <a onClick={() => handleAnime(anime)}>
            <div className={styles.itemContainer}>
              <div className={styles.anime}>
                <span>{anime.dsTitulo}</span>
                <span className={styles.generos}>{novosGeneros}</span>
              </div>
              <div style={{ flex: 1, width: '50%' }}>
                <Image
                  width={100}
                  height={50}
                  src={`https://animesflix.tv/external/${anime.id}/${anime.dsImagemThumb}`}
                  alt={anime.dsTitulo} />
              </div>
            </div>
          </a>
        </Link>
      </div>
    )
  };

  return <div id="search-component" style={{ width: 320 }}>
    <input autoFocus={false} type="text" onBlur={resetFilter} onFocus={handleFilter} onChange={handleFilter}
      className={small ? styles.inputSearchSmall : styles.inputSearch} placeholder="Pesquisar"></input>
    <div style={{ position: 'absolute', width: small ? '90%' : 340 }}>
      {!!filtered && filtered.length > 0 && filtered.slice(0, 3).map((item) => renderItem(item))}
    </div>
  </div>
}

export default SearchComponent;