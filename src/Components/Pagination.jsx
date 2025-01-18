import React from 'react';

export default function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
    return (
        <div className="flex justify-between items-center mt-4">
            <button
                onClick={onPrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
                    }`}
            >
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
                    }`}
            >
                Next
            </button>
        </div>
    );
}
