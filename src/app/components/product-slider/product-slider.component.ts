import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input() imgArr;
  constructor() { }

  clicked = 0;
  imgClicked(img, i) {
    console.log('this is the image',img);
    this.clicked = i;
    console.log('this is the index', i);
  }
  next() {
    if(this.clicked == this.imgArr.length -1) {
      console.log('this si the from clicked', this.clicked);
      this.clicked = 0;
    }else{
      this.clicked += 1;
    }
  }
  prev() {
    if(this.clicked == 0) {
      this.clicked = this.imgArr.length - 1;
    }else{
      this.clicked -= 1;
    }
  }


  ngOnInit() {
  }

}
