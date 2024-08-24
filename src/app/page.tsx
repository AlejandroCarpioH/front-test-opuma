"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
export default function Home() {
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
        </CardBody>
      </Card>
    </div>
  );
}
