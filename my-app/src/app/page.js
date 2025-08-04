import Image from "next/image";
import data from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      {data.map((p) => {
        <ProductCard key = {p.id} product = {p} />
      })}
    </div>
  );
}
