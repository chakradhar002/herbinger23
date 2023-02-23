import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService{
    private baseUrl = "http://localhost:8080/api/product";
    
    constructor(private http: HttpClient) { }


      //for add
        createProductServcie(product: Object): Observable<Object> {
          return this.http.post(`${this.baseUrl}`, product);
      }



}