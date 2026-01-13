import IphoneGold from '@/../public/discounts/iphone14ProGold.png'
import IphoneSilver from '@/../public/discounts/iphone14ProSilver.png'
import AppleWatch from '@/../public/discounts/appleWatch.png'
import AirPods from '@/../public/discounts/airPods.png'
import ProductCard from '../productCard/ProductCard'

const products = [
    {
        name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
        price: 1437,
        isFavorite: false,
        image: IphoneGold,
    },
    {
        name: 'AirPods Max SilverStarlight Aluminium ',
        price: 549,
        isFavorite: false,
        image: AirPods,
    },
    {
        name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ',
        price: 399,
        isFavorite: false,
        image: AppleWatch,
    },
    {
        name: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
        price: 1499,
        isFavorite: false,
        image: IphoneSilver,
    },
]

export default function DiscountsHomePage() {
    return (
        <section className='px-40 py-10'>
            <h2>Знижки до -50%</h2>
            <div className='flex gap-4'>
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
