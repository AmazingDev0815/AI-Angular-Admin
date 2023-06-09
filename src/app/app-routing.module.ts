import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/users/login/login.component";
import {TaskListComponent} from "./pages/tasks/task-list/task-list.component";
import {UserPhotoListComponent} from "./pages/user-photos/user-photo-list/user-photo-list.component";
import {UploadUserPhotoComponent} from "./pages/user-photos/upload-user-photo/upload-user-photo.component";
import {PromptListComponent} from "./pages/prompts/prompt-list/prompt-list.component";
import {CreatePromptComponent} from "./pages/prompts/create-prompt/create-prompt.component";
import {UserListComponent} from "./pages/users/user-list/user-list.component";
import {CreateUserComponent} from "./pages/users/create-user/create-user.component";
import {ImageCollectionListComponent} from "./pages/image-collection/list/list.component";
import {CreateTaskComponent} from "./pages/tasks/create-task/create-task.component";
import {DetailComponent} from "./pages/image-collection/detail/detail.component";
import {
  CreateStableDiffusionModelComponent
} from "./pages/stable-diffusion-model/create-stable-diffusion-model/create-stable-diffusion-model.component";
import {
  StableDiffusionModelListComponent
} from "./pages/stable-diffusion-model/stable-diffusion-model-list/stable-diffusion-model-list.component";
import {AuthorizationGuard} from "./guard/authorization.guard";
import {PaymentComponent} from "./pages/payment/payment/payment.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users/login' },
  { path: 'users/login', component: LoginComponent},
  { path: 'google-oauth', component: LoginComponent},
  { path: 'users/create', component: CreateUserComponent},
  { path: 'users/list', component: UserListComponent , canActivate: [AuthorizationGuard]},
  { path: 'user-photos/list', component: UserPhotoListComponent , canActivate: [AuthorizationGuard]},
  { path: 'user-photos/upload', component: UploadUserPhotoComponent , canActivate: [AuthorizationGuard]},
  { path: 'tasks/:user', component: TaskListComponent , canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always'},
  { path: 'tasks/list', component: TaskListComponent , canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always'},
  { path: 'create-task', component: CreateTaskComponent , canActivate: [AuthorizationGuard]},
  { path: 'prompts/list', component: PromptListComponent , canActivate: [AuthorizationGuard]},
  { path: 'prompts/create', component: CreatePromptComponent , canActivate: [AuthorizationGuard]},
  { path: 'prompts/update/:id', component: CreatePromptComponent , canActivate: [AuthorizationGuard]},
  { path: 'collections/:user', component: ImageCollectionListComponent , canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always'},
  { path: 'collections/list', component: ImageCollectionListComponent , canActivate: [AuthorizationGuard], runGuardsAndResolvers: 'always'},
  { path: 'collections/detail/:id', component: DetailComponent , canActivate: [AuthorizationGuard]},
  { path: 'stable-diffusion-models/create', component: CreateStableDiffusionModelComponent, canActivate: [AuthorizationGuard] },
  { path: 'stable-diffusion-models/list', component: StableDiffusionModelListComponent , canActivate: [AuthorizationGuard]},
  { path: 'payment', component: PaymentComponent , canActivate: [AuthorizationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
