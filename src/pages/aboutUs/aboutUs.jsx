import React from 'react'
import AboutHero from '../../component/aboutUs/aboutHero'
import SchoolIntro from '../../component/aboutUs/schoolIntro'
import VisionMissionValues from '../../component/aboutUs/visionMissionValues'
import AboutPrincipalMessage from '../../component/aboutUs/aboutPrincipalMessage'
import StaffSection from '../../component/aboutUs/staffSection'
import LicensesSection from '../../component/aboutUs/licensesSection'

const AboutUs = () => {
  return (
    <main className='w-full border-4'>
      <AboutHero />
      <div className='w-full px-12'>
        <SchoolIntro />
        <VisionMissionValues />
        <AboutPrincipalMessage />
        <StaffSection />
        <LicensesSection />
      </div>
    </main>
  )
}

export default AboutUs