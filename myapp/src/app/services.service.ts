import { HttpClient } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesService implements PipeTransform {
  constructor(private httpClient: HttpClient) {}
  jsonObj: any = [];
  onAdminValidate() {
    return this.httpClient.get('http://localhost/3000/admin').pipe(
      map((data) => {
        this.jsonObj = this.transform(data);
        console.log(this.jsonObj);
        return this.jsonObj;
      })
    );
  }

  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
