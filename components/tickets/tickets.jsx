"use client"
import React from "react";
import Event from "@/components/event/event";


const Tickets = () => {
    return (
        <div className="bg-red-900 mt-20">
            <h2 className="text-center  container m-auto py-10 text-white text-3xl font-bold  mb-6">
                Համերգներ և տոմսեր
            </h2>
            <div className="container m-auto">
               <Event/>
            </div>
        </div>
    );
};

export default Tickets;