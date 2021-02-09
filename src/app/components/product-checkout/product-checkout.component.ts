import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetDataServiceService } from 'src/app/get-data-service.service';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit {
  @Input() product;

  cities = ['القاهرة', 'العاشر من رمضان', '6 أكتوبر', 'العين السخنة', 'الدقهلية', 'الغربية', 'الإسكندرية', 'أسوان', 'أسيوط', 'البحيرة', 'بني سويف', 'دهب', 'دمنهور', 'دمياط', 'الشرقية', 'الفيوم', 'الجيزة', 'الجونة', 'الغردقة', 'الإسماعيلية', 'كفر الشيخ', 'الأقصر', 'المحلة الكبرى', 'المنصورة', 'مرسى علم', 'مرسى مطروح', 'إلمنيا', 'المنوفية', 'الوادي الجديد', 'الساحل الشمالي', 'شمال سيناء', 'بور سعيد', 'القليويبية', 'قنا', 'قليوب', 'رأس غارب', 'رأس سدر', 'سفاجة', 'شرم الشيخ', 'سوهاج', 'السويس', 'طابا', 'طنطا', 'طور سيناء']
  productName = "اسم المنتج";
  // productPrice = 190;
  shipping = 30;
  // totalPayment = this.product.price + this.shipping;
  convertToInt(val) {
    return parseInt(val);
  }

  constructor(
    private _Activatedroute: ActivatedRoute,
    private service: GetDataServiceService,
    private fb: FormBuilder
  ) { }


  orderForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    order_comments: [''],
    line_items: [
      {
        // product_id: ,
        quantity: 1
      }
    ],
  })

  get orderFormControl() {
    return this.orderForm.controls;
  }
  postOrder() {
    // this.service.postAnOrder({ ...this.orderForm.value, }).subscribe(res => {
    //   console.log('this is the response', res);
    // })
  }
  submitOrder() {
    if (this.orderForm.valid) {
      console.log('this is from valid and its value equal', this.orderForm.value);
      // this.postOrder();
    } else {
      // this.orderFormControl.name.touched = true;
      // this.orderFormControl.phone.touched = true;
      // this.orderFormControl.city.touched = true;
      // this.orderFormControl.address.touched = true;
      // console.log('this is the orderFormControl.name.errors', this.orderFormControl.name.errors);
      // console.log('this is the orderFormControl.phone.errors', this.orderFormControl.phone.errors);
      // console.log('this is the orderFormControl.city.errors', this.orderFormControl.city.errors);
      // console.log('this is the orderFormControl.address.errors', this.orderFormControl.address.errors);
      // console.log('this is the orderFormControl.address.touched', this.orderFormControl.address.touched);
      console.log('please valid your form fields');
    }
  }

  // orderData = {
  //   "payment_method": "bacs",
  //   "payment_method_title": "Direct Bank Transfer",
  //   "set_paid": true,
  //   "billing": {
  //     "first_name": "mohamed",
  //     "last_name": "abdelmoniem",
  //     "address_1": "969 Market",
  //     "address_2": "",
  //     "city": "San Francisco",
  //     "state": "CA",
  //     "postcode": "94103",
  //     "country": "US",
  //     "email": "mohamedabdelmoniem10@gmail.com",
  //     "phone": "01111798451"
  //   },
  //   "shipping": {
  //     "first_name": "John",
  //     "last_name": "Doe",
  //     "address_1": "969 Market",
  //     "address_2": "",
  //     "city": "San Francisco",
  //     "state": "CA",
  //     "postcode": "94103",
  //     "country": "US"
  //   },
  //   "line_items": [
  //     {
  //       "product_id": 93,
  //       "quantity": 2
  //     },
  //     {
  //       "product_id": 22,
  //       "variation_id": 23,
  //       "quantity": 1
  //     }
  //   ],
  //   "shipping_lines": [
  //     {
  //       "method_id": "flat_rate",
  //       "method_title": "Flat Rate",
  //       "total": "10.00"
  //     }
  //   ]
  // };




  validationMethod(e) {
    console.log(this.orderForm.valid)
    console.log(e)

  }

  productId;
  ngOnInit() {
    // this.service.getProductId(this._Activatedroute.snapshot.paramMap.get('slug')).subscribe(res => {
    //   this.productId = res.id;
    // })
    // this.postOrder();
  }

}
