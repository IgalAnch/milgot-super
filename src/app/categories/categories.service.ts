import { Injectable } from "@angular/core";

//Apollo gql
import { Apollo, gql } from "apollo-angular";

import { map, filter } from "rxjs/operators";
import { Router } from "@angular/router";

// declare interface okObj {
//   __typename: string;
//   id: number;
//   typename: string;
// }

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private apollo: Apollo) {}

  productTypes = [];
  productTypes_pageInd = [];
  productTypes_products = {};
  currentTab = null;

  async getProductTypes() {
    let productTypes_query = gql`
      query {
        getProductTypes {
          id
          typename
          amount
        }
      }
    `;
    let ap = this.apollo //REMOVED UNNECESSARY AWAIT *****************************
      .watchQuery({
        query: productTypes_query /*this.GET_PRODUCT*/,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.getProductTypes))
      .subscribe((result) => {
        console.log(result);
        this.productTypes = result; //
        for (let i = 0; i < this.productTypes.length; i++) {
          this.productTypes_pageInd.push(0);
        }
      });
  }
}
