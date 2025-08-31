import type { ProductCardPT } from '../types/produts';

export default function ProductCard({ brand, message, price, state }: ProductCardPT) {
  return (
    <div className="w-[184px] h-[247px] rounded-[15px] bg-white shadow-sm overflow-hidden">
      {/* 이미지 영역 */}
      <div className="w-full h-[120px] bg-gray-100" />

      {/* 본문 */}
      <div className="w-full h-[127px] flex items-center justify-center p-3  border-[#F2F2F2]">
        <div className="w-full flex flex-col justify-between gap-2">
          <div className="text-sm font-semibold">{brand}</div>
          <div className="text-xs text-gray-500 leading-snug">{message}</div>
          <div className="text-sm font-bold">{price}</div>

          <div className="flex gap-[9px]">
            <button
              className={`flex-1 h-9 rounded-md text-sm ${
                state ? 'bg-gray-300 text-black cursor-default' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {state ? '담김' : '담기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
