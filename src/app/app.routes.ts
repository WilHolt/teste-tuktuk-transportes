import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { HomeComponent } from './view/home/home.component';
import { ProductsComponent } from './view/home/products/products.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'produtos', component: ProductsComponent}

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
