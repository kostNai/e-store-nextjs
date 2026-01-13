import CategoriesListHomePage from '@/components/categoriesListHomePage/CategoriesListHomePage'
import ComboBanner from '@/components/comboBanner/ComboBanner'
import HomePageProductList from '@/components/homePageProductList/HomePageProductList'
import PromoBanner from '@/components/promoBanner/PromoBanner'
import TopBanner from '@/components/topBanner/TopBanner'

export default function Home() {
    return (
        <div className=''>
            <TopBanner />
            <ComboBanner />
            <CategoriesListHomePage />
            <HomePageProductList />
            <PromoBanner />
        </div>
    )
}
