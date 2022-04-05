import { React, useEffect, useRef, useState } from 'react';
import { AnimesContext, defaultAnimeContext } from '../src/context/anime-context';
import animeListState from '../pages/api/AnimeListState';
import Footer from './footer';
import NavBar from '../src/components/nav-bar/navbar-component';
import SplashScreen from '../src/components/splash-screen/splash-screen';

const Layout = ({ children }) => {
  const [blackHeader, setBlackHeader] = useState(false);
  const { state } = animeListState();
  const [stateFilter, setStateFilter] = useState([]);
  const [timeStart, setTimeStart] = useState(0);

  const [context, setContext] = useState(defaultAnimeContext);
  const contextRef = useRef();
  contextRef.current = context;

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    setTimeout(() => setTimeStart(1), 1000);
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])

  useEffect(async () => {
    const animesfiltrados = state.generos.map(genero => {
      const animesGenero = state.animes.filter(anime => {
        const generoSplit = anime.generos.split(',');
        return generoSplit.includes(genero);
      });
      return {
        genero,
        animes: animesGenero
      };
    }).filter(anime => anime.animes.length > 0);

    setStateFilter(animesfiltrados);
    setContext((context) => ({ ...contextRef.current, stateFilter: animesfiltrados, mainData: state }));
  }, [state.generos, state.animes]);

  return (
    <>
      {timeStart === 1 ?
        <AnimesContext.Provider value={{ context, setContext }}>
          <NavBar black={blackHeader} />
          {children}
          <Footer />
        </AnimesContext.Provider>
        : <SplashScreen />
      }
    </>
  )
}

export default Layout