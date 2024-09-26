"use client"
import {Responsive, WidthProvider} from "react-grid-layout";
import {useState} from "react";
import {RadarChartSimple} from "@/components/charts/radar-charts/radar-chart-simple";
import {RadarChartDots} from "@/components/charts/radar-charts/radar-chart-dots";
import {RadarChartMultiple} from "@/components/charts/radar-charts/radar-chart-multiple";
import {RadarChartLinesOnly} from "@/components/charts/radar-charts/radar-chart-lines-only";
import {RadarChartCustomLabel} from "@/components/charts/radar-charts/radar-chart-custom-label";
import {RadarChartRadiusAxis} from "@/components/charts/radar-charts/radar-chart-radius-axis";
import {RadarChartGridCustom} from "@/components/charts/radar-charts/Radar-chart-grid-custom";
import {RadarChartGridFilled} from "@/components/charts/radar-charts/radar-chart-grid-filled";
import {RadarChartGridNone} from "@/components/charts/radar-charts/radar-chart-grid-none";
import RadarChartGridCircle from "@/components/charts/radar-charts/radar-chart-grid-circle";
import {RadarChartGridCircleNoLines} from "@/components/charts/radar-charts/radar-chart-grid-circle-no-lines";
import {RadarChartGridCircleFilled} from "@/components/charts/radar-charts/Radar-chart-grid-circle-filled";
import {RadarChartLegend} from "@/components/charts/radar-charts/radar-chart-legend";
import {RadarChartIcons} from "@/components/charts/radar-charts/radar-chart-icons";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { minW: 3, minH: 3, w: 4, h: 3, x: 0, y: 0, i: "RadarChartSimple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "RadarChartDots" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "RadarChartMultiple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 0, i: "RadarChartLinesOnly" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "RadarChartCustomLabel" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 1, i: "RadarChartRadiusAxis" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 2, i: "RadarChartGridCustom" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 12, y: 3, i: "RadarChartGridFilled" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 4, i: "RadarChartGridNone" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "RadarChartGridCircle" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 1, i: "RadarChartGridCircleNoLines" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 12, y: 2, i: "RadarChartGridCircleFilled" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 3, i: "RadarChartLegend" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 4, i: "RadarChartIcons" },
  ],
};


const RadarChartContent = () => {
  const [currentLayout, setCurrentLayout] = useState(layout.lg);

  const onLayoutChange = (layout) => {
    setCurrentLayout(layout);
  };
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layout}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
      onLayoutChange={onLayoutChange}
      isResizable={true}
      resizeHandles={['s', 'e', 'se', 'w', 'n', 'sw', 'nw', 'ne']}
    >
      <div key="RadarChartSimple" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartSimple/>
      </div>
      <div key="RadarChartDots" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartDots/>
      </div>
      <div key="RadarChartMultiple" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartMultiple/>
      </div>
      <div key="RadarChartLinesOnly" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartLinesOnly/>
      </div>
      <div key="RadarChartCustomLabel" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartCustomLabel/>
      </div>
      <div key="RadarChartRadiusAxis" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartRadiusAxis/>
      </div>
      <div key="RadarChartGridFilled" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartGridFilled/>
      </div>
      <div key="RadarChartGridCustom" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartGridCustom/>
      </div>
      <div key="RadarChartGridNone" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartGridNone/>
      </div>
      <div key="RadarChartGridCircle" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartGridCircle/>
      </div>
      <div key="RadarChartGridCircleNoLines" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartGridCircleNoLines/>
      </div>
      <div key="RadarChartGridCircleFilled" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartGridCircleFilled/>
      </div>
      <div key="RadarChartLegend" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartLegend/>
      </div>
      <div key="RadarChartIcons" className="bg-red-500 grid-item w-full h-[310px]">
        <RadarChartIcons/>
      </div>


    </ResponsiveGridLayout>
  );
};

export default RadarChartContent;