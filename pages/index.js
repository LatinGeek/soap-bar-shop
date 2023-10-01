import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ShoppingListItem from '../components/ShoppingListItem'
import getShoppingItems from '../services/getShoppingItems'
import { useState } from 'react'
import FontSizeSelector from '../components/FontSizeSelector'
import ReceiptViewer from '../components/ReceiptViewer'

export default function Home() {
  const [fontSize, setFontSize] = useState(14)
  const [shoppingCart, updateShoppingCart] = useState(new Map());
  function handleShoppingCartUpdate(item, quantity) {
    updateShoppingCart(new Map(shoppingCart.set(item.id, { item, quantity })))
  }



  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FontSizeSelector setFontSize={setFontSize} />

      <div className={styles.shoppingListItemContainer}>
        {getShoppingItems().map(item => (
          <ShoppingListItem
            titleFontSize={fontSize}
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            thumbnailImg={item.thumbnailImg}
            handleShoppingCartUpdate={handleShoppingCartUpdate}
          />

        ))}
      </div>

      <ReceiptViewer shoppingCart={shoppingCart} />
    </div>
  )
}
