import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
// import { CardtempComponent } from './task-form/cardtemp/cardtemp.component';
import { TaskFourm1Component } from './task-fourm1/task-fourm1.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    
    TaskFourm1Component
  ],
  imports: [ 
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
