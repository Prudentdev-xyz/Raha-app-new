import React from 'react'
import { ContactHero } from '../components/ContactHero'
import { ContactUs } from '../components/ContactUs'
import { FaqPage } from '../components/FaqPage'

export const ContactPage = () => {
  return (
    <div>
        <ContactHero />
        <ContactUs />
        <FaqPage />
    </div>
  )
}
