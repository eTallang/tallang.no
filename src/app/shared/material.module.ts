import { NgModule } from '@angular/core';
import { MdButtonModule } from '@angular/material';

const materialDependencies = [
  MdButtonModule
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
