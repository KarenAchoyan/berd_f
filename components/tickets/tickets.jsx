"use client"
import React from "react";
import Event from "@/components/event/event";

const tickets = [
    { id: 1, city: "Yerevan", date: "2024-09-18" },
    { id: 2, city: "Yerevan", date: "2024-09-18" },
    { id: 3, city: "Yerevan", date: "2024-09-18" },
    { id: 4, city: "Yerevan", date: "2024-09-18" },
];

const Tickets = () => {
    return (
        <div className="bg-red-900 mt-20">
            <h2 className="text-center  container m-auto py-10 text-white text-2xl font-bold  mb-6">
                Համերգներ և տոմսեր
            </h2>
            <div className="container m-auto">
               <Event/>
            </div>
        </div>
    );
};

export default Tickets;