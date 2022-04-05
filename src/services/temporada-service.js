import httpConfig from "../config/http-config";
import FileNameConst from "../consts/file-name-const";
import BaseService from "./base-service";

export default class TemporadaService extends BaseService {

  constructor() {
    super();
  }

  getAll = () => httpConfig.create().get(FileNameConst.TEMPORADAS + '.json').then((response) => {
    this.temporadas = JSON.parse(this.fileReaderUtil.decode(response.data.data));
    return this.temporadas;
  })

}