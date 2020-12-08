import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import backendless from 'backendless';
import { environment } from 'src/environments/environment';
import { UploadComponent } from './upload/upload.component';

backendless.initApp(environment.backendless.APP_ID, environment.backendless.API_KEY);



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    SingleArticleComponent,
    CreateArticleComponent,
    EditArticleComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // { provide: BUCKET, useValue: 'yours' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
