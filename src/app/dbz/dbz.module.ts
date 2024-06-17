import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponet } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';




@NgModule({
  declarations: [
    MainPageComponet,
    ListComponent,
    FormComponent
  ],
  exports :[
    MainPageComponet
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
