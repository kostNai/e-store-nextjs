import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import Cameras from '@/../public/icons/cameras.svg'
import Computers from '@/../public/icons/computers.svg'
import Gaming from '@/../public/icons/gaming.svg'
import HeadPhones from '@/../public/icons/headphones.svg'
import Phones from '@/../public/icons/phones.svg'
import SmartWatches from '@/../public/icons/smartWatches.svg'
import Image from 'next/image'
import Link from 'next/link'

const categoriesData = [
    { name: 'Телефони', icon: Phones, href: '/phones' },
    { name: 'Смарт годинники', icon: SmartWatches, href: '/smart-watches' },
    { name: 'Камери', icon: Cameras, href: '/cameras' },
    { name: 'Навушники', icon: HeadPhones, href: 'headphones' },
    { name: "Комп'ютери", icon: Computers, href: 'computers' },
    { name: 'Gaming', icon: Gaming, href: 'gaming' },
]

export default function CategoriesListHomePage() {
    return (
        <section className='w-full px-40 py-20'>
            <div className='w-full flex items-center justify-between'>
                <h3>Переглянути за категорією</h3>
                <div className='flex gap-4 items-center'>
                    <IoIosArrowBack size={32} />
                    <IoIosArrowForward size={32} />
                </div>
            </div>
            <div className='mt-8 flex justify-between items-center gap-8'>
                {categoriesData.map((category) => (
                    <Link
                        href={category.href}
                        key={category.name}
                        className='flex-1 flex flex-col justify-center items-center gap-2 py-6 bg-bg-secondary-dark rounded-2xl'
                    >
                        <Image
                            src={category.icon}
                            alt='Зображення з іконкою категорії'
                        />
                        <p>{category.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
