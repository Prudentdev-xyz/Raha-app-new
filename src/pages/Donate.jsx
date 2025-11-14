import React from 'react'
import { DonationHero } from '../components/DonateHero'
import { StartDonation } from '../components/layouts/StartDonation'
import { FaqPage } from '../components/FaqPage'

export const Donate = () => {
  return (
<div>
  <DonationHero />
  <StartDonation />
  <FaqPage />
</div>
  )
}
