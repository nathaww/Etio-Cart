import React from "react";
import './dashboard.css'
import { LineChart } from "recharts";
import { CartesianGrid } from "recharts";
import { Line } from "recharts";
import { XAxis, YAxis } from "recharts";
import { Legend } from "recharts";
import { Tooltip } from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie } from "recharts";
import { Cell } from "recharts";
const Dashboard = () => {

    const dataPie = [
        { name: 'Male', value: 400 },
        { name: 'Female', value: 300 }
    ];
    const data = [
        { name: '13-17', value: 400 },
        { name: '18-21', value: 300 },
        { name: '22-27', value: 300 },
        { name: '28-35', value: 200 },
        { name: '35-45', value: 200 },
        { name: '46-55', value: 200 },
        { name: '56-65', value: 200 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    const MSPdata = [
        {
            name: 'Jan',
            MSP: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            MSP: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            MSP: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            MSP: 3908,
            amt: 2000,
        }
    ];
    const YSPdata = [
        {
            name: '2019',
            YSP: 2400,
            amt: 2400,
        },
        {
            name: '2020',
            YSP: 1398,
            amt: 2210,
        },
        {
            name: '2021',
            YSP: 9800,
            amt: 2290,
        },
        {
            name: '2021',
            YSP: 3908,
            amt: 2000,
        }
    ];
    const MAUPdata = [
        {
            name: 'Jan',
            MAUP: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            MAUP: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            MAUP: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            MAUP: 3908,
            amt: 2000,
        }
    ];
    const YAUPdata = [
        {
            name: '2019',
            YAUP: 2400,
            amt: 2400,
        },
        {
            name: '2020',
            YAUP: 1398,
            amt: 2210,
        },
        {
            name: '2021',
            YAUP: 9800,
            amt: 2290,
        },
        {
            name: '2021',
            YAUP: 3908,
            amt: 2000,
        }
    ];


    return (
        <div className="dashboard">
            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">720</h3>
                                <p className="fs-5">Transport</p>
                            </div>
                            <i className="fas fa-bus fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">4920</h3>
                                <p className="fs-5">Advertisment</p>
                            </div>
                            <i
                                className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">3899</h3>
                                <p className="fs-5">Events</p>
                            </div>
                            <i className="fas fa-calendar fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">3425</h3>
                                <p className="fs-5">Total Service</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col chart-cont">
                            <div className="card bg-transparent">
                                <BarChart
                                    width={400}
                                    height={300}
                                    data={MSPdata}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        left: 10,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="MSP" fill="#00989d" />
                                </BarChart>
                            </div>
                        </div>
                        <div className="col chart-cont">
                            <div className="card bg-transparent">

                                <LineChart
                                    width={400}
                                    height={300}
                                    data={YSPdata}
                                    margin={{
                                        top: 5,
                                        right: 10,
                                        left: 10,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="YSP" stroke="#00989d" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col chart-cont">

                            <div className="card bg-transparent">

                                <LineChart
                                    width={400}
                                    height={300}
                                    data={MAUPdata}
                                    margin={{
                                        top: 5,
                                        right: 10,
                                        left: 10,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="MAUP" stroke="#00989d" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>

                        </div>
                        <div className="col chart-cont">
                            <div className="card bg-transparent">

                                <LineChart
                                    width={400}
                                    height={300}
                                    data={YAUPdata}
                                    margin={{
                                        top: 5,
                                        right: 10,
                                        left: 10,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="YAUP" stroke="#00989d" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col chart-cont">
                            <div className="card bg-transparent">
                                <PieChart width={400} height={300}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                        </div>
                        <div className="col chart-cont">
                            <div className="card bg-transparent">
                                <PieChart width={450} height={300}>
                                    <Pie
                                        dataKey="value"
                                        startAngle={360}
                                        endAngle={0}
                                        data={dataPie}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#00989d"
                                        label
                                    />
                                </PieChart>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Dashboard