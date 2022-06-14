import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function ColumnAndBar3D({ chartData, kindOf }) {
  let typeOfChart;
  let captionOfChart;
  let subCaptionOfChart;
  let yAxisNameOfChart;

  if (kindOf === "stars") {
    typeOfChart = "column3d";
    captionOfChart = "Stars";
    subCaptionOfChart = "Most stars count";
    yAxisNameOfChart = "Start";
  }
  if (kindOf === "forks") {
    typeOfChart = "bar3d";
    captionOfChart = "Forks";
    subCaptionOfChart = "Most forks count";
    yAxisNameOfChart = "Forks";
  }

  const chartConfigs = {
    type: typeOfChart, // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: captionOfChart,
        //Set the chart subcaption
        subCaption: subCaptionOfChart,
        //Set the x-axis name
        xAxisName: "Repos",
        //Set the y-axis name
        yAxisName: yAxisNameOfChart,
        //Set the theme for your chart
        xAxisNameFontSize: 12,
        yAxisNameFontSize: 12,
      },
      // Chart Data
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default ColumnAndBar3D;
