import { ShopifyProductsResponse } from "@/types/shopify";
import { shopifyClient } from "@/lib/shopify";
import { GET_PRODUCTS_QUERY } from "@/lib/queries/get-products";
import { ProductCard } from "@/components/ProductCard";

export default async function ProductGrid() {
  const data = await shopifyClient.request<ShopifyProductsResponse>(
    GET_PRODUCTS_QUERY
  );

  const products = data.products.edges.slice(0, 3); // First 3 products

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2">
      {products.map((product, index) => {
        const node = product.node;

        const title = node.title;
        const image = node.images.edges[0]?.node.src || "/placeholder.png";
        const priceData = node.variants.edges[0]?.node.price;
        const price = priceData
          ? `$${priceData.amount} ${priceData.currencyCode}`
          : "Price unavailable";

        return (
          <ProductCard
            key={node.id}
            title={title}
            price={price}
            image={image}
            className={index === 0 ? "bg-surface md:row-span-2" : ""}
          />
        );
      })}
    </div>
  );
}
