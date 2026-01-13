import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
    return (
        <footer className='px-40 py-26 bg-black text-text-secondary flex flex-col gap-6'>
            <div className='flex justify-between '>
                <div className='mr-28'>
                    <Link href='/' className='text-white font-black'>
                        E-Store
                    </Link>
                    <p className='mt-6 text-sm'>
                        Ми — компанія з продажу електроніки, що базується у
                        Дніпрі. Наші магазини пропонують найкращі ціни та
                        сервіс.
                    </p>
                </div>
                <div className='flex gap-8'>
                    <div className='w-73.75'>
                        <h4 className='text-white font-semibold'>Сервіси</h4>
                        <ul className='mt-2 flex flex-col gap-2 text-sm font-light *:transition-colors *:duration-300 *:hover:text-white'>
                            <li>
                                <Link href='/'>Бонусна програма</Link>
                            </li>
                            <li>
                                <Link href='/'>Подарункові картки</Link>
                            </li>
                            <li>
                                <Link href='/'>Кредит і оплата</Link>
                            </li>
                            <li>
                                <Link href='/'>Сервісні контракти</Link>
                            </li>
                            <li>
                                <Link href='/'>Безготівковий рахунок</Link>
                            </li>
                            <li>
                                <Link href='/'>Оплата</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-73.75'>
                        <h4 className='text-white font-semibold'>
                            Допомога покупцеві
                        </h4>
                        <ul className='mt-2 flex flex-col gap-2 text-sm font-light *:transition-colors *:duration-300 *:hover:text-white'>
                            <li>
                                <Link href='/'>Знайти замовлення</Link>
                            </li>
                            <li>
                                <Link href='/'>Умови доставки</Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    Обмін та повернення товарів
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>Гарантія</Link>
                            </li>
                            <li>
                                <Link href='/'>Часто задавані питання</Link>
                            </li>
                            <li>
                                <Link href='/'>Умови користування сайту</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-9 *:transition-transform *:duration-300 *:hover:scale-125'>
                <Link href='/'>
                    <FaTwitter className='text-white' />
                </Link>
                <Link href='/'>
                    <FaFacebookF className='text-white' />
                </Link>
                <Link href='/'>
                    <FaTiktok className='text-white' />
                </Link>
                <Link href='/'>
                    <RiInstagramFill className='text-white' />
                </Link>
            </div>
        </footer>
    )
}
