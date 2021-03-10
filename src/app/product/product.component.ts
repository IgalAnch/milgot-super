import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ok } from "assert";
import { PRIORITY_ABOVE_NORMAL } from "constants";
import { astFromValue } from "graphql";
import { type } from "os";
import { ProductsService } from "../users/users.service";

let a = new Array(256)
  .fill(0)
  .map((_, i) => ++i)
  .join(" | ");
console.log("hi!!!");
console.log(a);
let b = eval(a);

type MP = typeof b;
type AP = typeof b;

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    public prod: ProductsService,
    private router: Router
  ) {
    this.ogRedirect();
    // this._Activatedroute.paramMap.subscribe((params) => {
    //   this.id = params.get("id");
    //   //this.product.properties.push( params.get('id') );
    // });
  }

  ngOnInit() {}

  ogRedirect() {
    if (this.prod.product == null) {
      this.router.navigate(["products"]);
    }
  }
  id;
  //og
  translation() {
    //PRIORITY_ABOVE_NORMAL(){} dfqisthis
    this.actionPrio();
  }
  actionPrio() {
    let rabbit: AP = 2;
    let unnatural: MP = 1;
    let inf: AP = 5;
    let leth: AP = 4;
  }
}
