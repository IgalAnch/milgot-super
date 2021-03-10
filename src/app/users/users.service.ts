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
export class ProductsService {
  constructor(private apollo: Apollo, private router: Router) {}

  products = [];

  product;

  productId;

  //*toss items in restricted area
  //*wingman for others (help raft food etc)
  //*healing pots
  //*find things to do in the 2 nearby areas near team
  //*craft weps to be more reliable cleanup for the team
  //*do clear runs for oil+lighter factory-docks-uptown + bears
  //*give trap matts to dirvine so he gets mastery
  //*pickup cameras in uptown, ?, ?
  //*tell drivine 'bout pputting trap near wall(or camera) for explosive E
  async getProducts() {
    let fetchProducts_query = gql`
      query {
        productAll {
          id
          name
          type
          image
          properties {
            id
            text
          }
        }
      }
    `;
    let ap = await this.apollo
      .watchQuery({
        query: fetchProducts_query /*this.GET_PRODUCT*/,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.productAll))
      .subscribe((result) => {
        console.log(result);
        this.products = result; //
      });
  }

  redirectToProduct(ro) {}

  getOneProduct(idInput) {
    let getProduct_query = gql`
      query OK($id: Int!) {
        product(id: $id) {
          id
          name
          type
          image
          properties {
            id
            text
          }
        }
      }
    `;
    let vars = {
      id: idInput,
    };
    //alley:
    //- hammer(x2), cross, shoes (x2), [oil]       <garlic(1/2), honey(1/2), lighter(1/2)>
    //    {4 + <2>}

    //factory:
    //- scrap x2(x3), goggles, bandage, nail    | battery, glue     ||[nail(1/2)]
    //    {4 + 2 + 1 + <2> +[1] }
    //::: Arondite, Rhino

    //chapel:
    //- Helmet, grail, cross, box  |  (bottle , piano wire, paper)
    //    {}
    //::: Mhelmet, Mag,

    //cemetery:
    //- Iron, Feather, ClothArmor (x2)                  ||[mouse trap]
    //::: Holy armor

    // uptown >>missing  |  "pen, watch"  |   ribbon[Moonstone pendant]

    //hospital:
    //- scrap metal , ;needle + alcohol;  | glue
    let ap = this.apollo
      .watchQuery({
        query: getProduct_query /*this.GET_PRODUCT*/,
        variables: vars,
        fetchPolicy:
          "network-only" /*for test purposes. this emits cache fetch*/,
      })
      .valueChanges.pipe(map((result: any) => result.data.product))
      .subscribe((result) => {
        console.log(result);
        this.product = result;
        this.router.navigate(["/product"]);
      });
  }
}
