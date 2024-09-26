"use client"
import React, {useState} from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import {RadialChartSimple} from "@/components/charts/radial-charts/radial-chart-simple";
import {RadialChartLabel} from "@/components/charts/radial-charts/radial-chart-label";
import {RadialChartGrid} from "@/components/charts/radial-charts/radial-chart-grid";
import {RadialChartText} from "@/components/charts/radial-charts/radial-chart-text";
import {RadialChartShape} from "@/components/charts/radial-charts/radial-chart-shape";
import {RadialChartStacked} from "@/components/charts/radial-charts/radial-chart-stacked";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { minW: 3, minH: 3, w: 4, h: 3, x: 0, y: 0, i: "RadialChartSimple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "RadialChartLabel" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "RadialChartGrid" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 0, i: "RadialChartText" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "RadialChartShape" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 1, i: "RadialChartStacked" },
  ],
};

const RadialChartContent = () => {
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
      <div key="RadialChartSimple" className="bg-red-500 grid-item w-full h-[310px]">
        <RadialChartSimple/>
      </div>
      <div key="RadialChartLabel" className="bg-red-500 grid-item w-full h-[310px]">
        <RadialChartLabel/>
      </div>
      <div key="RadialChartGrid" className="bg-red-500 grid-item w-full h-[310px]">
        <RadialChartGrid/>
      </div>
      <div key="RadialChartText" className="bg-red-500 grid-item w-full h-[310px]">
        <RadialChartText/>
      </div>
      <div key="RadialChartShape" className="bg-red-500 grid-item w-full h-[310px]">
        <RadialChartShape/>
      </div>
      <div key="RadialChartStacked" className="bg-red-500 grid-item w-full h-[310px]">
        <RadialChartStacked/>
      </div>
    </ResponsiveGridLayout>
  );
};

export default RadialChartContent;