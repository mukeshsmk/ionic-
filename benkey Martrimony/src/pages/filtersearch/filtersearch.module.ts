import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersearchPage } from './filtersearch';

@NgModule({
  declarations: [
    FiltersearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersearchPage),
  ],
})
export class FiltersearchPageModule {}
