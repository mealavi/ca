import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {InputComponent} from './input/input.component';
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";


const materialComponent: any[] | Type<any> = [
  MatSlideToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    materialComponent,
  ],
  exports: [InputComponent, CardComponent]

})
export class ComponentModuleModule {
}
