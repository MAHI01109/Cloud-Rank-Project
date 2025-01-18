import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import CallTypesTable from './CallTypesTable';

ChartJS.register(ArcElement, Tooltip, Legend);



const CallTypePieChart = ({ data }) => {
    const [selectedData, setSelectedData] = useState([]);
    // Process data to count call types
    const callTypeCounts = data.flatMap((account) => account.calls || [])
        .reduce((acc, call) => {
            acc[call.callType] = (acc[call.callType] || 0) + 1;
            return acc;
        }, {});

    // Check if there is any data to display
    const hasData = Object.keys(callTypeCounts).length > 0;

    if (!hasData) {
        return null
    }
    // console.log(callTypeCounts, "callTypeCounts");


    const chartData = {
        labels: Object.keys(callTypeCounts),
        datasets: [
            {
                label: 'Call Types',
                data: Object.values(callTypeCounts),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
            },
        ],
    };
    // function for 
    const handleChartClick = async (event, elements) => {
        if (elements && elements.length > 0) {
            const chart = elements[0].element.$context.chart;
            //  const datasetIndex = elements[0].datasetIndex;
            const index = elements[0].index;
            const label = chart.data.labels[index];
            const selecteInfo = await getSelectedCallType(label)
            // const value = chart.data.datasets[datasetIndex].data[index];
            setSelectedData({ calls: selecteInfo, callType: label });
        }
    };
    const getSelectedCallType = async (label) => {
        const allCalls = [];
        for (let i = 0; i < data.length; i++) {
            const account = data[i]; // Access each account object
            const calls = await account.calls.filter((call) => call.callType === label); // Filter calls by callType
            allCalls.push(...calls); // Add matching calls to the allCalls array
        }
        return allCalls; // Return the array of matching calls
    };
    console.log(selectedData, "data");
    useEffect(() => {
        setSelectedData([]);
    }, data)
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-blue-200'>
                <div className="w-full mx-auto p-9">
                    {/* <h2 className="text-center text-lg font-semibold mb-4">Call Types Distribution</h2> */}
                    <Pie data={chartData} options={{
                        onClick: (event, elements) => handleChartClick(event, elements),
                    }} />
                </div>
            </div>
            <div className=''>
                {selectedData &&
                    selectedData.length === 0 ? null : (
                    <>
                        <CallTypesTable data={selectedData} />
                    </>
                )
                }
            </div>

        </div>

    );
};

export default CallTypePieChart;
