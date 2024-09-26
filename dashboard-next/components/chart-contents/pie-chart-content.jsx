"use client"
import React, {useState} from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import {PieChartInteractive} from "@/components/charts/pie-charts/pie-chart-interactive";
import {PieChartSimple} from "@/components/charts/pie-charts/pie-chart-simple";
import {PieChartSeparatorNone} from "@/components/charts/pie-charts/pie-chart-separator-none";
import {PieChartLabel} from "@/components/charts/pie-charts/pie-chart-label";
import {PieChartCustomLabel} from "@/components/charts/pie-charts/pie-chart-custom-label";
import {PieChartLabelList} from "@/components/charts/pie-charts/pie-chart-label-list";
import {PieChartLegend} from "@/components/charts/pie-charts/pie-chart-legend";
import {PieChartDonut} from "@/components/charts/pie-charts/pie-chart-donut";
import {PieChartDonutActive} from "@/components/charts/pie-charts/pie-chart-donut-active";
import {PieChartDonutWithText} from "@/components/charts/pie-charts/pie-chart-donut-with-text";
import {PieChartStacked} from "@/components/charts/pie-charts/pie-chart-stacked";


const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { minW: 3, minH: 3, w: 4, h: 3, x: 0, y: 0, i: "PieChartInteractive" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "PieChartSimple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "PieChartSeparatorNone" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 0, i: "PieChartLabel" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "PieChartCustomLabel" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 1, i: "PieChartLabelList" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 2, i: "PieChartLegend" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 12, y: 3, i: "PieChartDonut" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 4, i: "PieChartDonutActive" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "PieChartDonutWithText" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 1, i: "PieChartStacked" },
  ],
};

const PieChartContent = () => {
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
      <div key="PieChartInteractive" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartInteractive/>
      </div>
      <div key="PieChartSimple" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartSimple/>
      </div>
      <div key="PieChartSeparatorNone" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartSeparatorNone/>
      </div>
      <div key="PieChartLabel" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartLabel/>
      </div>
      <div key="PieChartCustomLabel" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartCustomLabel/>
      </div>
      <div key="PieChartLabelList" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartLabelList/>
      </div>
      <div key="PieChartLegend" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartLegend/>
      </div>
      <div key="PieChartDonut" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartDonut/>
      </div>
      <div key="PieChartDonutActive" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartDonutActive/>
      </div>
      <div key="PieChartDonutWithText" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartDonutWithText/>
      </div>
      <div key="PieChartStacked" className="bg-red-500 grid-item w-full h-[310px]">
        <PieChartStacked/>
      </div>


    </ResponsiveGridLayout>
  );
};

export default PieChartContent;