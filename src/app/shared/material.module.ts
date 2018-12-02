import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule } from '@angular/material';

const materialDependencies = [
  MatButtonModule,
  MatGridListModule
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
