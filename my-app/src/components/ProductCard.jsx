import data from "@/lib/data";
import Link from "next/link";

export default function ProductCard({product}) {
    return (
        <div>
            <h3>{product.title}</h3>
            <Link href = {`product/${product.id}`}>View More</Link>
        </div>
    )
    
}