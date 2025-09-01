import { productList } from '../data/products';
import ProductCard from './ProductCard';

export default function RelatedProducts() {
  return (
    <div>
      <div>
        <div>신발 상품 목록</div>
        <div>`현재 ${productList.length}개의 상품이 있습니다 `</div>
      </div>
      <div className="flex gap-[14px] ">
        {productList.map((i) => (
          <ProductCard key={i.id} brand={i.brand} message={i.message} price={i.price} state={i.state} />
        ))}
      </div>
    </div>
  );
}
