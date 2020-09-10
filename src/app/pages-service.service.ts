import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PagesServiceService {
  constructor(private http: HttpClient) {}

  getHome() {
    return this.http.get("http://localhost/stock/wp-json/wp/v2/pages/13");
  }
}
