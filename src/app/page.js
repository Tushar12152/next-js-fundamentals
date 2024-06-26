import Counter from "@/Components/Counter";
import Link from "next/link";



const HomePage = () => {


    // throw new Error()

  return (
    <div className="min-h-screen">
        <h1>this is home page</h1>

        <Counter/>
      
    <Link href='/about'>  <button className="btn btn-secomdary">About</button></Link>
    <Link href='/checkout'>  <button className="btn btn-secomdary">checkout</button></Link>
    <Link href='/contact'>  <button className="btn btn-secomdary">contact</button></Link>

    </div>
  );
};

export default HomePage;