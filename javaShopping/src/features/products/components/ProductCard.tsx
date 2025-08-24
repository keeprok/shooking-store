export default function ProductCard() {
  return (
    <div className="w-[184px] h-[247px] rounded-[15px] bg-white shadow-sm overflow-hidden">
      {/* 이미지 영역 */}
      <div className="w-full h-[120px] bg-gray-100" />

      {/* 본문 */}
      <div className="w-full h-[127px] flex items-center justify-center p-3">
        <div className="w-full flex flex-col justify-between gap-2">
          <div className="text-sm font-semibold">브랜드a</div>
          <div className="text-xs text-gray-500 leading-snug">편안하고 착용감이 좋은 신발</div>
          <div className="text-sm font-bold">35,000원</div>

          <div className="flex gap-[9px]">
            <button className="flex-1 h-9 rounded-md bg-black text-white text-sm">담기</button>
            <button className="flex-1 h-9 rounded-md  bg-yellow text-sm">구매</button>
          </div>
        </div>
      </div>
    </div>
  );
}
