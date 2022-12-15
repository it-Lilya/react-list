import React from 'react';
import List from './List.js'

Listing.defaultProp = {
    items: []
};

export default function Listing({ items }) {
    return (
      <div className="item-list">
        {items.map((item) => {
          if (item.state === 'removed') {
            return null;
          }
  
          return (
            <List
              key={item.listing_id}
              id={item.listing_id}
              url={item.url}
              MainImage={item.MainImage.url_570xN}
              title={item.title}
              currency_code={item.currency_code}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    );
  }
  

// listing_id — уникальный идентификатор предложения, число;
// url — ссылка на предложение, строка;
// MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
// title — название предложения, строка;
// currency_code — код валюты, строка;
// price — цена, строка;
// quantity — доступное количество, число.