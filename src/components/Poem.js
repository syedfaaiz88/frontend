import React from 'react';
import { GiLightningStorm } from 'react-icons/gi';
import { HiPaintBrush } from 'react-icons/hi2';
import { ImFire } from 'react-icons/im';
import { PiRocketLaunchDuotone } from 'react-icons/pi';
import { TbBulbFilled } from 'react-icons/tb';

const Poem = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className='text-lg md:text-2xl lg:text-3xl font-bold text-gray-700 mb-3'>~ Syed Faaiz</div>
      <div className="space-y-2 text-gray-800 leading-relaxed text-xs md:text-sm lg:text-sm">
        <p>In a realm of words, where meaning takes flight,</p>
        <p>I'll craft a poem, shining with gentle light.</p>
        <p>For you, Faaiz, a name so unique and bright,</p>
        <p>Let's weave verses that dance, like stars in the night.</p>
        <div className="flex items-start space-x-4 mb-6">
          <ImFire className="text-gray-500 text-3xl" />
          <div>
            <p className="font-semibold">F is for the fire that fuels your soul,</p>
            <p>A passionate spirit, beyond measure or control.</p>
            <p>With every endeavor, you strive to excel,</p>
            <p>Guided by dreams, where boundless stories dwell.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mb-6">
          <HiPaintBrush className="text-gray-500 text-3xl" />
          <div>
            <p className="font-semibold">A is for the artistry that flows in your veins,</p>
            <p>A creator at heart, where imagination reigns.</p>
            <p>Your brushstrokes of brilliance paint vibrant scenes,</p>
            <p>In every stroke, revealing what your mind dreams.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mb-6">
          <PiRocketLaunchDuotone className="text-gray-500 text-3xl" />
          <div>
            <p className="font-semibold">A is for the ambition that fuels your drive,</p>
            <p>A determination within, forever alive.</p>
            <p>With every step you take, you reach for the sky,</p>
            <p>Unyielding and bold, ready to defy.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mb-6">
          <TbBulbFilled className="text-gray-500 text-3xl" />          
          <div>
            <p className="font-semibold">I is for the inspiration you share with grace,</p>
            <p>A beacon of light, uplifting every place.</p>
            <p>Through words or deeds, your impact is profound,</p>
            <p>In hearts and minds, your presence is renowned.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mb-6">
          <GiLightningStorm className="text-gray-500 text-3xl" />
          <div>
            <p className="font-semibold">Z is for the zeal that ignites your core,</p>
            <p>A spark of energy that forever soars.</p>
            <p>With boundless enthusiasm, you face each day,</p>
            <p>Embracing life's gifts in your own unique way.</p>
          </div>
        </div>
        <p>So, Faaiz, let this poem be a tribute to you,</p>
        <p>A celebration of all that you say and do.</p>
        <p>May your journey be filled with joy and delight,</p>
        <p>As you chase your dreams, soaring to new heights.</p>
      </div>
    </div>
  );
};

export default Poem;
