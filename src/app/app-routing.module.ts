import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponent } from './article/article.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminGuard } from './guards/admin.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateArticleComponent, canActivate: [AuthGuard] },
  { path: 'edit-article', component: EditArticleComponent, canActivate: [AuthGuard] },
  { path: 'articles', component: ArticleComponent, canActivate: [AuthGuard] },
  { path: 'articles/:id', component: ArticleDetailsComponent, canActivateChild: [AuthGuard] },
  { path: 'edit/:id', component: EditArticleComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
