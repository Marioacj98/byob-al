import { getProduct, getAllProducts } from '../../lib/shopify';
import ProductPageContent from '@/components/ProductPageContent';

const ProductPage = ({ product }) => {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
        <ProductPageContent product={product} />
    </div>
  )
}

export default ProductPage

export async function getStaticPaths() {
    const products = await getAllProducts();

    const paths = products.map(item => {
        const product = String(item.node.handle);

        return {
            params: { product }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const product = await getProduct(params.product );

    return {
        props: {
            product
        }
    }
}