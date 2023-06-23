import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../context/shopContext';
import MiniCart from './MiniCart';

export default function Nav() {
    const { cart, cartOpen, setCartOpen } = useContext(CartContext);

    let cartQuantity = 0;
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    });

    return (
        <header className="border-b sticky top-0 z-20 bg-black">
            <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
                <Link href="/" legacyBehavior>
                    <a className="cursor-pointer">
                        <Image src='https://cdn.shopify.com/s/files/1/2321/6571/files/alpha-lion-logo.png?v=1614325404' alt='Alpha Lion logo' width='205' height='67' />
                    </a>
                </Link>
                <a onClick={()=> setCartOpen(!cartOpen)} className="text-md font-bold cursor-pointer text-white">
                    Cart ({cartQuantity})
                </a>
                <MiniCart cart={cart} />
            </div>
        </header>
    )
}
