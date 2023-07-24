import React from 'react';

function FilterShops(shops, filterAttr){
  const filteredShops = shops.filter((shop) =>{

      return(
          // TODO: shop["budget"]["average"]がnullの場合の処理はtrueにする処理をかく
          // 予算内かどうか
          shop["budget"]["average"] < filterAttr["maxBuget"] &&
          //除くべきジャンルかどうか
          !(filterAttr["excludeGenre"].includes(shop["genre"]["name"]))
      );
  })

  return filteredShops;
}

export default FilterShops;