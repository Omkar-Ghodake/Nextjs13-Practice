import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCart.module.css'

const ProductCart = () => {
  return (
    <div>
      <p className={styles.card}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam
        ullam repellendus tenetur facilis accusantium voluptate perferendis, ad
        iste vero harum? Quaerat quos esse nihil eum reprehenderit aspernatur
        aliquid animi.
      </p>
      <AddToCart />
    </div>
  )
}

export default ProductCart
