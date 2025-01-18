import React, { useState } from 'react'
import Pagination from './Pagination';

export default function CallTypesTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data?.calls?.length / itemsPerPage);
  const tableData = data?.calls?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className='bg-blue-200 h-full w-full p-4 transition duration-150'>
      <h2 className='text-lg font-bold text-blue-600 text-center py-2'>{data?.callType} Detail's</h2>
      <div className='p-2'>
        {/* Table */}
        <table className="min-w-full bg-blue-100 shadow-md">
          <thead>
            <tr className="bg-blue-300">
              <th className="text-start px-4 py-2">CallID</th>
              <th className="text-start px-4 py-2">Call Type</th>
              <th className="text-start px-4 py-2">Call Date</th>
              <th className="text-start px-4 py-2">Call Status</th>
            </tr>
          </thead>
          <tbody className='bg-slate-50/5'>
            {tableData?.map((call, index) => (
              <tr key={call.id} className="hover:bg-gray-200">
                <td className="px-4 py-2">{call.id}</td>
                <td className="px-4 py-2">{call.callType}</td>
                <td className="px-4 py-2">
                  {new Date(call.callDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{call.callStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
      </div>
    </div>
  )
}
