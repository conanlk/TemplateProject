import React from 'react'
import style from './style.module.scss'

const data = [
  {
    id: 1,
    title: 'Gigabyte GeForce RTX 3060 Ti Eagle 8G',
    sku: 'GV-N306TEAGLE-8GD',
    img: '001.jpg',
    price: 599,
    oldPrice: 736,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 2,
    title: 'Gigabyte GeForce GTX 1660 Super Gaming OC 6GB GDDR6',
    sku: 'GV-N166SGAMING OC-6GD',
    img: '002.jpg',
    price: 399.99,
    oldPrice: 470,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 3,
    title: 'Palit GeForce RTX 2070 Super GR 8GB GDDR6',
    sku: 'NE6207S020P2-1040G',
    img: '003.jpg',
    price: 649,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 4,
    title: 'Palit GeForce RTX 3080 GamingPro 10GB GDDR6X',
    sku: 'NED3080019IA-132AA',
    img: '004.jpg',
    price: 789.99,
    oldPrice: 1099,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
]

const General26 = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <h4>Total: $2,436.00</h4>
        <span>4 Items</span>
      </div>
      {data.map((item) => (
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          key={item.id}
          className={`clearfix ${style.item}`}
        >
          <div className={style.image}>
            <img src={`/resources/images/products/${item.img}`} alt={item.title} />
          </div>
          <div className={style.info}>
            <div className={style.title}>{item.title}</div>
            <div className={style.description}>{item.description}</div>
            <div className={style.price}>
              <strong>${item.price}</strong>
              {item.oldPrice && (
                <sup>
                  <strike>${item.oldPrice}</strike>
                </sup>
              )}
              <span className="ml-1">x1</span>
            </div>
          </div>
          <span className={style.close}>
            <i className="fe fe-x-circle" />
          </span>
        </a>
      ))}
      <div className={style.footer}>
        <button type="button" className="btn btn-primary text-center d-block width-100p">
          <i className="fe fe-shopping-cart" />
          Checkout
        </button>
      </div>
    </div>
  )
}

export default General26
