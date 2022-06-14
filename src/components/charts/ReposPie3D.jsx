import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

function ReposPie3D({ chartData, kindOf }) {
  let typeOfChart;
  let percentValue;
  let themeOfChart;
  let subCaptionOfChart;

  if (kindOf === "languages") {
    ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
    typeOfChart = "pie3d";
    subCaptionOfChart = "Most used languages";
    themeOfChart = "fusion";
    percentValue = 1;
  }

  if (kindOf === "stars") {
    ReactFC.fcRoot(FusionCharts, Column2D, CandyTheme);
    typeOfChart = "doughnut2d";
    subCaptionOfChart = "Most stars per language";
    themeOfChart = "candy";
    percentValue = 0;
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
        caption: "Repos of Github's user",
        //Set the chart subcaption
        subCaption: subCaptionOfChart,
        //Set the theme for your chart
        theme: themeOfChart,
        decimals: 0,
        pieRadius: 80,
        showPercentValues: percentValue,
      },
      // Chart Data
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default ReposPie3D;
