import React from 'react';

const Princesing = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-center max-w-7xl mx-auto p-8 space-y-6 sm:space-y-0 sm:space-x-6">
                <div className="w-full sm:w-72 h-40 bg-white border-2 p-4 flex flex-col text-center">
                    <p className="mb-2">Over 50,000 happy customers</p>
                    <h1 className="text-3xl font-bold mt-2">78,513</h1>
                </div>
                <div className="w-full sm:w-72 h-40 bg-white border-2 p-4 flex flex-col text-center">
                    <p className="mb-2">80% customer satisfaction rate</p>
                    <h1 className="text-3xl font-bold mt-2">99%</h1>
                </div>
                <div className="w-full sm:w-72 h-40 bg-white border-2 p-4 flex flex-col text-center">
                    <p className="mb-2">More than 2 million products sold</p>
                    <h1 className="text-3xl font-bold mt-2">5.5 million</h1>
                </div>
            </div>
        </div>
    );
}

export default Princesing;
