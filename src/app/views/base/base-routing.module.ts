import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcataComponent } from './addcata/addcata.component';


import { FormsComponent } from './forms.component';


import { TablesComponent } from './tables.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Menu'
    },
    children: [
      {
        path: 'Add_Cata',
        component: AddcataComponent,
        data: {
          title: 'Add category'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
