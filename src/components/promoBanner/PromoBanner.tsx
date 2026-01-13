import AppleWatch from '@/../public/promo/appleWatch2.png'
import HuaweiHeadPhones from '@/../public/promo/huaweiHeadPhones.png'
import IpadPro from '@/../public/promo/ipadPro.png'
import MacbookPro from '@/../public/promo/macbookPro.png'
import SamsungGalaxy from '@/../public/promo/samsungGalaxy.png'
import Image from 'next/image'

const products = [
    {
        title: 'Popular Products',
        desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: HuaweiHeadPhones,
        bgColor: 'white',
    },
    {
        title: 'Ipad Pro',
        desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: IpadPro,
        bgColor: '#F9F9F9',
    },
    {
        title: 'Samsung Galaxy ',
        desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: SamsungGalaxy,
        bgColor: '#EAEAEA',
    },
    {
        title: 'Macbook Pro',
        desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        image: MacbookPro,
        bgColor: '#2C2C2C',
    },
]

export default function PromoBanner() {
    return (
        <section className='flex'>
            {products.map((product) => (
                <article
                    key={product.title}
                    style={{ backgroundColor: product.bgColor }}
                    className='flex flex-col'
                >
                    <div className='flex-1/3 flex justify-centeritems-center'>
                        <Image
                            src={product.image}
                            alt='Зображення продукту'
                            height={360}
                        />
                    </div>
                    <div
                        className={`${
                            product.bgColor === '#2C2C2C' && 'text-white'
                        } px-8 flex flex-col gap-4`}
                    >
                        <h3 className='text-3xl font-light'>{product.title}</h3>
                        <p className='text-sm text-text-secondary'>
                            {product.desc}
                        </p>
                        <button
                            className={`w-fit px-14 py-4 border ${
                                product.bgColor === '#2C2C2C'
                                    ? 'border-white'
                                    : 'border-black'
                            } rounded-md`}
                        >
                            Купити зараз
                        </button>
                    </div>
                </article>
            ))}
        </section>
    )
}
