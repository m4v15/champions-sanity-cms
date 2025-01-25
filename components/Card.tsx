import { FundsQueryResult } from '@/sanity.types';
import Link from 'next/link';

type Unpacked<T> = T extends (infer U)[] ? U : T;


export default function Card(props: Unpacked<FundsQueryResult>) {
    return (
        <div className="flex flex-col m-2 max-w-sm rounded-lg border border-gray-200 bg-white shadow">
            <Link className="flex flex-col flex-grow" href={props.url || ''} rel=" noopener noreferrer" target="_blank">
                <img className="rounded-t-lg" src={props.imageUrl || ''} alt="" />

                <div className="p-5 flex flex-col items-center justify-between flex-grow">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {props.title}
                    </h5>
                    <div className="mb-3 flex items-center justify-start">
                        <p className="mr-2 text-xl font-bold text-gray-700">
                            {(props.currency || '$') + props.raised || '0'} raised so far
                        </p>
                    </div>
                    <div
                        className="inline-flex items-center rounded-lg bg-lime-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-lime-900 focus:outline-none focus:ring-4 focus:ring-red-300 "

                    >
                        Donate
                        <svg
                            className="ms-2 size-3.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </div>
                </div>
            </Link>
        </div >
    )
};
