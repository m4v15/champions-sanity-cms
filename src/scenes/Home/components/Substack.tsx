
"use client";
import { useState, useEffect } from "react";

const Substack = () => {
    const [isClient, setIsClient] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && !hide && (
            <>
                <div className="bg-theme-white-100 h-[8rem] py-3 lg:fixed lg:bottom-0 lg:w-full ">
                    <div className="flex flex-col lg:flex-row gap-2 items-center text-center lg:text-left justify-center">
                        <p className="lg:mb-10 text-pretty text-md font-medium text-gray-500 sm:text-lg/8">
                            Join our newsletter to hear about the families, events we run to
                            support them, and news from our champions
                        </p>
                        <iframe
                            src="https://gazachampions.substack.com/embed"
                            width="480"
                            height="150"
                        ></iframe>
                    </div>
                    <button
                        className="hidden lg:block absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setHide(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </>
        )
    );
};

export default Substack;
