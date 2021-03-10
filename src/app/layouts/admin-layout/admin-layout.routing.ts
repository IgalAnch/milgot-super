import { Routes } from "@angular/router";

import { HomeComponent } from "../../home/home.component";
import { UserComponent } from "../../user/user.component";
import { UsersComponent } from "../../users/users.component";
import { CategoriesComponent } from "../../categories/categories.component"; //
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { ProductComponent } from "../../product/product.component";
import { TestComponent } from "../../test/test.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: HomeComponent },
  { path: "users", component: UsersComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "user", component: UserComponent },
  { path: "product", component: ProductComponent },
  { path: "test", component: TestComponent },
];

//{ path: "typography", component: TypographyComponent },
//{ path: "icons", component: IconsComponent },
//{ path: "maps", component: MapsComponent },
//{ path: "notifications", component: NotificationsComponent },
//{ path: "upgrade", component: UpgradeComponent },
