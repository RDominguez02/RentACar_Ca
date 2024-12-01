import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var options = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
    x: {
      ticks: { color: "rgba(0, 220, 195)" },
    },
  },
};

const Bars = () => {
  const [data, setData] = useState({
    labels: ["vehiculos"],
    datasets: [
      {
        label: "Beneficios",
        data: [],
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://849638300.xyz/api/dashboard/cantVehiculoRentado";
      const dataSet1 = [];
      const dataSet2 = [];
      await fetch(url)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          for (const val of res) {
            dataSet1.push(val.Vehiculo);
            dataSet2.push(val.cantidad);
          }
          setData({
            labels: dataSet1,
            datasets: [
              {
                label: "Vehiculos",
                data: dataSet2,
                backgroundColor: "rgba(0, 220, 195, 0.5)",
              },
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);
  return <Bar data={data} options={options} />;
};

export default Bars;
