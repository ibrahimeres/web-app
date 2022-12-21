import React from 'react';

import Products from './components/Products';

const products = [
  {
    id: 1,
    title: 'Nike mercurial mavi krampon',
    price: 109.95,
    description:
      'Vapor 15 Academy MG ile sahaya hükmet. Zoom Air birimine ve olağanüstü temas sunmak için esnek NikeSkin üst kısma sahip silüet, maçın kaderini belirleyen son dakikalarda sahaya hükmetmene yardımcı olur. Fast is in the Air.',
    category: "krampon",
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ef6e1a58-27db-4d64-b71f-564d80e0264c/mercurial-vapor-14-elite-fg-kuru-%C3%A7im-zemin-kramponu-gSCd8q.png',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Futbol Tekmeliği',
    price: 22.3,
    description:
      'Saha içinde sizi darbelerden korur.',
    category: "Tekmelik",
    image: 'https://m.media-amazon.com/images/I/41TtgtIzo3L._AC_SY780_.jpg',
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: 'Kondisyon Bisikleti',
    price: 55.99,
    description:
      'Evde spor yapmak için bire bir.',
    category: "kondisyon-bisikleti",
    image: 'https://productimages.hepsiburada.net/s/33/1500/10392830476338.jpg',
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: 'Erkek Hırka',
    price: 15.99,
    description:
    "Yüzde 100 pamuk",
    category: "men's clothing",
    image: 'https://img-lcwaikiki.mncdn.com/mnresize/600/-/pim/productimages/20212/5040600/v1/l_20212-w10658z8-cvl_a1.jpg',
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "Spor SweatShirt",
    price: 695,
    description:
      "Soğuk Kış Aylarında Spor yaparken lazım olacaktır.",
    category: 'sweatshirt',
    image: 'https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20212/5684657/l_20212-w1lf97z8-rrd_a.jpg',
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: 'Dambıl',
    price: 168,
    description:
      'Çeşitli ağırlıklarda dambıl',
    category: 'dambil',
    image: 'https://m.media-amazon.com/images/I/41h7P+0yKlS._AC_SY780_.jpg',
    rating: {
      rate: 3.9,
      count: 70
    }
  }
];

const App = () => {
  return (
    <div>
      <h1 className="title">Sport 2000</h1>
      <Products products={products} />
    </div>
  );
};

export default App;
