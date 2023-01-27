import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from "./pages/users/login/login.component";
import {UploadUserPhotoComponent} from "./pages/user-photos/upload-user-photo/upload-user-photo.component";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CreateTaskComponent} from "./pages/tasks/create-task/create-task.component";
import {TaskListComponent} from "./pages/tasks/task-list/task-list.component";
import {TaskDetailComponent} from "./pages/tasks/task-detail/task-detail.component";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzModalModule} from "ng-zorro-antd/modal";
import {UserPhotoListComponent} from "./pages/user-photos/user-photo-list/user-photo-list.component";
import {NzImageModule} from "ng-zorro-antd/image";
import {PromptListComponent} from "./pages/prompts/prompt-list/prompt-list.component";
import {CreatePromptComponent} from "./pages/prompts/create-prompt/create-prompt.component";
import {UserListComponent} from "./pages/users/user-list/user-list.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {CreateUserComponent} from "./pages/users/create-user/create-user.component";
import {ImageCollectionListComponent} from "./pages/image-collection/list/list.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {DetailComponent} from "./pages/image-collection/detail/detail.component";
import {
  StableDiffusionModelListComponent
} from "./pages/create-stable-diffusion-mode/stable-diffusion-model-list/stable-diffusion-model-list.component";
import {
  CreateStableDiffusionModelComponent
} from "./pages/create-stable-diffusion-mode/create-stable-diffusion-model/create-stable-diffusion-model.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPhotoListComponent,
    PromptListComponent,
    CreatePromptComponent,
    UploadUserPhotoComponent,
    CreateTaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    UserListComponent,
    CreateUserComponent,
    ImageCollectionListComponent,
    DetailComponent,
    StableDiffusionModelListComponent,
    CreateStableDiffusionModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzUploadModule,
    NzModalModule,
    NzImageModule,
    NzTableModule,
    NzDividerModule,
    NzSelectModule,
    NzCheckboxModule,
    NzCardModule,
    NzTagModule,
    NzProgressModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
