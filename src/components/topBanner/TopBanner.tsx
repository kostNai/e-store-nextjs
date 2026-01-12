import Image from 'next/image'
import IphoneImage from '../../../public/iphoneImage.png'
import Link from 'next/link'

export default function TopBanner() {
    return (
        <section className='px-40 flex justify-between items-center bg-bg-banner-bg text-white'>
            <div className='flex flex-col gap-6'>
                <div>
                    <h4 className='text-2xl text-text-secondary font-semibold'>
                        Pro.Beyond.
                    </h4>
                    <h1 className='text-8xl my-6'>
                        Iphone 14 <span className='font-bold'>Pro</span>
                    </h1>
                    <p className='text-lg text-text-secondary'>
                        Створено, щоб змінити все на краще. Для всіх.
                    </p>
                </div>

                <Link
                    href='/'
                    className='w-fit px-14 py-4 border border-solid border-white rounded-sm'
                >
                    Купити зараз
                </Link>
            </div>
            <div>
                <Image
                    src={IphoneImage}
                    alt='Зображення телефону Iphone 14 pro'
                />
            </div>
        </section>
    )
}
