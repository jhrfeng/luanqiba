import {Injectable} from '@angular/core';
import {HttpService} from "../providers/HttpService";

@Injectable()
export class ServerService {
  APP_SERVE_URL: string = "http://192.168.1.108:3000/";

  constructor(private httpService: HttpService) {
  }

  getGold() {
    return this.httpService.getServer(this.APP_SERVE_URL + 'auGold');
  }

  getUsaMoney() {
    return this.httpService.getServer(this.APP_SERVE_URL + 'usaMoney');
  } 

}
