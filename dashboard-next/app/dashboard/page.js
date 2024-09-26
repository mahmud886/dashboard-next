
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import BarChartContent from "@/components/chart-contents/bar-chart-content";
import AreaChartContent from "@/components/chart-contents/area-chart-content";
import LineChartContent from "@/components/chart-contents/line-chart-content";
import PieChartContent from "@/components/chart-contents/pie-chart-content";
import RadarChartContent from "@/components/chart-contents/radar-chart-content";
import RadialChartContent from "@/components/chart-contents/radial-chart-content";
import DataDecimationChart from "@/components/chart-contents/data-decimation-chart";


export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Hi, Welcome back 👋</h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="barcharts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="barcharts"> Bar Charts </TabsTrigger>
            <TabsTrigger value="areacharts"> Area Charts </TabsTrigger>
            <TabsTrigger value="linecharts"> Line Charts </TabsTrigger>
            <TabsTrigger value="piecharts"> Pie Charts </TabsTrigger>
            <TabsTrigger value="radarcharts"> Radar Charts </TabsTrigger>
            <TabsTrigger value="radialchart"> Radial Chart </TabsTrigger>
            <TabsTrigger value="datadecimationchart"> Data Decimation Chart </TabsTrigger>
          </TabsList>


          <TabsContent value="barcharts" className="space-y-4">
            <BarChartContent/>
          </TabsContent>

          <TabsContent value="areacharts" className="space-y-4">
            <AreaChartContent/>
          </TabsContent>

          <TabsContent value="linecharts" className="space-y-4">
            <LineChartContent/>
          </TabsContent>

          <TabsContent value="piecharts" className="space-y-4">
            <PieChartContent/>
          </TabsContent>

          <TabsContent value="radarcharts" className="space-y-4">
            <RadarChartContent/>
          </TabsContent>

          <TabsContent value="radialchart" className="space-y-4">
            <RadialChartContent/>
          </TabsContent>

          <TabsContent value="datadecimationchart" className="space-y-4">
            <DataDecimationChart/>
          </TabsContent>

        </Tabs>
      </div>
    </PageContainer>
  );
}
