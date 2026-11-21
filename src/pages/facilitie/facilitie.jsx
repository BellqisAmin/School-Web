import React from 'react'
import FacilitieHero from '../../component/facilitie/facilitieHero'
import FacilitieSchool from '../../component/facilitie/facilitieSchool'
import WhyFacilitie from '../../component/facilitie/whyFacilitie'
import FacilitieCart from '../../component/facilitie/facilitieCart'

const Facilitie = () => {
    return (
        <main className='min-h-screen bg-background text-text-primary'>
            <FacilitieHero />
            <section className='w-full px-12'>
                <FacilitieSchool />
                <section className='max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    <div className='lg:col-span-5'>
                        <FacilitieCart />
                    </div>
                    <div className='lg:col-span-7'>
                        <WhyFacilitie />
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Facilitie