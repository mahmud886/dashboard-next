"use client"
import React, {useState} from 'react';
import {BarGraph} from "@/components/charts/bar-charts/bar-graph";
import {BarChartSimple} from "@/components/charts/bar-charts/bar-chart-simple";
import {Responsive, WidthProvider} from "react-grid-layout";
import {BarChartHorizontal} from "@/components/charts/bar-charts/bar-chart-horizontal";
import {BarChartMultiple} from "@/components/charts/bar-charts/bar-chart-multiple";
import {BarChartLabel} from "@/components/charts/bar-charts/bar-chart-label";
import {BarChartCustomLabel} from "@/components/charts/bar-charts/bar-chart-custom-label";
import {BarChartMixed} from "@/components/charts/bar-charts/bar-chart-mixed";
import {BarChartStackedLegend} from "@/components/charts/bar-charts/bar-chart-stacked-legend";
import {BarChartActive} from "@/components/charts/bar-charts/bar-chart-active";
import {BarChartNegative} from "@/components/charts/bar-charts/bar-chart-negative";

const ResponsiveGridLayout = WidthProvider(Responsive);

  const layout = {
    lg: [
      { minW: 3, minH: 3, w: 12, h: 3, x: 12, y: 0, i: "graph1",  },
      { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "BarChartSimple", },
      { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 1, i: "BarChartHorizontal" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 2, i: "BarChartMultiple" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 3, i: "BarChartLabel" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 0, i: "BarChartCustomLabel" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 12, y: 1, i: "BarChartMixed" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 2, i: "BarChartStackedLegend" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 2, i: "BarChartActive" },
      { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 2, i: "BarChartNegative" },
    ],
  };


const BarChartContent = () => {
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
      <div key="graph1" className="bg-red-500 grid-item w-full h-[310px]">
        <BarGraph/>
      </div>
      <div key="BarChartSimple" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartSimple/>
      </div>
      <div key="BarChartHorizontal" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartHorizontal/>
      </div>
      <div key="BarChartMultiple" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartMultiple/>
      </div>
      <div key="BarChartLabel" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartLabel/>
      </div>
      <div key="BarChartCustomLabel" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartCustomLabel/>
      </div>
      <div key="BarChartMixed" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartMixed/>
      </div>
      <div key="BarChartStackedLegend" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartStackedLegend/>
      </div>
      <div key="BarChartStackedLegend" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartActive/>
      </div>
      <div key="BarChartNegative" className="bg-blue-500 grid-item w-full h-[310px]">
        <BarChartNegative/>
      </div>
    </ResponsiveGridLayout>
  );
};

export default BarChartContent;