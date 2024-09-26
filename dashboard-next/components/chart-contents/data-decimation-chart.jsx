// DataDecimationChartContent.js
"use client";
import React, { useState } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import DataDecimationChart from "@/components/charts/data-decimation-chart/data-decimation-chart";
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { minW: 3, minH: 3, w: 12, h: 8, x: 0, y: 0, i: "DataDecimationChart" },
  ],
};

const DataDecimationChartContent = () => {
  const [currentLayout, setCurrentLayout] = useState(layout.lg);
  const [decimation, setDecimation] = useState({
    enabled: true,
    algorithm: 'min-max',
  });

  const onLayoutChange = (layout) => {
    setCurrentLayout(layout);
  };

  const actions = [
    {
      name: 'No decimation (default)',
      handler() {
        setDecimation({
          enabled: false,
          algorithm: 'min-max',
        });
      },
    },
    {
      name: 'min-max decimation',
      handler() {
        setDecimation({
          enabled: true,
          algorithm: 'min-max',
        });
      },
    },
    {
      name: 'LTTB decimation (50 samples)',
      handler() {
        setDecimation({
          enabled: true,
          algorithm: 'lttb',
          samples: 50,
        });
      },
    },
    {
      name: 'LTTB decimation (500 samples)',
      handler() {
        setDecimation({
          enabled: true,
          algorithm: 'lttb',
          samples: 500,
        });
      },
    },
  ];

  return (
    <ResponsiveGridLayout
      className="layout "
      layouts={{ lg: currentLayout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onLayoutChange={onLayoutChange}
      isResizable={true}
      resizeHandles={['s', 'e', 'se', 'w', 'n', 'sw', 'nw', 'ne']}
    >
      <div key="DataDecimationChart" className="bg-red-500 grid-item w-full h-[310px] z-10">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Data Decimation Chart</h2>
          </CardHeader>
          <CardContent>
            <div>
              {actions.map((action) => (
                <Button key={action.name} onClick={action.handler}>
                  {action.name}
                </Button>
              ))}
            </div>
            <DataDecimationChart decimation={decimation} />
          </CardContent>
        </Card>
      </div>
    </ResponsiveGridLayout>
  );
};

export default DataDecimationChartContent;
