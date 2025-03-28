import React from 'react';
import parse from "html-react-parser";

const Content = ({title, costume}) => {
    return (
        <div className="w-full md:w-1/2 pr-4">
            <h3 className="text-3xl my-5">{title}</h3>
            <div>{parse(costume?.data?.content || "")}</div>
        </div>
    );
};

export default Content;