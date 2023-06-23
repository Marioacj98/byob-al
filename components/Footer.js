import Image from 'next/image';
import Link from 'next/link';

const navigation = [
    { name: 'Privacy Policy', href: 'https://www.alphalion.com/pages/privacy-policy' },
    { name: 'Terms of Sale', href: 'https://www.alphalion.com/pages/terms' },
    { name: 'Contact Us', href: 'https://www.alphalion.com/pages/contact-us' },
    { name: 'Shipping & Returns', href: 'https://www.alphalion.com/pages/shipping-returns-policy' }
]

export default function Footer() {
  return (
    <footer className='bg-black'>
        <div className='p-8 flex flex-col justify-center items-center gap-4 max-w-7xl m-auto'>
            <Link href="/" legacyBehavior>
                <a className="cursor-pointer">
                    <Image src='https://cdn.shopify.com/s/files/1/2321/6571/files/alpha-lion-logo.png?v=1614325404' alt='Alpha Lion logo' width='156' height='51' />
                </a>
            </Link>
            <p className='text-base text-neutral-700 text-center'>† STATEMENTS ON THIS WEBSITE HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</p>
            <nav className="flex flex-wrap justify-center">
            {
                navigation.map((item, i) => (
                <div key={i} className="px-6 py-2">
                    <a href={item.href} className="text-white transition duration-150 hover:text-yellow-500">
                        {item.name}
                    </a>
                </div>
                ))
            }
            </nav>
        </div>
    </footer>
  )
}
