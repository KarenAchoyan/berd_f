import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 py-10 mt-10 border-t border-gray-300">
            <div className="container mx-auto px-6 flex flex-col justify-between lg:flex-row">
                <div className='w-[100%] flex flex-col items-center sm:flex-row  lg:w-[50%]'>
                    <div className='w-[50%] text-center lg:text-start'>
                        <h2 className="text-lg font-semibold mb-3">Օգտակար հղումներ</h2>
                        <ul className="text-gray-600 text-sm space-y-2">
                            <li><a href="#" className="hover:text-gray-800">Ինֆորմացիաներ</a></li>
                            <li><a href="#" className="hover:text-gray-800">Կենսագրություն</a></li>
                            <li><a href="#" className="hover:text-gray-800">Պատկերասրահ</a></li>
                            <li><a href="#" className="hover:text-gray-800">Տեսանյութեր</a></li>
                        </ul>
                    </div>
                    <div className='w-[50%] text-center mt-10 lg:text-start sm:mb-7 sm:mt-0'>
                        <h2 className="text-lg font-semibold mb-3">Կապ</h2>
                        <ul className="text-gray-600 text-sm space-y-2 w-full">
                            <li><a href="tel:+37477272198" className="hover:text-gray-800">+374 77 272198</a></li>
                            <li><a href="tel:+37491279198" className="hover:text-gray-800">+374 91 279198</a></li>
                            <li><a href="mailto:berdensemble@gmail.com" className="hover:text-gray-800">berdensemble@gmail.com</a></li>
                        </ul>
                    </div>
                </div>


                <div className="w-full mt-10 lg:mt-0 lg:w-1/4 flex flex-col items-center">
                    <img src={'logo.png'} alt="Logo" className="w-24 mb-3" />
                    <p className="text-gray-600 text-sm text-center">Մշակութային ժառանգության պահպանում</p>
                </div>
            </div>

            <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600 text-sm">
                <p>Կայքը ստեղծվել է <span className="text-gray-900 font-semibold">GeekLab</span>-ի կողմից</p>
            </div>
        </footer>
    );
};

export default Footer;


