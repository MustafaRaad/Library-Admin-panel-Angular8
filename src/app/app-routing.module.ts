import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: "",redirectTo:"signin" ,pathMatch: "full"},
  { path: "signin", component:SignInComponent },
  { path: "dashboard", component:DashboardComponent },
  { path: "books", component:BooksComponent },
  { path: "articles", component:ArticlesComponent },
  { path: "notifications", component:NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
