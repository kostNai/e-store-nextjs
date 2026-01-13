import AppleWatch from '@/../public/bottomBanner/appleWatch.png'
import GalaxyTab from '@/../public/bottomBanner/galaxyTab.png'
import Iphone17 from '@/../public/bottomBanner/iphone17.png'
import MacbookAir from '@/../public/bottomBanner/macbookAir.png'
import Image from 'next/image'

export default function BottomBanner() {
    return (
        <section className='relative w-full pt-40 pb-22.5 bg-linear-to-r from-[#2E2E2E] to-[#0C0C0C] text-white flex flex-col items-center overflow-hidden'>
            <div className='absolute -left-30 -bottom-10'>
                <div className='relative w-80 h-60'>
                    <Image
                        src={GalaxyTab}
                        alt='Зображення планшету Samsung galaxy tab'
                        className='absolute left-0 bottom-10 rotate-12'
                        style={{ objectFit: 'contain' }}
                        fill
                    />
                </div>
            </div>
            <div className='absolute -top-10 -left-20 rotate-45'>
                <div className='relative w-80 h-60'>
                    <Image
                        src={MacbookAir}
                        alt='Зображення ноутбука Macbook Air'
                        className='absolute left-0 -top-10'
                        style={{ objectFit: 'contain' }}
                        fill
                    />
                </div>
            </div>
            <div className='absolute top-2 -right-10 rotate-12'>
                <div className='relative w-80 h-60'>
                    <Image
                        src={Iphone17}
                        alt='Зображення тулефона Iphone 17'
                        className='absolute right-0 top-10'
                        style={{ objectFit: 'contain' }}
                        fill
                    />
                </div>
            </div>
            <div className='absolute -right-5 -bottom-5 -rotate-12'>
                <div className='relative w-60 h-40'>
                    <Image
                        src={AppleWatch}
                        alt='Зображення годинника Apple watch'
                        className='absolute right-0 bottom-10 '
                        style={{ objectFit: 'contain' }}
                        fill
                    />
                </div>
            </div>
            <h2 className='text-7xl font-thin capitalize'>
                Великий літній <span className='font-normal'>розпродаж</span>
            </h2>
            <p className='text-text-secondary'>
                Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <button className='mt-10 px-14 py-4 border border-white border-solid rounded-md'>
                Купити зараз
            </button>
        </section>
    )
}
