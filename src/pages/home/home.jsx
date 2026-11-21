import React from 'react'
import Hero from '../../component/home/hero'
import StatsBar from '../../component/home/statsBar'
import AboutSchool from '../../component/home/aboutSchool'
import LeaeningPrograms from '../../component/home/leaeningPrograms'
import PrincipalMessage from '../../component/home/principalMessage'
import SchoolFeatures from '../../component/home/schoolFeatures '
import NewsSection from '../../component/home/newsSection'
import RegisterBanner from '../../component/home/registerBanner'

const Home = () => {
  return (
    <main className='w-full border-4'>
      <Hero />
      <div className='w-full px-12'>
        <StatsBar />
        <AboutSchool />
        <LeaeningPrograms />
        <section className='w-full py-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <SchoolFeatures />
          <PrincipalMessage />
        </section>
        <NewsSection />
        <RegisterBanner />
      </div>
    </main>
  )
}

export default Home