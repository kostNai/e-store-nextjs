import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { FiUser, FiSearch } from 'react-icons/fi'

export default function Header() {
    return (
        <header className='px-40 py-4 flex gap-14 justify-between items-center'>
            <div className='shrink-0'>
                <Link href='/' className='font-black'>
                    E-Store
                </Link>
            </div>
            <div className='w-full'>
                <div className='relative '>
                    <input
                        type='text'
                        placeholder='Пошук'
                        className='bg-bg-input w-full py-5 pl-11 pr-5 rounded-lg'
                    />
                    <FiSearch
                        size={16}
                        color='gray'
                        className='absolute top-1/2 left-5 -translate-y-1/2'
                    />
                </div>
            </div>
            <div className='shrink-0'>
                <nav className='flex gap-14 text-text-secondary'>
                    <Link
                        href='/'
                        className='transition duration-300 hover:text-black'
                    >
                        Домашня
                    </Link>
                    <Link
                        href='/about'
                        className='transition duration-300 hover:text-black'
                    >
                        Про нас
                    </Link>
                    <Link
                        href='/contacts'
                        className='transition duration-300 hover:text-black'
                    >
                        Контакти
                    </Link>
                    <Link
                        href='/blog'
                        className='transition duration-300 hover:text-black'
                    >
                        Блог
                    </Link>
                </nav>
            </div>
            <div className='flex gap-6 items-center shrink-0'>
                <Link
                    href='/favorite'
                    className='transition-transform duration-300 hover:scale-125'
                >
                    <FaRegHeart size={20} />
                </Link>
                <Link
                    href='/cart'
                    className='transition-transform duration-300 hover:scale-125'
                >
                    <IoCartOutline size={20} />
                </Link>
                <Link
                    href='/login'
                    className='transition-transform duration-300 hover:scale-125'
                >
                    <FiUser size={20} />
                </Link>
            </div>
        </header>
    )
}
