import CategoriesListHomePage from '@/components/categoriesListHomePage/CategoriesListHomePage'
import ComboBanner from '@/components/comboBanner/ComboBanner'
import TopBanner from '@/components/topBanner/TopBanner'

export default function Home() {
    return (
        <div className=''>
            <TopBanner />
            <ComboBanner />
            <CategoriesListHomePage />
        </div>
    )
}
