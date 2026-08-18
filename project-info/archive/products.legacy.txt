import type { Product } from "../types/Product";

export const products: Product[] = [

  {

    id: 1,

    slug: "premium-cashew-100g",

    sku: "MC100",

    category: "Retail",

    featured: true,

    image: "/images/products/package-100g.png",

    gallery: [

      "/images/products/package-100g.png"

    ],

    weight: "100g",

    badge: "Best Seller",

    rating: "⭐ 5.0",

    packaging: [

      "100g",

      "250g",

      "500g"

    ],

    specifications: {

      moisture: "Maximum 5%",

      broken: "According to Grade Standard",

      shelfLife: "24 Months",

      storage: "Store in a cool, dry place",

      certification: "Available upon request"

    },

    translations: {

      en: {

        name: "Premium Cambodian Cashew 100g",

        shortDescription:
          "Premium roasted Cambodian cashew kernels.",

        description:
          "Premium roasted Cambodian cashew kernels packed in a convenient 100g retail package.",

        seoTitle:
          "Premium Cambodian Cashew 100g",

        seoDescription:
          "Premium Cambodian cashew kernels in convenient 100g retail packaging."

      },

      km: {

        name: "គ្រាប់ស្វាយចន្ទីកម្ពុជា ១០០ក្រាម",

        shortDescription:
          "គ្រាប់ស្វាយចន្ទីកម្ពុជាគុណភាពខ្ពស់។",

        description:
          "គ្រាប់ស្វាយចន្ទីកម្ពុជាអាំងរួច វេចខ្ចប់ក្នុងកញ្ចប់ ១០០ក្រាម សម្រាប់ការទទួលទានប្រចាំថ្ងៃ។",

        seoTitle:
          "គ្រាប់ស្វាយចន្ទីកម្ពុជា ១០០ក្រាម",

        seoDescription:
          "គ្រាប់ស្វាយចន្ទីកម្ពុជាគុណភាពខ្ពស់ វេចខ្ចប់ ១០០ក្រាម។"

      }

    }

  }

];