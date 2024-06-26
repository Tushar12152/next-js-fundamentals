import Counter from "@/Components/Counter";
import Image from "next/image";
import Link from "next/link";
import nft from '@/assest/NFP.webp'



const HomePage = () => {


    // throw new Error()

  return (
    <div className="min-h-screen">
        <h1>this is home page</h1>

        <Counter/>
      
    <Link href='/about'>  <button className="btn btn-secomdary">About</button></Link>
    <Link href='/checkout'>  <button className="btn btn-secomdary">checkout</button></Link>
    <Link href='/contact'>  <button className="btn btn-secomdary">contact</button></Link>

    <div className="p-10 ">
           <Image src={nft} alt="nft" width={500} height={500}/>
    </div>

    </div>
  );
};

export default HomePage;