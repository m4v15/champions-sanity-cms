
"use client";
import { useState, useEffect } from "react";

const Substack = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && (
            <>
                <div className="bg-theme-white-100 flex justify-center">
                    <div className="w-[75dvw] lg:w-auto p-3 lg:p-0 lg:max-w-7xl flex flex-col lg:flex-row gap-2 items-center text-center lg:text-left justify-center">
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
                </div>
            </>
        )
    );
};

export default Substack;
