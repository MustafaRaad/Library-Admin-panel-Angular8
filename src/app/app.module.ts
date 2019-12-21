import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderService } from './services/loader/loader.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './services/loader/loader.interceptor';

// components----
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { LoaderComponent } from './loader/loader.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent, 
    SignInComponent, DashboardComponent, BooksComponent, ArticlesComponent, NotificationsComponent, AddBookComponent, AddArticleComponent, AddNotificationComponent, LoaderComponent, UsersComponent, AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports: [SideBarComponent],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
