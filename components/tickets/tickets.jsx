"use client"
// import React from "react";
// import { Card, Button } from "antd";
//
// const tickets = [
//     { id: 1, city: "Yerevan", date: "2024-09-18" },
//     { id: 2, city: "Yerevan", date: "2024-09-18" },
//     { id: 3, city: "Yerevan", date: "2024-09-18" },
//     { id: 4, city: "Yerevan", date: "2024-09-18" },
// ];
//
// const Tickets = () => {
//     return (
//         <div className="bg-red-900 pb-20 mt-20">
//             <h2 className="container m-auto py-10 text-white text-2xl font-bold  mb-6">
//                 Համերգներ և տոմսեր
//             </h2>
//             <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {tickets.map((ticket) => (
//                     <div key={ticket.id} className="sm:[w-100px shadow-lg h-[500px] flex flex-col pb-10 justify-between ticket-item bg-white rounded-2xl">
//                         <div>
//                             <h3 className="text-4xl font-semibold text-center my-5 mb-10">{ticket.city}</h3>
//                             <div className="border-b my-2"></div>
//                         </div>
//                         <div>
//                             <p className="text-xl text-center text-gray-600">{ticket.date}</p>
//                             <div className="flex justify-center mt-4">
//                                 <button type="primary" className="bg-red-900 border-none px-20 py-3 text-white text-xl">
//                                     Գնել տոմս
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Tickets;



"use client"
import React from "react";
import { Card, Button } from "antd";

const tickets = [
    { id: 1, city: "Yerevan", date: "2024-09-18" },
    { id: 2, city: "Yerevan", date: "2024-09-18" },
    { id: 3, city: "Yerevan", date: "2024-09-18" },
    { id: 4, city: "Yerevan", date: "2024-09-18" },
];

const Tickets = () => {
    return (
        <div className="bg-red-900 pb-20 mt-20">
            <h2 className="container m-auto py-10 text-white text-2xl font-bold  mb-6">
                Համերգներ և տոմսեր
            </h2>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tickets.map((ticket) => (
                    <div key={ticket.id} className="w-11/12 sm:w-3/4 md:w-full shadow-lg h-[500px] flex flex-col pb-10 justify-between ticket-item bg-white rounded-2xl mx-auto">
                        <div>
                            <h3 className="text-4xl font-semibold text-center my-5 mb-10">{ticket.city}</h3>
                            <div className="border-b my-2"></div>
                        </div>
                        <div>
                            <p className="text-xl text-center text-gray-600">{ticket.date}</p>
                            <div className="flex justify-center mt-4">
                                <button type="primary" className="bg-red-900 border-none px-15 py-3  text-white text-xl">
                                    Գնել տոմս
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tickets;