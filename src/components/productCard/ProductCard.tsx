import Image, { StaticImageData } from 'next/image'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'

type Props = {
    name: string
    price: number
    isFavorite: boolean
    image: StaticImageData
}

export default function ProductCard({ name, price, image, isFavorite }: Props) {
    return (
        <article className='mt-8 flex-1/5 px-4 py-6 flex flex-col items-center justify-between gap-4 bg-bg-secondary-light rounded-lg'>
            <div className='w-full flex justify-end'>
                {isFavorite ? (
                    <IoMdHeart size={30} color='red' />
                ) : (
                    <IoIosHeartEmpty size={30} color='gray' />
                )}
            </div>
            <Image
                src={image}
                alt='Зображення продукту'
                width={160}
                height={160}
            />
            <div className='w-full h-full flex flex-col justify-between items-center gap-4'>
                <h4 className='text-center tracking-tighter'>{name}</h4>
                <p className='mt-4  text-2xl font-semibold'>
                    {Math.floor(price * 43.28)}грн
                </p>
            </div>
            <div className='w-full px-6'>
                <button className='w-full py-3 bg-black text-white rounded-lg'>
                    Купити зараз
                </button>
            </div>
        </article>
    )
}
