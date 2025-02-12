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

    const handleChartClick = async (event, elements) => {
        if (elements && elements.length > 0) {
            const chart = elements[0].element.$context.chart;
            const index = elements[0].index;
            const label = chart.data.labels[index];
            const selecteInfo = await getSelectedCallType(label)
            setSelectedData({ calls: selecteInfo, callType: label });
        }
    };
    const getSelectedCallType = async (label) => {
        const allCalls = [];
        for (let i = 0; i < data.length; i++) {
            const account = data[i]; 
            const calls = await account.calls.filter((call) => call.callType === label);
            allCalls.push(...calls); 
        }
        return allCalls;
    };

    useEffect(() => {
        setSelectedData([]);
    }, data)
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-blue-200'>
                <div className="w-full mx-auto p-9">
                    
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
