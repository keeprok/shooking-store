import ProductCard from './ProductCard';

export default function RelatedProducts() {
  const productList = [
    {
      id: 1,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 2,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 3,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 4,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 5,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 6,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 7,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
    {
      id: 8,
      img: '',
      brand: '',
      state: '',
      message: '',
      price: '',
    },
  ];
  return (
    <div>
      <div className="flex gap-[14px] ">
        {productList.map((i) => (
          <ProductCard key={i.id} />
        ))}
        {/*  */}
      </div>
    </div>
  );
}
