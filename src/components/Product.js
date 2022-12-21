/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  const { product } = props;
  return (
    <article className="product">
      <img className="product__img" src={product.image} alt={product.title} />
      <div className="product__details">
        <h4 className="product__title">{product.title}</h4>
        <p className="product__price">Fiyat: ₺{product.price}</p>
        <p className="product__rating">Değerlendirme: {product.rating.rate}/5</p>
        <p className="product__desc">Açıklama: {product.description}</p>
        <button className="product__btn btn">Sepete Ekle</button>
      </div>
    </article>
  );
};

export default Product;
