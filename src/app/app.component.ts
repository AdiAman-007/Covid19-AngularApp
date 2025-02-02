import { Component, OnInit, NgZone, Input, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_indiaHigh from "@amcharts/amcharts4-geodata/india2019High";
import { AppService } from './app.service';
import { fileURLToPath } from 'url';

am4core.useTheme(am4themes_animated);

interface _summaryData{
  active:string,
  confirmed:string,
  deaths:string,
  lastupdatedtime:string,
  recovered:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'covid19';
  summaryData:any;
  prevDayData:any;
  timeSeriesData:any;
  testedSummary:any;
  stateData:any;

  weeklyData:any = [];
  chartTotalConfirmedWeekly:any = [];
  chartTotalActiveWeekly:any = [];
  chartTotalRecoveredWeekly:any = [];
  chartTotalDeathsWeekly:any = [];

  chartDailyConfirmed:any = [];
  chartDailyActive:any = [];
  chartDailyRecovered:any = [];
  chartDailyDeaths:any = [];
  
  mapDataConfirmed = [];
  mapDataActive = [];
  mapDataRecovered = [];
  mapDataDeaths = [];

  monthlyData:any = [];

  searchText:string = "";
  
  black = false;
  green = false;
  red = false;
  blue = false;

  chartMap:any;
  trendChart1:any;
  categoryAxis:any;
  valueAxis:any;

  setResponsiveTable="";

  cumulative:boolean;

  constructor(private appService:AppService, private zone:NgZone){

    this.blue = true;
    this.cumulative = true;
    if(screen.width<500){
      this.setResponsiveTable="table-responsive";
    }
  }

  ngOnInit(){
    try{
      this.fetchData();
      this.trendChart1 = am4core.create("trendchart1", am4charts.XYChart);
      this.categoryAxis = this.trendChart1.xAxes.push(new am4charts.CategoryAxis());
      this.valueAxis = this.trendChart1.yAxes.push(new am4charts.ValueAxis());

      this.chartMap = am4core.create("mapdiv", am4maps.MapChart);
  
      // Set map definition
      this.chartMap.geodata = am4geodata_indiaHigh;
      // Set projection
      this.chartMap.projection = new am4maps.projections.Miller();
    }
    catch(err){
      console.log(err);
    }
  }

  ngAfterViewInit(){
    if(screen.width<500){
      this.setResponsiveTable="table-responsive";
    }
    this.drawMap();
    if(this.blue && this.cumulative){
      this.drawTrendChart1(this.chartTotalConfirmedWeekly);
    }
    else if(this.red && this.cumulative){
      this.drawTrendChart1(this.chartTotalActiveWeekly);
    }
    else if(this.green && this.cumulative){
      this.drawTrendChart1(this.chartTotalRecoveredWeekly);
    }
    else if(this.black && this.cumulative){
      this.drawTrendChart1(this.chartTotalDeathsWeekly);
    }
    else if(this.blue && !this.cumulative){
      this.drawTrendChart1(this.chartDailyConfirmed);
    }
    else if(this.red && !this.cumulative){
      this.drawTrendChart1(this.chartDailyActive);
    }
    else if(this.green && !this.cumulative){
      this.drawTrendChart1(this.chartDailyRecovered);
    }
    else if(this.black && !this.cumulative){
      this.drawTrendChart1(this.chartDailyDeaths);
    }
  }

  fetchData(){
    this.appService.getSummary()
    .subscribe((res:any)=>{
      this.prevDayData = JSON.parse(JSON.stringify(res.cases_time_series[res.cases_time_series.length-1]));
      this.summaryData = JSON.parse(JSON.stringify(res.statewise[0]));
      this.prevDayData.totalActive = (Number(this.summaryData.confirmed) - (Number(this.summaryData.recovered) + Number(this.summaryData.deaths))).toString();
      this.prevDayData.dailyActive = (Number(this.prevDayData.dailyconfirmed) - (Number(this.prevDayData.dailyrecovered) + Number(this.prevDayData.dailydeceased))).toString();

      this.stateData = JSON.parse(JSON.stringify(res.statewise));

      this.timeSeriesData = JSON.parse(JSON.stringify(res.cases_time_series));

      for(let weekCount=this.timeSeriesData.length; weekCount>=1; weekCount--){
        this.chartTotalConfirmedWeekly.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].totalconfirmed),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartTotalActiveWeekly.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].totalconfirmed - (Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].totalrecovered) + Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].totaldeceased ))),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartTotalRecoveredWeekly.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].totalrecovered),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartTotalDeathsWeekly.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].totaldeceased),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartDailyConfirmed.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].dailyconfirmed),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartDailyActive.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].dailyconfirmed - (Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].dailyrecovered) + Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].dailydeceased ))),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartDailyRecovered.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].dailyrecovered),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
        this.chartDailyDeaths.push({
          "value":Number(this.timeSeriesData[this.timeSeriesData.length-weekCount].dailydeceased),
          "date":this.timeSeriesData[this.timeSeriesData.length-weekCount]['date'].slice(0,6),
        });
      }

      for(let i=0; i<this.stateData.length; i++){
        if(this.stateData[i]['statecode']!="LA"){
          this.mapDataConfirmed.push({id:"IN-"+this.stateData[i]['statecode'], value: Number(this.stateData[i]['confirmed'])});
          this.mapDataActive.push({id:"IN-"+this.stateData[i]['statecode'], value: Number(this.stateData[i]['active'])});
          this.mapDataRecovered.push({id:"IN-"+this.stateData[i]['statecode'], value: Number(this.stateData[i]['recovered'])});
          this.mapDataDeaths.push({id:"IN-"+this.stateData[i]['statecode'], value: Number(this.stateData[i]['deaths'])});
        }
        else{
          this.mapDataConfirmed.push({id:"IN-LK", value:Number(this.stateData[i]['confirmed'])});
          this.mapDataActive.push({id:"IN-LK", value:Number(this.stateData[i]['active'])});
          this.mapDataRecovered.push({id:"IN-LK", value:Number(this.stateData[i]['recovered'])});
          this.mapDataDeaths.push({id:"IN-LK", value:Number(this.stateData[i]['deaths'])});
        }
      }

      this.testedSummary = res.tested[res.tested.length-1];
    })
  }

  fetchDistrictData(){
    this.appService.getDistrictData().subscribe((res)=>{
    })
  }

  drawTrendChart1(data){
    this.trendChart1.data = data;
    if(this.blue){
      this.trendChart1.colors.list = [
        am4core.color("#5B86E5"),
      ];
    }
    else if(this.red){
      this.trendChart1.colors.list = [
        am4core.color("#dc3545"),
      ];
    }
    else if(this.green){
      this.trendChart1.colors.list = [
        am4core.color("#1D976C"),
      ];
    }
    else if(this.black){
      this.trendChart1.colors.list = [
        am4core.color("#757575"),
      ];
    }
    this.trendChart1.numberFormatter.numberFormat = "# a";
    this.categoryAxis.renderer.grid.template.location = 0;
    this.categoryAxis.dataFields.category = "date";
    this.categoryAxis.renderer.minGridDistance = 15;
    this.categoryAxis.renderer.grid.template.location = 0.5;
    this.categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    this.categoryAxis.renderer.labels.template.rotation = -90;
    this.categoryAxis.renderer.labels.template.horizontalCenter = "left";
    this.categoryAxis.renderer.labels.template.location = 0.5;

    this.categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })

    this.valueAxis.tooltip.disabled = true;
    this.valueAxis.renderer.ticks.template.disabled = true;
    this.valueAxis.renderer.axisFills.template.disabled = true;


    let series = this.trendChart1.series.push(new am4charts.ColumnSeries());

    series.dataFields.categoryX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.strokeDashArray = "1,3";
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";


    let bullet = series.bullets.create(am4charts.CircleBullet);

    this.trendChart1.cursor = new am4charts.XYCursor();

    this.trendChart1.scrollbarX = new am4core.Scrollbar();
    this.trendChart1.scrollbarX.minHeight = 15;

  }

  drawMap(){ 
      // Create map polygon series
      let polygonSeries = this.chartMap.series.push(new am4maps.MapPolygonSeries());  
      let lastSelected;
      let eventData;
      
      if(this.blue){
        polygonSeries.heatRules.push({
          property: "fill",
          target: polygonSeries.mapPolygons.template,
          "min": am4core.color("#ffffff"),
          "max": am4core.color("#5B86E5"),
          "maxValue": 20000
        });
        polygonSeries.data = this.mapDataConfirmed;
        polygonSeries.mapPolygons.template.stroke = am4core.color("#5B86E5");
      }
      else if(this.green){
        polygonSeries.heatRules.push({
          property: "fill",
          target: polygonSeries.mapPolygons.template,
          "min": am4core.color("#ffffff"),
          "max": am4core.color("#1D976C"),
          "maxValue": 20000
        });
        polygonSeries.data = this.mapDataRecovered;
        polygonSeries.mapPolygons.template.stroke = am4core.color("#1D976C");
      }
      else if(this.red){
        polygonSeries.heatRules.push({
          property: "fill",
          target: polygonSeries.mapPolygons.template,
          "min": am4core.color("#ffffff"),
          "max": am4core.color("#dc3545"),
          "maxValue": 20000
        });
        polygonSeries.data = this.mapDataActive;
        polygonSeries.mapPolygons.template.stroke = am4core.color("#dc3545");
      }
      else if(this.black){
        polygonSeries.heatRules.push({
          property: "fill",
          target: polygonSeries.mapPolygons.template,
          "min": am4core.color("#FFFFFF"),
          "max": am4core.color("#757575"),
          "maxValue": 1000
        });
        polygonSeries.data = this.mapDataDeaths;
        polygonSeries.mapPolygons.template.stroke = am4core.color("#757575");
      }
  
      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;
  
      // Configure series tooltip
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.togglable = true;
      polygonTemplate.clickable = true;
      polygonTemplate.tooltipText = "{name}: {value}";
      polygonTemplate.nonScalingStroke = true;
      polygonTemplate.strokeWidth = 0.5;

      this.chartMap.seriesContainer.draggable = false;
      
      polygonTemplate.events.on("hit",(ev)=>{
        eventData = ev.target;
        if (lastSelected) {
          lastSelected.isActive = false;
        }
        ev.target.series.chart.zoomToMapObject(ev.target);
        if (lastSelected !== ev.target) {
          lastSelected = ev.target;
        }
        let stateSelected = ev.target.dataItem.dataContext.name.toString();
        this.searchText = stateSelected;
      });

      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      if(this.blue){
        hs.properties.fill = am4core.color("#465982");
      }
      else if(this.red){
        hs.properties.fill = am4core.color("#c4878c");
      }
      else if(this.green){
        hs.properties.fill = am4core.color("#547d6e");
      }
      else if(this.black){
        hs.properties.fill = am4core.color("#909090");
      }

      let as = polygonTemplate.states.create("active");
      if(this.blue){
        as.properties.fill = am4core.color("#465982");
      }
      else if(this.red){
        as.properties.fill = am4core.color("#c4878c");
      }
      else if(this.green){
        as.properties.fill = am4core.color("#547d6e");
      }
      else if(this.black){
        as.properties.fill = am4core.color("#909090");
      }

      // this.chartMap.zoomControl = new am4maps.ZoomControl();

      let homeButton = this.chartMap.chartContainer.createChild(am4core.Button);
      homeButton.events.on("hit", ()=>{
        this.searchText = "";
        this.chartMap.goHome();
        if (lastSelected) {
          lastSelected.isActive = false;
        }
      });

      homeButton.icon = new am4core.Sprite();
      homeButton.padding(7, 5, 7, 5);
      homeButton.width = 35;
      homeButton.icon.path = "M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z";
      homeButton.align = "right";
  }

  ngOnDestroy(){
    this.summaryData = undefined;
    this.stateData = undefined;
    this.prevDayData = undefined;
  
    this.black = undefined;
    this.green = undefined;
    this.red = undefined;
    this.blue = undefined;
  
    this.chartMap.dispose();
    this.trendChart1.dispose();
  }

  selectMap(color){
    this.trendChart1.series.removeIndex(0);
    
    if(color == 'blue'){this.blue=true; this.black=false; this.green=false; this.red=false; this.ngAfterViewInit();}
    else if(color == 'red'){this.blue=false; this.black=false; this.green=false; this.red=true; this.ngAfterViewInit();}
    else if(color == 'green'){this.blue=false; this.black=false; this.green=true; this.red=false; this.ngAfterViewInit();}
    else if(color == 'black'){this.blue=false; this.black=true; this.green=false; this.red=false; this.ngAfterViewInit();}
    else {this.blue=true; this.black=false; this.green=false; this.red=false;}
  }
  
  setCumulative(){
    this.cumulative = true;
    this.trendChart1.series.removeIndex(0);
    this.ngAfterViewInit();
  }

  setDaily(){
    this.cumulative = false;
    this.trendChart1.series.removeIndex(0);
    this.ngAfterViewInit();
  }
}
