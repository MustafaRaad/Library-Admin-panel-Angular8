import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: "",redirectTo:"signin" ,pathMatch: "full"},
  { path: "signin", component:SignInComponent },
  { path: "dashboard", component:DashboardComponent },
  {path: "books", component:BooksComponent, children: [
    // {path: "add-book",component: AddBookComponent}
]
  },
  {path: "add-book",component: AddBookComponent},
  { path: "articles", component:ArticlesComponent },
  { path: "notifications", component:NotificationsComponent },
  { path: "add-article", component:AddArticleComponent },
  { path: "add-notification", component:AddNotificationComponent },
  { path: "users", component:UsersComponent },
  { path: "add-user", component:AddUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
