import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private httpClient: HttpClient) { }

  getDomain = (domain: string) => {
    const jsonUrl = 'assets/mock/auth/domain.json';
    return this.httpClient.get<any>(jsonUrl);
  }
}
