import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getAllData, getData } from "../../Features/apiCalls";

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

export const DashBoard = () => {
    let [dashboard, setDashboard] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllData("dashboard/dashboard");
          setDashboard(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
}

var data = {
    labels: ['Carne', 'Jamón', 'Dulces', 'Turrón', 'Vino'],
    datasets: [
        {
            label: 'Popularidad en Navidad',
            data: [35, 20, 20, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}