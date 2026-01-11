import Image from 'next/image'
import IphoneImage from '../../../public/iphoneImage.png'

export default function TopBanner() {
    return (
        <section className='px-40 flex justify-between items-center bg-bg-banner-bg text-white'>
            <div className=''>
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
                <div>
                    <button>Купити зараз</button>
                </div>
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
