"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
// import { Square3Stack3DIcon } from "@heroicons/react/24/coutline";
export default function Home() {
  const chartConfig: any = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Sales",
        data: [50, 40, 1000, 320, 500, 350, 200, 230, 500, 1000],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "white",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "white",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <div className="grid place-items-center min-h-screen ">
      <Card className="w-4/5 h-5/6">
        <CardHeader className="bg-blue-gray-800 text-white text-center p-4">
          <Typography variant="h3">este es el titulo del componente</Typography>{" "}
        </CardHeader>
        <CardBody className=" bg-blue-gray-500 p-6 h-full">
          {/* <AsyncSelect loadOptions={{}} /> */}
          <Select
            options={[
              { value: "ass", label: "valor 1" },
              { value: "otro valor", label: "valor 2" },
              { value: "sadas", label: "valoe 3" },
            ]}
          />
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
}
