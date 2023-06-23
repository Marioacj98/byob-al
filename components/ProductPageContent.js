

export default function ProductPageContent({ product }) {
  return (
    <div>
        {product.title.split(' ').slice(0, 2).join(' ')}
    </div>
  )
}
