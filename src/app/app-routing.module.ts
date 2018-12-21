import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {CustomRoutePreloader} from './custom-route-preloader';
import {AuthGuard} from './auth/auth.guard';
const routes:Routes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contacts',
    loadChildren:'./contacts/contacts.module#ContactsModule'
  },
  {
    path:'people',
    loadChildren:'./people/people.module#PeopleModule',
    data:{
      preload:true
    },
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'**',
    component:NotfoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy:PreloadAllModules
    preloadingStrategy:CustomRoutePreloader
  })],
  providers:[CustomRoutePreloader, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
