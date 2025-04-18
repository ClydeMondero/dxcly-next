// types/shopify.ts
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: {
      node: {
        src: string;
        altText: string | null;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        id: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
}

export interface ShopifyProductsResponse {
  products: {
    edges: {
      node: ShopifyProduct;
    }[];
  };
}
