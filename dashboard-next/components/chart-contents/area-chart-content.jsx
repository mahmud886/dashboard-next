"use client"
import React, {useState} from 'react';
import {Responsive, WidthProvider} from "react-grid-layout";
import {BarGraph} from "@/components/charts/bar-charts/bar-graph";
import {AreaChartStacked, AreaGraph} from "@/components/charts/area-charts/area-chart-stacked";
import {AreaChartSimple} from "@/components/charts/area-charts/area-chart-simple";
import {AreaChartLinear} from "@/components/charts/area-charts/area-chart-linear";
import {AreaChartStep} from "@/components/charts/area-charts/area-chart-step";
import {AreaChartStackedExpanded} from "@/components/charts/area-charts/area-chart-stacked-expanded";
import {AreaChartLegend} from "@/components/charts/area-charts/area-chart-legend";
import {AreaChartIcons} from "@/components/charts/area-charts/area chart-icons";
import {AreaChartGradient} from "@/components/charts/area-charts/area-chart-gradient";
import {AreaChartAxes} from "@/components/charts/area-charts/area-chart-axes";
import {AreaChartInteractive} from "@/components/charts/area-charts/area-chart-interactive";


const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { minW: 3, minH: 3, w: 12, h: 3, x: 0, y: 0, i: "AreaChartInteractive" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "AreaChartSimple" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "AreaChartLinear" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 0, i: "AreaChartStep" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 0, i: "AreaChartStacked" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 1, i: "AreaChartStackedExpanded" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 8, y: 2, i: "AreaChartLegend" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 12, y: 3, i: "AreaChartIcons" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 0, y: 4, i: "AreaChartGradient" },
    { minW: 3, minH: 2, w: 4, h: 3, x: 4, y: 0, i: "AreaChartAxes" },
  ],
};

const AreaChartContent = () => {
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
      <div key="AreaChartInteractive" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartInteractive/>
      </div>
      <div key="AreaChartSimple" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartSimple/>
      </div>
      <div key="AreaChartLinear" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartLinear/>
      </div>
      <div key="AreaChartStep" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartStep/>
      </div>
      <div key="AreaChartStacked" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartStacked/>
      </div>
      <div key="AreaChartStackedExpanded" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartStackedExpanded/>
      </div>
      <div key="AreaChartLegend" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartLegend/>
      </div>
      <div key="AreaChartIcons" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartIcons/>
      </div>
      <div key="AreaChartGradient" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartGradient/>
      </div>
      <div key="AreaChartAxes" className="bg-red-500 grid-item w-full h-[310px]">
        <AreaChartAxes/>
      </div>


    </ResponsiveGridLayout>
  );
};

export default AreaChartContent;