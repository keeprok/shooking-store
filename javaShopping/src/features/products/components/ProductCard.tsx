import type { ProductCardPT } from '../types/produts';

export default function ProductCard({ brand, message, price, state }: ProductCardPT) {
  return (
    <div className="w-[184px] h-[247px] rounded-[15px] bg-white shadow-sm overflow-hidden border-[#F2F2F2]">
      {/* 이미지 영역 */}
      <div className="w-full h-[120px] bg-gray-100" />
      {/* 본문 */}
      <div className="w-full h-[127px] flex items-center justify-center p-3  ">
        <div className="w-full flex flex-col justify-between gap-[7px]">
          <div className="text-sm font-semibold">{brand}</div>
          <div className="text-xs text-[#7C7A7A] leading-snug">{message}</div>
          <div className="text-sm font-bold">{price}</div>

          <div className="flex gap-[9px]">
            <button
              className={`flex-1 h-9 rounded-md text-sm ${
                state ? 'bg-gray-300 text-black cursor-default' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {state ? '담김!' : '담기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
font 스타일 : Montserrat 
brand : Weight : 500 , size : 16px
message : Weight : 400 , size : 13px
price : Weight : 500 , size : 14px
담기 부분  : with : 43px ,  height : 21px
text weight : 700size : 10px
*/
