import React, { useState } from 'react';
import Pagination from './Pagination'; 

export default function AccountDetailsTable({ data, selectedUser }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const tableData = data?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString();
    };

    return (
        <div className="bg-blue-100 h-full w-full p-4">
            <h2 className="text-xl font-bold text-blue-600 text-center py-2">{selectedUser}'s' Territory Accounts Detail's</h2>
            <div className="p-3">
                <table className="min-w-full bg-blue-100 shadow-md">
                    <thead>
                        <tr className="bg-blue-300">
                            <th className="text-start px-4 py-2">Account Name</th>
                            <th className="text-start px-4 py-2">Total Calls</th>
                            <th className="text-start px-4 py-2">Total Emails</th>
                            <th className="text-start px-4 py-2">Last Call Date</th>
                            <th className="text-start px-4 py-2">Last Email Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData?.map((call, index) => {
                            const lastCallDate = call.calls?.length
                                ? call.calls.reduce((latest, current) =>
                                    new Date(current.callDate) > new Date(latest.callDate) ? current : latest
                                ).callDate
                                : null;

                            const lastEmailDate = call.emails?.length
                                ? call.emails.reduce((latest, current) =>
                                    new Date(current.emailDate) > new Date(latest.emailDate) ? current : latest
                                ).emailDate
                                : null;

                            return (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2">{call.name}</td>
                                    <td className="px-4 py-2">{call.calls?.length || 0}</td>
                                    <td className="px-4 py-2">{call.emails?.length || 0}</td>
                                    <td className="px-4 py-2">{formatDate(lastCallDate)}</td>
                                    <td className="px-4 py-2">{formatDate(lastEmailDate)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Pagination Component */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevious={handlePreviousPage}
                    onNext={handleNextPage}
                />
            </div>
        </div>
    );
}
