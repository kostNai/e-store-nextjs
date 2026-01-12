import Image from 'next/image'
import Airpods from '@/../public/airpodsLarge.png'
import AppleVision from '@/../public/appleVisionPro.png'
import MacBook from '@/../public/macbook.png'
import PlayStation from '@/../public/playStation.png'
import Link from 'next/link'

export default function ComboBanner() {
    return (
        <section className='flex'>
            <div className='flex-1'>
                <article className='flex pr-12'>
                    <Image
                        src={PlayStation}
                        alt='Зображення ігрової консолі Playstation 5'
                    />
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h3 className='text-5xl'>Playstation 5</h3>
                        <p className='text-text-secondary text-sm'>
                            Неймовірно потужні процесори, графічні процесори та
                            SSD-накопичувач з інтегрованим входом/виходом
                            змінять ваше уявлення про PlayStation.
                        </p>
                    </div>
                </article>
                <div className='flex'>
                    <article className='flex-1/2  flex gap-12 bg-bg-secondary-dark '>
                        <Image
                            src={Airpods}
                            alt='Зображення бездротових навушників Apple Airpods Large'
                        />
                        <div className='flex flex-col gap-4 py-12 pr-12'>
                            <h3 className='text-[40px] leading-11 font-geist font-light'>
                                Apple Airpods
                                <br />
                                <span className='font-semibold'>Max</span>
                            </h3>
                            <p className='text-text-secondary text-sm'>
                                Обчислювальний аудіо. Послухайте, це потужно
                            </p>
                        </div>
                    </article>
                    <article className='flex-1/2  bg-bg-dark pr-12'>
                        <div className='w-full h-full flex items-center gap-4'>
                            <Image
                                src={AppleVision}
                                alt='Зображення окулярів віртуальної реальності Apple Vision'
                            />
                            <div className='text-white text-3xl font-light'>
                                <h3>Apple Vision Pro</h3>
                                <p className='text-text-secondary mt-2 text-sm'>
                                    Захоплюючий спосіб насолодитися розвагами
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className='flex-1 bg-bg-secondary-dark'>
                <article className='relative w-full h-full flex items-center gap-3 pl-14 overflow-x-hidden'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[64px] font-thin'>
                            Macbook <span className='font-semibold'>Air</span>
                        </h3>
                        <p className=' text-sm text-text-secondary'>
                            Новий 15-дюймовий MacBook Air дає більше місця для
                            улюблених речей завдяки просторому дисплею Liquid
                            Retina.
                        </p>
                        <Link
                            href='/'
                            className='w-fit px-14 py-4 border border-solid border-black rounded-sm'
                        >
                            Купити зараз
                        </Link>
                    </div>
                    <Image
                        src={MacBook}
                        alt='Зображення ноутбука Apple Macbook Air'
                        className='-mr-60'
                    />
                </article>
            </div>
        </section>
    )
}
