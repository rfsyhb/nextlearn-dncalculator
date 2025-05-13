'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Utility() {
  const [cherryCreditRate, setCherryCreditRate] = useState(66000);
  const [goldRupiahRate, setGoldRupiahRate] = useState(28000);
  const [cashToConvert, setCashToConvert] = useState(290);

  const cherryCreditRateEach = cherryCreditRate / 5000;
  const goldRateEach = goldRupiahRate / 100;
  const cashToGoldRate = (cashToConvert * cherryCreditRateEach) / goldRateEach;

  return (
    <main className='flex flex-col'>
      <h2 className='text-2xl font-semibold'>Cash to Gold Converter</h2>
      <div className='flex flex-col gap-1'>
        <section className='flex flex-col gap-1'>
          <div className='flex flex-row gap-2 items-center'>
            <input
              type='number'
              value={cherryCreditRate}
              onChange={(e) => setCherryCreditRate(Number(e.target.value))}
              className='w-24 border-2 border-gray-300 rounded-md p-1'
            />
            <span>
              Harga 5000 CC di{' '}
              <Link
                href='https://www.itemku.com/g/cherry-credits'
                target='_blank'
                className='text-blue-400 hover:text-blue-500'
              >
                itemku
              </Link>{' '}
            </span>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <input
              type='number'
              value={goldRupiahRate}
              onChange={(e) => setGoldRupiahRate(Number(e.target.value))}
              className='w-24 border-2 border-gray-300 rounded-md p-1'
            />
            <span>Rate 100 Gold dalam Rp <span className='text-xs'>(tante anaknya RMT tante)</span></span>
          </div>
        </section>
        <section className='flex flex-col gap-1'>
          <div className='flex flex-row gap-2 items-center'>
            <input
              type='number'
              value={cashToConvert}
              onChange={(e) => setCashToConvert(Number(e.target.value))}
              className='w-24 border-2 border-gray-300 rounded-md p-1'
            />
            <span>Total cash yang ingin di-convert</span>
          </div>
          {cashToConvert === 0 ? (
            <span className='text-red-500 text-lg'>Cash belum ditentukan!</span>
          ) : (
              <span className='text-green-500 text-lg'>Total gold yang didapat: <span className='text-yellow-300'>{cashToGoldRate.toFixed(2)} gold</span></span>
          )}
        </section>
      </div>
    </main>
  );
}
