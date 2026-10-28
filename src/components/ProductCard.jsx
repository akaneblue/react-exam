const ProductCard = ({product}) => {
    return (
        <div className="card">
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString('ko-KR')}원</p>
        </div>
    )
}

export default ProductCard
