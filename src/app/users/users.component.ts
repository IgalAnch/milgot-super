import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./users.service";
import { CategoriesService } from "../categories/categories.service";
import { Router } from "@angular/router";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
let obj = { n1: 5, n2: 6, n3: 7 };
let newKey = "abcdefg";
let newKey_value = `abcdefg's value`;
// obj[`${newKey}`] = newKey_value; // `${}` redundant
obj[newKey] = newKey_value; //shortened/correct
console.log(obj);

// let key = "z";
// let keyName = "name";
// let b = {};
// let { [key]: foo } = { z: "bar" };

// console.log(foo); // "bar"

let i = 0;
let a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: "asdasd" + i,
  ["foo" + ++i]: i,
};

console.log(a.foo2); // 1

let specifications = {};

@Component({
  selector: "app-products",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;

  constructor(
    public prod: ProductsService,
    public categ: CategoriesService,
    private router: Router
  ) {
    categ.getProductTypes();
    prod.getProducts();
  }

  ngOnInit() {}

  redirectToProd(id) {
    this.prod.productId = id;
    this.prod.getOneProduct(id);
  }
}
