import httpConfig from "../config/http-config";
import FileNameConst from "../consts/file-name-const";
import BaseService from "./base-service";

export default class EpisodioService extends BaseService {

  constructor() {
    super();
  }

  getAll = () => httpConfig.create().get(FileNameConst.EPISODIOS + '.json').then((response) => {
    this.animes = JSON.parse(this.fileReaderUtil.decode(response.data.data));
    return this.animes;
  })

  // fazer
  getByIdTemporadaAndIdAnime = (idTemporada, idAnime) => httpConfig.create().get(FileNameConst.EPISODIOS + '.json').then((response) => {
    this.animes = JSON.parse(this.fileReaderUtil.decode(response.data.data));
    return this.animes;
  })

}