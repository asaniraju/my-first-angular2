import{NgModule} from '@angular/core'
import{BrowserModule} from '@angular/platform-browser'
import{FormsModule} from '@angular/forms'

import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';

import{AppComponent} from './app.component'


@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations:[AppComponent, HomeComponent, AboutComponent],
	bootstrap:[AppComponent]
})

export class AppModule{

}