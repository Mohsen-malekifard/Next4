import data from "@/lib/data";

export default function ProductDetail({params}) {
    const Found = data.find((p) => p.id == params.id);

    return (
        <div>
            <h1>{Found.id}</h1>
            <h2>{Found.title}</h2>
            <h3>{Found.context}</h3>
        </div>
    )
}