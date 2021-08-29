import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GConsole } from "@consoles/api-interfaces";
import { ConsoleEnvironment, CONSOLE_ENVIRONMENT } from "@consoles/environment";


@Injectable({
  providedIn: 'root'
})
export class ConsolesService {
  model = 'consoles';

  constructor(
    private httpClient: HttpClient,
    @Inject(CONSOLE_ENVIRONMENT) private environment: ConsoleEnvironment
  ) {}

  all() {
    return this.httpClient.get<GConsole[]>(this.getUrl())
  };

  find(consoleId: string) {
    return this.httpClient.get<GConsole>(this.getUrlById(consoleId))
  };

  create(consoles: GConsole) {
    return this.httpClient.post<GConsole>(this.getUrl(), consoles)
  };

  update(consoles: GConsole) {
    return this.httpClient.patch<GConsole>(this.getUrlById(consoles.id), consoles)
  };

  delete({ id }: GConsole) {
    return this.httpClient.delete<GConsole>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}