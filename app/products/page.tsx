// app/products/page.tsx
import { shopifyClient } from "@/lib/shopify";
import { GET_PRODUCTS_QUERY } from "@/lib/queries/get-products";
import { ShopifyProductsResponse } from "@/types/shopify";

export default async function ProductsPage() {
  const data = await shopifyClient.request<ShopifyProductsResponse>(
    GET_PRODUCTS_QUERY
  );
  const products = data.products.edges;

  return (
    <div>
      <h1>Products</h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {products.map(({ node }) => {
          const image = node.images.edges[0]?.node;
          const variant = node.variants.edges[0]?.node;
          return (
            <li
              key={node.id}
              style={{ border: "1px solid #ccc", padding: "1rem" }}
            >
              {image && (
                <img
                  src={image.src}
                  alt={image.altText ?? node.title}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              )}
              <h2>{node.title}</h2>
              <p>{node.description}</p>
              <p>
                {variant?.price.amount} {variant?.price.currencyCode}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
