import Logo from '/public/assets/logo.svg'
import Ring from '/public/assets/ring.svg'
import Moon from '/public/assets/icons/moon.svg'
import Shop from '/public/assets/shopping-cart.svg'
import { useState } from 'react'
import CardDetails from '../../cine/CartDetails'

export default function Header(){

  const [showCart,setShowCart] =useState(false)

  const handleCartShow=()=>{
		setShowCart(!showCart)
	}



    return (
        <div>
          <header>
						{
							showCart && <CardDetails onChange={handleCartShow} ></CardDetails>
						}
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Ring} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Moon} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Shop} onClick={handleCartShow}  width="24" height="24" alt="" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
        </div>
    );
}