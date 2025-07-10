import Link from 'next/link'

import Pagination from '@/components/shared/Pagination'
import ProductCard from '@/components/shared/product/ProductCard'
import { Button } from '@/components/ui/button'




import { getAllCategories, getAllProducts,getAllTags} from '@/lib/actions/products.actions'
import { IProduct } from '@/lib/db/models/product.models'
import ProductSortSelector from '@/components/shared/product/ProductSortSelector'
import { getFilterUrl, toSlug } from '@/lib/utils'
import Rating from '@/components/shared/product/Rating'
import CollapsibleOnMobile from '@/components/shared/CollapsibleOnMobile'

const sortOrders = [
  { value: 'price-low-to-high', name: 'Price: Low to high' },
  { value: 'price-high-to-low', name: 'Price: High to low' },
  { value: 'newest-arrivals', name: 'Newest arrivals' },
  { value: 'avg-customer-review', name: 'Avg. customer review' },
  { value: 'best-selling', name: 'Best selling' },
]

const prices = [
  {
    name: '$1 to $20',
    value: '1-20',
  },
  {
    name: '$21 to $50',
    value: '21-50',
  },
  {
    name: '$51 to $1000',
    value: '51-1000',
  },
]

export async function generateMetadata(props: {
  searchParams: Promise<{
    q: string
    category: string
    tag: string
    price: string
    rating: string
    sort: string
    page: string
  }>
}) {
  const searchParams = await props.searchParams
  const {
    q = 'all',
    category = 'all',
    tag = 'all',
    price = 'all',
    rating = 'all',
  } = searchParams

  if (
    (q !== 'all' && q !== '') ||
    category !== 'all' ||
    tag !== 'all' ||
    rating !== 'all' ||
    price !== 'all'
  ) {
    return {
      title: `Search ${q !== 'all' ? q : ''}
          ${category !== 'all' ? ` : Category ${category}` : ''}
          ${tag !== 'all' ? ` : Tag ${tag}` : ''}
          ${price !== 'all' ? ` : Price ${price}` : ''}
          ${rating !== 'all' ? ` : Rating ${rating}` : ''}`,
    }
  } else {
    return {
      title: 'Search Products',
    }
  }
}

export default async function SearchPage(props: {
  searchParams: Promise<{
    q: string
    category: string
    tag: string
    price: string
    rating: string
    sort: string
    page: string
  }>
}) {
  const searchParams = await props.searchParams

  const {
    q = 'all',
    category = 'all',
    tag = 'all',
    price = 'all',
    rating = 'all',
    sort = 'best-selling',
    page = '1',
  } = searchParams

  const params = { q, category, tag, price, rating, sort, page }

  const categories = await getAllCategories()
  const tags = await getAllTags()
  const data = await getAllProducts({
    category,
    tag,
    query: q,
    price,
    rating,
    page: Number(page),
    sort,
  })
  return (
    <div className=' flex flex-col justify-center items-center w-full py-[50px]'>
      <div className='mb-2 py-2 md:border-b flex-between flex-col md:flex-row '>
        <div className='flex items-center'>
          {data.totalProducts === 0
            ? 'No'
            : `${data.from}-${data.to} of ${data.totalProducts}`}{' '}
          results
          {(q !== 'all' && q !== '') ||
          (category !== 'all' && category !== '') ||
          (tag !== 'all' && tag !== '') ||
          rating !== 'all' ||
          price !== 'all'
            ? ` for `
            : null}
          {q !== 'all' && q !== '' && '"' + q + '"'}
          {category !== 'all' && category !== '' &&   `  Category: ` + category}
          {tag !== 'all' && tag !== '' && `   Tag: ` + tag}
          {price !== 'all' && `    Price: ` + price}
          {rating !== 'all' && `   Rating: ` + rating + ` & up`}
          &nbsp;
          {(q !== 'all' && q !== '') ||
          (category !== 'all' && category !== '') ||
          (tag !== 'all' && tag !== '') ||
          rating !== 'all' ||
          price !== 'all' ? (
            <Button variant={'link'} asChild>
              <Link href='/search'>Clear</Link>
            </Button>
          ) : null}
        </div>
        <div >
          <ProductSortSelector
            sortOrders={sortOrders}
            sort={sort}
            params={params}
          />
        </div>
      </div>
      <div className=' grid md:grid-cols-5 md:gap-4 lg:w-[80%]'>
        <CollapsibleOnMobile title='Filters'>
          <div className='space-y-4'>
        <div>
  <div className="font-bold">Department</div>
  <ul>
    <li>
      <Link
        className={`inline-block px-4 py-2 rounded border transition duration-300 
          ${'all' === category || '' === category ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        href={getFilterUrl({ category: 'all', params })}
      >
        All
      </Link>
    </li>
    {categories.map((c: string) => (
      <li key={c}>
        <Link
          className={`inline-block px-4 py-2 rounded border mt-[10px] w-[150px] transition duration-300 
            ${c === category ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          href={getFilterUrl({ category: c, params })}
        >
          {c}
        </Link>
      </li>
    ))}
  </ul>
</div>
            <div>
  <div className="font-bold">Price</div>
  <ul>
    <li>
      <Link
        className={`inline-block px-4 py-2 rounded border transition duration-300 
          ${'all' === price ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        href={getFilterUrl({ price: 'all', params })}
      >
        All
      </Link>
    </li>
    {prices.map((p) => (
      <li key={p.value}>
        <Link
          href={getFilterUrl({ price: p.value, params })}
          className={`inline-block px-4 py-2 rounded border transition duration-300 w-[150px] mt-[10px]
            ${p.value === price ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {p.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
          <div>
  <div className="font-bold">Customer Review</div>
  <ul>
    <li>
      <Link
        href={getFilterUrl({ rating: 'all', params })}
        className={`inline-block px-4 py-2 rounded border transition duration-300 
          ${'all' === rating ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
      >
        All
      </Link>
    </li>

    <li>
      <Link
        href={getFilterUrl({ rating: '4', params })}
        className={`inline-block px-4 py-2 rounded border transition duration-300 mt-[10px]
          ${'4' === rating ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
      >
        <div className='flex items-center'>
          <Rating size={4} rating={4} /> & Up
        </div>
      </Link>
    </li>
  </ul>
</div>
            <div>
  <div className="font-bold">Tag</div>
  <ul>
    <li>
      <Link
        className={`inline-block px-4 py-2 rounded border transition duration-300 
          ${('all' === tag || '' === tag) ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        href={getFilterUrl({ tag: 'all', params })}
      >
        All
      </Link>
    </li>
    {tags.map((t: string) => (
      <li key={t}>
        <Link
          href={getFilterUrl({ tag: t, params })}
          className={`inline-block px-4 py-2 rounded border transition duration-300 w-[150px] mt-[10px]
            ${toSlug(t) === tag ? 'bg-green-400 text-white border-green-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {t}
        </Link>
      </li>
    ))}
  </ul>
</div>
          </div>
        </CollapsibleOnMobile>

        <div className='md:col-span-4 space-y-4'>
          <div>
            <div className='font-bold text-xl'>Results</div>
            <div>Check each product page for other buying options</div>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3  '>
            {data.products.length === 0 && <div>No product found</div>}
            {data.products.map((product: IProduct) => (
              <ProductCard  key={product._id} product={product} />
            ))}
          </div>
          <div className='w-full'>
                    {data!.totalPages! > 1 && (
            <Pagination page={page} totalPages={data!.totalPages} />
          )}
          </div>
          
        </div>
      </div>
    </div>
  )
}