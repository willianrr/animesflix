import http from "../config/http-config";
import FileNameConst from "../consts/file-name-const";
import BaseService from './base-service';

export default class AnimeService extends BaseService {
  constructor() {
    super();
  }

  getAll = () => http.create().get(FileNameConst.ANIMES + '.json').then((response) => {
    this.animes = JSON.parse(this.fileReaderUtil.decode(response.data.data));
    return this.animes.filter(anime => anime && anime.temporadas && anime.episodios && anime.generos && anime.generos.length > 0);
  })

  findById = async (id) => {
    const fn = (data) => {
      try {
        return data.filter(animes => animes.id === id)[0];
      } catch (e) {
        return null;
      }
    };
    if (!this.animes) {
      return this.getAll().then((animes) => fn(animes))
    }
    return Promise((resolve, reject) => resolve(fn(this.animes)));
  }
}