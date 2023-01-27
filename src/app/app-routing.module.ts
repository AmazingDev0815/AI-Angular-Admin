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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users/login' },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: CreateUserComponent},
  { path: 'user-photos/list', component: UserPhotoListComponent },
  { path: 'user-photos/upload', component: UploadUserPhotoComponent },
  { path: 'collections/list', component: ImageCollectionListComponent },
  { path: 'tasks/list', component: TaskListComponent },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'prompts/list', component: PromptListComponent },
  { path: 'prompts/create', component: CreatePromptComponent },
  { path: 'collections/detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
