import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HelloComponent } from './hello.component';
import { CategoryPipe } from './category.pipe'
import { FormsModule } from '@angular/forms';
import { TimeSeriesChartComponent } from './time-series-chart/time-series-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HelloComponent, CategoryPipe, TimeSeriesChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
