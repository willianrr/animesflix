import { useEffect, useState } from 'react';
import AnimeService from '../../src/services/anime-service';
import TemporadaService from '../../src/services/temporada-service';
import generos from './generos-mock';

const animeService = new AnimeService();
const temporadaService = new TemporadaService();

const animeListState = () => {
  const [state, setState] = useState({ animes: [], generos: [], temporadas: [] })
  useEffect(async () => {
    animeService.getAll().then(animes => {
      setState((state) => ({
        ...state,
        animes: animes,
        generos: generos
      }));
    }).then(temporadaService.getAll())
      .then(temporadas => {
        setState((state) => ({
          ...state,
          temporadas: temporadas
        }));
      });

  }, [])

  return { state }
}

export default animeListState;