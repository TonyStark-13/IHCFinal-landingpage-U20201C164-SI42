

import{drawCharts} from "./charts.js";

//LOAD
google.charts.load('current',{'packages':['corechart']});

//CALLBACK
google.charts.setOnLoadCallback(drawCharts);