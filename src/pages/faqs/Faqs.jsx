import React from 'react'
import { Heading } from '../../components/common/common';
import Accordion from '../../components/ui/Accordion';

export default function Faqs() {
  return (
    <div>
    <Heading
    level={1}
    text='Frequently Asked Questions'
    customStyleHeading='!text-[36px]' />
    <p className='text-lg text-center text-[#3A3A3A]'>We provide best Marketing services.</p>
    <img src="/images/faq.png" alt="faq_image" className='mx-auto' />
    <div className='px-[70px]'>
      <Accordion />
    </div>
    </div>
  );
};
