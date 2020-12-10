import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import backendless from 'backendless';
import { environment } from 'src/environments/environment';
import { UploadComponent } from './upload/upload.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponent } from './article/article.component';

backendless.initApp(environment.backendless.APP_ID, environment.backendless.API_KEY);



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    CreateArticleComponent,
    EditArticleComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    ArticleDetailsComponent,
    ArticleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
