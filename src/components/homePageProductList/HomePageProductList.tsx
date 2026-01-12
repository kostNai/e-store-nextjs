import AirPods from '@/../public/products/airpodsMax.png'
import AppleWatch from '@/../public/products/appleWatch.png'
import Camera from '@/../public/products/camera.png'
import GalaxyBuds from '@/../public/products/galaxyBuds.png'
import GalaxyWatch from '@/../public/products/galaxyWatch.png'
import GalaxyZFold from '@/../public/products/galaxyZFold.png'
import Ipad from '@/../public/products/ipad.png'
import Iphone14Pro from '@/../public/products/iphone14Pro.png'
import Link from 'next/link'
import ProductCard from '../productCard/ProductCard'

const products = [
    {
        name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
        price: 900,
        isFavorite: false,
        image: Iphone14Pro,
    },
    {
        name: 'Blackmagic Pocket Cinema Camera 6k',
        price: 2535,
        isFavorite: false,
        image: Camera,
    },
    {
        name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ',
        price: 399,
        isFavorite: false,
        image: AppleWatch,
    },
    {
        name: 'AirPods Max Silver Starlight Aluminium',
        price: 549,
        isFavorite: false,
        image: AirPods,
    },
    {
        name: 'Samsung Galaxy Watch6 Classic 47mm Black',
        price: 369,
        isFavorite: false,
        image: GalaxyWatch,
    },
    {
        name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
        price: 1799,
        isFavorite: true,
        image: GalaxyZFold,
    },
    {
        name: 'Galaxy Buds FE Graphite',
        price: 99.99,
        isFavorite: false,
        image: GalaxyBuds,
    },
    {
        name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
        price: 398,
        isFavorite: false,
        image: Ipad,
    },
]

export default function HomePageProductList() {
    return (
        <section className='px-40 py-16'>
            <div className='flex items-center gap-8 text-lg text-text-secondary font-semibold'>
                <Link
                    href='/'
                    className='text-black border-b-2 boder-b-solid border-b-black'
                >
                    Нові надходження
                </Link>
                <Link href='/'>Топ продажів</Link>
                <Link href='/'>Рекомендовані товари</Link>
            </div>
            <div className='flex gap-4 flex-wrap'>
                {products.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        isFavorite={product.isFavorite}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    )
}
