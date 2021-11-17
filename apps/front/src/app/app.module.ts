import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddpetComponent } from './addpet/addpet.component';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path : 'list',
    component : ListPetsComponent
  },
  {
    path : 'create',
    component : AddpetComponent
  }
]

@NgModule({
  declarations: [AppComponent, AddpetComponent, ListPetsComponent],
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule, BrowserModule, RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
