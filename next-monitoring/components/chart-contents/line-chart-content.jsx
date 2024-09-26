"use client"
import React, {useState} from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import {LineChartInteractive} from "@/components/charts/line-charts/line-chart-interactive";
import {LineChartSimple} from "@/components/charts/line-charts/line-chart-simple";
import {LineChartLinear} from "@/components/charts/line-charts/line-chart-linear";
import {LineChartStep} from "@/components/charts/line-charts/line-chart-step";
import {LineChartMultiple} from "@/components/charts/line-charts/line chart-multiple";
import {LineChartDots} from "@/components/charts/line-charts/line-chart-dots";
import {LineChartCustomDots} from "@/components/charts/line-charts/line-chart-custom-dots";
import {LineChartDotsColors} from "@/components/charts/line-charts/line-chart-dots-colors";
import {LineChartLabel} from "@/components/charts/line-charts/line-chart-label";
import {LineChartCustomLabel} from "@/components/charts/line-charts/line-chart-custom-label";


const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { minW: 3, minH: 3, w: 12, h: 3, x: 0, y: 0, i: "LineChartInteractive" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "LineChartSimple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "LineChartLinear" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 0, i: "LineChartStep" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "LineChartMultiple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 1, i: "LineChartDots" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 2, i: "LineChartCustomDots" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 12, y: 3, i: "LineChartDotsColors" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 4, i: "LineChartLabel" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "LineChartCustomLabel" },
  ],
};

const LineChartContent = () => {

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
      <div key="LineChartInteractive" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartInteractive/>
      </div>
      <div key="LineChartSimple" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartSimple/>
      </div>
      <div key="LineChartLinear" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartLinear/>
      </div>
      <div key="LineChartStep" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartStep/>
      </div>
      <div key="LineChartMultiple" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartMultiple/>
      </div>
      <div key="LineChartDots" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartDots/>
      </div>
      <div key="LineChartCustomDots" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartCustomDots/>
      </div>
      <div key="LineChartDotsColors" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartDotsColors/>
      </div>
      <div key="LineChartLabel" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartLabel/>
      </div>
      <div key="LineChartCustomLabel" className="bg-red-500 grid-item w-full h-[310px]">
        <LineChartCustomLabel/>
      </div>


    </ResponsiveGridLayout>
  );
};

export default LineChartContent;