import { NgModule } from '@angular/core';
import { MdButtonModule, MdGridListModule } from '@angular/material';

const materialDependencies = [
  MdButtonModule,
  MdGridListModule
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
