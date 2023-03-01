import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Product} from ""

const baseUrl = "http://localhost:8080";
@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor(private http:HttpClient){}
    createProductService(product:Product){

    }
}