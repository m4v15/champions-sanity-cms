import { Faqs as Questions } from '@/components'

const Faqs = () => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto">
                    <h2 className="text-xl font-header tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <Questions />
                </div>
            </div>
        </div>
    )
}

export default Faqs