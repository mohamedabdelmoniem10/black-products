import { Component, OnInit } from "@angular/core";
import { PagesServiceService } from "../../pages-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private pages: PagesServiceService) {}

  result;
  render;
  ngOnInit() {
    this.pages.getHome().subscribe((res) => {
      this.result = res;
      console.log("this is the result from the backend", res);
      this.render = this.result.excerpt.rendered;
    });
  }
}
