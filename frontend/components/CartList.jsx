import { useState } from "react"
import CartItem from "./CartItem"
import TotalPrice from "./TotalPrice"
import { clearCart } from "store/slices/cartSlice"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { useDispatch } from "react-redux"

const CartList = ({ itemList, total, resetStore }) => {
  const dispatch= useDispatch()
  const [boughtItem, setBoughtItem] = useState([])
  const buyHandler = () => {
    setBoughtItem(itemList)
   dispatch(clearCart() )
  }
  return (
    <div
      className="max-h-full overflow-scroll mt-6 pr-2  pb-2 w-full"
      id="cartitem-container"
    >
      {itemList.length > 0 &&
        itemList.map((item) => (
          <CartItem
            product={item}
            key={item._id}
            quantity={item.quantity}
          ></CartItem>
        ))}
      <TotalPrice total={total} />
      {/* <Button title={"Buy"} onClick={buyHandler}></Button> */}
      <Dialog>
        <DialogTrigger
          className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition duration-300 cursor-pointer"
          onClick={buyHandler}
          disabled={itemList.length === 0 ? true : false}
        >
          Buy
        </DialogTrigger>
        <DialogContent className=" bg-white max-sm:w-[90%]">
          <DialogHeader>
            <DialogTitle>🎉 Congratulations!!! 🎉</DialogTitle>
            <DialogDescription>You bought:</DialogDescription>
            <div className="h-[500px] lg:h-[600px] overflow-scroll">
              {boughtItem.map((item) => (
                <CartItem
                  product={item}
                  key={item._id}
                  quantity={item.quantity}
                  bought={true}
                ></CartItem>
              ))}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CartList
