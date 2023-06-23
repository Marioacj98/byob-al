import Link from 'next/link';
import Image from 'next/image';
import { formmatter } from '@/utils/helpers';

const ProductCard = ({ product }) => {
    const { handle, title } = product.node;
    const { altText, url } = product.node.images.edges[0].node;
    const price = product.node.priceRange.minVariantPrice.amount;

    return (
        <Link legacyBehavior href={`/products/${handle}`}>
            <a className='group'>
                <div className='w-full bg-gray-200 rounded-3xl overflow-hidden'>
                    <div className='relative transition duration-150 group-hover:opacity-75 h-72'>
                        <Image
                            src={url}
                            alt={altText ? altText : title}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
                <h3 className='mt-4 text-lg font-medium text-gray-900 text-center'>{title.split(' ').slice(0, 2).join(' ')}</h3>
                <p className='mt-1 text-sm text-gray-700 text-center'>{formmatter.format(price)}</p>
            </a>
        </Link>
    )
}

export default ProductCard