import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import { getFaqs } from "@/sanity/sanity.query";
import { FaqsQueryResult } from '@/sanity.types';
import { PortableText } from "@portabletext/react";

const Faqs = async () => {
    const faqs: FaqsQueryResult = await getFaqs()

    return <dl className="mt-4 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base/7 font-semibold">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                            <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                        </span>
                    </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <PortableText value={faq.answer || []} />
                </DisclosurePanel>
            </Disclosure>
        ))}
    </dl>

}

export default Faqs
