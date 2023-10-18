import { useState } from 'react'
import { useVuelos } from '../redux';
import Vuelos from '../redux/constanst';

function CountDropdownPeopleComponent() {
    const [open, setOpen] = useState(false);
    const { count, setCount } = useVuelos(s => s as Vuelos);
    const handleClick = () => setOpen(!open);
    const handleAddAdult = () => setCount({ ...count, adult: count.adult + 1 });
    const handleSubAdult = () => setCount({ ...count, adult: count.adult - 1 });
    const handleAddChild = () => setCount({ ...count, child: count.child + 1 });
    const handleSubChild = () => setCount({ ...count, child: count.child - 1 });

    return (
        <div className="relative inline-block text-left mx-4">
            <button
                type="button"
                onClick={handleClick}
                className="text-large font-[600] p-4 bg-[#EBEBFF] w-[180px] shadow-default text-[#B0B0D9] font-semibold rounded-lg flex items-center justify-between"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
            >
                Pasajes
                <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd" />
                </svg>
            </button>
            {open && (
                <div
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-4 py-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="px-4 py-2 flex items-center justify-between gap-6" role="none">
                        <div className="flex items-center justify-between gap-4">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86084 10C11.3461 10 13.3608 7.98528 13.3608 5.5C13.3608 3.01472 11.3461 1 8.86084 1C6.37556 1 4.36084 3.01472 4.36084 5.5C4.36084 7.98528 6.37556 10 8.86084 10Z" stroke="#706CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.361 11.8H13.6778C14.3358 11.8002 14.971 12.0407 15.4642 12.4762C15.9574 12.9117 16.2746 13.5124 16.3562 14.1652L16.7081 16.9768C16.7397 17.2301 16.7172 17.4873 16.6418 17.7311C16.5665 17.975 16.4402 18.2001 16.2713 18.3915C16.1023 18.5828 15.8946 18.736 15.6619 18.8409C15.4292 18.9459 15.1768 19.0001 14.9216 19H2.80039C2.54514 19.0001 2.29279 18.9459 2.06009 18.8409C1.8274 18.736 1.61968 18.5828 1.45073 18.3915C1.28178 18.2001 1.15545 17.975 1.08014 17.7311C1.00482 17.4873 0.98224 17.2301 1.01389 16.9768L1.36489 14.1652C1.44652 13.512 1.76397 12.9112 2.25754 12.4756C2.75112 12.04 3.38681 11.7998 4.04509 11.8H4.36099" stroke="#706CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-[18px] text-[#706CFF] font-[500]">Adultos</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleSubAdult}
                                className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                            >
                                -
                            </button>
                            <span className="text-[18px] text-[#706CFF] font-[600]">{count.adult}</span>
                            <button
                                onClick={handleAddAdult}
                                className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-2 flex items-center justify-between gap-6" role="none">
                        <div className="flex items-center justify-between gap-4">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.3999 7.34513V7.25513" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.6001 7.34513V7.25513" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.9999 15.4C10.9547 15.4 11.8704 15.0208 12.5455 14.3456C13.2206 13.6705 13.5999 12.7548 13.5999 11.8H6.3999C6.3999 12.7548 6.77919 13.6705 7.45432 14.3456C8.12945 15.0208 9.04512 15.4 9.9999 15.4Z" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-[18px] text-[#706CFF] font-[500]">Niños</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleSubChild}
                                className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                            >
                                -
                            </button>
                            <span className="text-[18px] text-[#706CFF] font-[600]">{count.child}</span>
                            <button
                                onClick={handleAddChild}
                                className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default CountDropdownPeopleComponent