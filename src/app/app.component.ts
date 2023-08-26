import { AfterViewInit, Component, NgZone, OnDestroy } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  records: Array<any>;
  tab1: Array<any>;
  isDesc: boolean = false;
  column: string = 'Name';
  column2: string = 'SiteA';
  searchText;
  categoris: ['Cheeses', 'Beverages']
  constructor(private zone: NgZone) { }
  private chart: am4maps.MapChart;
  ngOnInit() {
   //Table1 one record
    this.records = [
      { Name: "SiteA", Latitude: "37.0°N", Longitude: "121.0°W", Elevation: "SiteA", City: "37.0°N", State: "121.0°W", SystemCapacity: "SiteA", Timeoffset: "37.0°N" },
      { Name: "SiteB", Latitude: "35.85N", Longitude: "114.97W", Elevation: "SiteA", City: "37.0°N", State: "121.0°W", SystemCapacity: "SiteA", Timeoffset: "37.0°N" },
    ];
    //Table two records
    this.tab1 = [
      { TimeStamps: "6/1/2023 15:10", Temparature: "21", Battery: "1.2" },
      { TimeStamps: "6/2/2023 15:10", Temparature: "33", Battery: "1.6" },
      { TimeStamps: "6/3/2023 15:10", Temparature: "19", Battery: "2.4" },
      { TimeStamps: "6/4/2023 15:10", Temparature: "22", Battery: "5.6" },
      { TimeStamps: "6/5/2023 15:10", Temparature: "26", Battery: "3.3" },
      { TimeStamps: "6/6/2023 15:10", Temparature: "35", Battery: "7.8" },
      { TimeStamps: "6/7/2023 15:10", Temparature: "41", Battery: "9.1" }
    ];
    
    this.tab1 = [
      { TimeStamps: "6/1/2023 15:10", Temparature: "77", Battery: "0.6",Turbidity:"231" },
      { TimeStamps: "6/2/2023 15:10", Temparature: "36", Battery: "2.3" ,Turbidity:"126"},
      { TimeStamps: "6/3/2023 15:10", Temparature: "43", Battery: "4.7" ,Turbidity:"180"},
      { TimeStamps: "6/4/2023 15:10", Temparature: "54", Battery: "8.8",Turbidity:"97" },
      { TimeStamps: "6/5/2023 15:10", Temparature: "17", Battery: "4.1",Turbidity:"112" },
      { TimeStamps: "6/6/2023 15:10", Temparature: "33", Battery: "1.2" ,Turbidity:"337"},
      { TimeStamps: "6/7/2023 15:10", Temparature: "29", Battery: "7.4",Turbidity:"269" }
    ];
    // this.sort(this.column);
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);

      // Create a chart instance
      const chart = am4core.create("chartDiv", am4charts.XYChart);
      chart.logo.disabled = true;
      chart.paddingRight = 20;

      // Set up data
      chart.data = [
        { date: new Date("2023-01-01"), value: 100 },
        { date: new Date("2023-01-02"), value: 150 },
        { date: new Date("2023-01-03"), value: 200 },
        // ... add more data points
      ];

      // Create date axis
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());

      // Create value axis
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";

      // Add a cursor
      chart.cursor = new am4charts.XYCursor();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  public ascNumberSort = true;
  public sortNumberColumn(property) {
    console.log(property);
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.records.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

  sort(property) {
    console.log(property);
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.records.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
    console.log(this.records)
    const chart = am4core.create("chartDiv", am4charts.XYChart);
    chart.paddingRight = 20;

    // Set up data
    chart.data = [
      { date: new Date("2023-01-01"), value: 100 },
      { date: new Date("2023-01-02"), value: 150 },
      { date: new Date("2023-01-03"), value: 200 },
      // ... add more data points
    ];

    // Create date axis
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";

    // Add a cursor
    chart.cursor = new am4charts.XYCursor();
  };

}