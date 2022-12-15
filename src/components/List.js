import React from "react";
import PropTypes from "prop-types";
import Format from "./Format";
import classNames from "classnames";

function List(props) {
    const { url, MainImage, title, currency_code, price, quantity } = props;
    console.log(props)
    const titleLimit = 50;

  const className = classNames('item-quantity', {
    'level-low': quantity <= 10,
    'level-medium': quantity > 10 && quantity <= 20,
    'level-high': quantity > 20,
  });


  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {title.length > titleLimit  ? `${title.slice(0, titleLimit + 1)}…` : title}</p>
        <p className="item-price">{Format(currency_code, price)}</p>
        <p className={className}>{quantity} left</p>
      </div>
    </div>
  );
}

List.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
};

export default List;