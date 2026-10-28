import ProductCard from "../components/ProductCard"
import { products } from "../datas/products"

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map((p) => (
                <ProductCard key={p.id} product = {p} />))}
        </div>
    )
}

export default ProductList