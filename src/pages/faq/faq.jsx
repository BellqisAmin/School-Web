import React from 'react'
import FaqHero from '../../component/faq/faqHero'
import FaqSidebar from '../../component/faq/faqSidebar'
import FaqList from '../../component/faq/faqList'
import FaqContactBar from '../../component/faq/faqContactBar'

const Faq = () => {
    return (
        <main className='min-h-screen bg-background text-text-primary'>
            <FaqHero />
            <section className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
                <div className='lg:col-span-9'>
                    <FaqList />
                </div>
                <div className='lg:col-span-3'>
                    <FaqSidebar />
                </div>
            </section>
                <FaqContactBar />
        </main>
    )
}

export default Faq