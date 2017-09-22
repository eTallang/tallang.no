import { NgModule } from '@angular/core';
import { MdButtonModule, MdSnackBarModule } from '@angular/material';

const materialDependencies = [
  MdButtonModule,
  MdSnackBarModule
];

@NgModule({
  imports: [
    materialDependencies
  ],
  exports: [
    materialDependencies
  ]
})
export class MaterialModule { }
