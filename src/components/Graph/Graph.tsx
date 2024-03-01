import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data: ChartData<"line"> = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 80, 20, 68, 71, 97],
      fill: true,
      // "rgba(75, 192, 192, 0.2)"
      backgroundColor: (context) => {
        const bgColor = [
          "rgba(75, 192, 192, 0.45)",
          "rgba(75, 192, 192, 0.25)",
          "rgba(75, 192, 192, 0.05)",
          "rgba(255, 255, 255, 0.0)",
        ];
        if (!context.chart.chartArea) {
          return;
        }
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0.7, bgColor[0]);
        gradientBg.addColorStop(0.85, bgColor[1]);
        gradientBg.addColorStop(0.95, bgColor[2]);
        gradientBg.addColorStop(1, bgColor[3]);
        return gradientBg;
      },
      // backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options: ChartOptions<"line"> = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      // Adjust tooltip settings here
      mode: "index",
      intersect: false,
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  elements: {
    point: {
      radius: 0, // Ensures points are not drawn
      hoverRadius: 0, // Ensures points do not appear on hover
    },
  },
  scales: {
    x: {
      display: false, // Hides the x-axis labels and grid lines
    },
    y: {
      display: false,
      beginAtZero: false, // Set based on your data; you might not need this
      // Adjust these options to create the buffer effect
      suggestedMin: "auto", // Adjust based on your data
      suggestedMax: "auto", // You might calculate this based on your data values
      afterDataLimits: (axis) => {
        // Calculate a buffer based on the data value range rather than a fixed pixel size
        axis.max += (axis.max - axis.min) * 0.8; // Increase max by 10% of the range, for example
        axis.min -= (axis.max - axis.min) * 0.1; // Decrease min by 10% of the range, if needed
      },
      ticks: {
        // Customize tick options as needed
      },
    },
  },
};

const Graph: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box height={{ base: "600px", md: "600px", lg: "600px" }} width="100%">
      <Line data={data} options={options} key={windowSize.width} />;
    </Box>
  );
};

export default Graph;
