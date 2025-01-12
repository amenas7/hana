import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  registerData(params: any): any {

    const options = { observe: 'response' as 'body' };

    return this.http.post(`https://alvarodev.store/api/send_data.php`, params, options);

  }

  findData(): any {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'a1522da86b414b539f96734bc6b1ece6',
    });

    return this.http.get(
      `https://skynet-api-dev.azure-api.net/alimarket-exp-distributor-v1/v1?society-id=864&location-id=0286`, 
      { headers }
    ).pipe(
      map((data: Array<any>) => data)
    );

  }

}
