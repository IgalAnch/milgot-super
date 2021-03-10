import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export var ROUTES: RouteInfo[] = [
  // this is a CONST not a VAR. testing!
  { path: "/dashboard", title: "Main", icon: "pe-7s-graph", class: "" },
  //{ path: "/categories", title: "Categories", icon: "pe-7s-note2", class: "" },
  { path: "/users", title: "Users", icon: "pe-7s-note2", class: "" },
  // v
  // THIS EXISTS //{ path: "/product", title: "Product", icon: "pe-7s-user", class: "" },
  // ^
  { path: "/user", title: "Profile", icon: "pe-7s-user", class: "" },
  //{ path: "/test", title: "Test", icon: "", class: "" }, //TEST
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem); //IMPORTANT

    /////////////REMOVE AFTER

    //this.testONLY_deleteMenu();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ////////////////////////////////NON-IMPORTANT TEST STUFF DELETE AFTER

  /**>>> REMOVE THIS FUNCTION */
  testONLY_deleteMenu() {
    this.menuItems = [{ path: "/test", title: "Test", icon: "", class: "" }];
  }

  /**RESTORE SIDEBAR BUTTONS BUTTON */
  clickToEnableSidebarButtons() {
    this.menuItems = [
      { path: "/dashboard", title: "Main", icon: "pe-7s-graph", class: "" },
      {
        path: "/categories",
        title: "Categories",
        icon: "pe-7s-note2",
        class: "",
      },
      { path: "/products", title: "products", icon: "pe-7s-note2", class: "" },
      { path: "/user", title: "Profile", icon: "pe-7s-user", class: "" },
      { path: "/test", title: "Test", icon: "", class: "" },
    ];
  }
}
