import React from 'react'
import { SERVICES } from '@/constants/constants'
import Card from '../common/card/Card'

const Services = () => {
  return (
    <section className='py-24 px-8 w-full min-h-screen '>
      <div className='max-w-[1440px] mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='tracking-wide text-primary-200 text-5xl font-bold font-milkwhite mb-4'>
            My Services
          </h2>
          <p className='text-primary-100 text-xl max-w-2xl mx-auto'>
            Delivering excellence through specialized expertise and innovative solutions
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center'>
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              smallTitle={service.title.split(' ')[0]} 
              bigTitle={service.title}
              imageSrc={service?.imageSrc || `/default_services.png`} 
              imageAlt={service.title}
              hideNextArrow={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
