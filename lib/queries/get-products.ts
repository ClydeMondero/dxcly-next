export const GET_PRODUCTS_QUERY = `
{
  products(first: 10) {
    edges {
      node {
        id
        title
        handle
        description
        images(first: 1) {
          edges {
            node {
              src
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}
`;
