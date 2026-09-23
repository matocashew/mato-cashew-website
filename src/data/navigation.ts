import type { MenuItem } from "@models/navigation";

/**
 * Mato Cashew Navigation V2
 *
 * Principles:
 * - English routes are canonical.
 * - Khmer routes explicitly mirror English routes.
 * - Only existing destinations are exposed.
 * - Mega-menu grouping is data-driven.
 * - Dedicated section landing pages can replace
 *   temporary destinations later without changing
 *   Header architecture.
 */
export const navigation: MenuItem[] = [

  /* =======================================================
     HOME
     ======================================================= */

  {
    id: "home",
    labelKey: "nav.home",
    label: "Home",

    href: "/",
    hrefKm: "/km",

    variant: "link",

    order: 1,
    visible: true,
  },


  /* =======================================================
     CAMBODIAN CASHEW
     ======================================================= */

  {
    id: "cambodian-cashew",

    label: "Cambodian Cashew",

        labelKm: "ស្វាយចន្ទីកម្ពុជា",

    /*
     * Temporary landing destination.
     *
     * Later:
     * /cambodian-cashew/
     * /km/cambodian-cashew/
     */
    href:
      "/resources/why-cambodian-cashews",

    hrefKm:
      "/km/resources/why-cambodian-cashews",

    description:
      "Explore Cambodia's cashew origin, cultivation, processing, and industry.",

    descriptionKm:
      "ស្វែងយល់អំពីប្រភព ការដាំដុះ ការកែច្នៃ និងឧស្សាហកម្មស្វាយចន្ទីនៅកម្ពុជា។",

    variant: "mega",

    order: 2,
    visible: true,

    children: [

      {
        id: "cambodian-cashew-overview",
        icon: "badge-check",

        label: "Why Cambodian Cashews",

        labelKm: "ហេតុអ្វីជ្រើសរើសស្វាយចន្ទីកម្ពុជា",

        href:
          "/resources/why-cambodian-cashews",

        hrefKm:
          "/km/resources/why-cambodian-cashews",

        description:
          "Why Cambodian cashews stand out.",

        descriptionKm:
          "ស្វែងយល់ពីអ្វីដែលធ្វើឱ្យស្វាយចន្ទីកម្ពុជាមានភាពពិសេស។",

        group: "discover",

        featured: true,
        visible: true,
        order: 1,
      },

      {
        id: "what-is-cashew",
        icon: "book-open",

        label: "What Is Cashew?",

        labelKm: "ស្វាយចន្ទីជាអ្វី?",

        href:
          "/knowledge/what-is-cashew",

        hrefKm:
          "/km/knowledge/what-is-cashew",

        description:
          "Learn the fundamentals of the cashew plant and nut.",

        descriptionKm:
          "ស្វែងយល់ពីមូលដ្ឋានគ្រឹះនៃដើម និងគ្រាប់ស្វាយចន្ទី។",

        group: "discover",

        visible: true,
        order: 2,
      },

      {
        id: "cashew-tree",
        icon: "sprout",

        label: "The Cashew Tree",

        labelKm: "ដើមស្វាយចន្ទី",

        href:
          "/knowledge/cashew-tree",

        hrefKm:
          "/km/knowledge/cashew-tree",

        description:
          "Growth, cultivation, and tree characteristics.",

        descriptionKm:
          "រុក្ខសាស្ត្រ លក្ខណៈលូតលាស់ និងបរិបទនៃការដាំដុះ។",

        group: "farming",

        visible: true,
        order: 3,
      },

      {
        id: "cashew-processing",
        icon: "factory",

        label: "Cashew Processing",

        labelKm: "ការកែច្នៃស្វាយចន្ទី",

        href:
          "/knowledge/complete-guide-to-cashew-processing",

        hrefKm:
          "/km/knowledge/complete-guide-to-cashew-processing",

        description:
          "From raw nut to finished kernel.",

        descriptionKm:
          "ស្វែងយល់ពីដំណើរការចាប់ពីគ្រាប់ឆៅរហូតដល់គ្រាប់កែច្នៃរួច។",

        group: "industry",

        visible: true,
        order: 4,
      },

      {
        id: "cambodia-cashew-export",
        icon: "ship",

        label: "Export Guide",

        labelKm: "មគ្គុទ្ទេសក៍នាំចេញ",

        href:
          "/knowledge/cashew-export-guide",

        hrefKm:
          "/km/knowledge/cashew-export-guide",

        description:
          "Key export requirements and trade basics.",

        descriptionKm:
          "ស្វែងយល់ពីតម្រូវការនាំចេញ និងកត្តាពាណិជ្ជកម្ម។",

        group: "industry",

        visible: true,
        order: 5,
      },
    ],
  },


  /* =======================================================
     KNOWLEDGE CENTER
     ======================================================= */

  {
    id: "knowledge",

    labelKey: "nav.knowledge",
    label: "Knowledge",

    href: "/knowledge",
    hrefKm: "/km/knowledge",

    description:
      "Practical guidance on quality, processing, storage, and trade.",

    descriptionKm:
      "ចំណេះដឹងអំពីគុណភាព ការកែច្នៃ ការរក្សាទុក និងពាណិជ្ជកម្ម។",

    variant: "mega",

    order: 3,
    visible: true,

    children: [

      {
        id: "knowledge-center",
        icon: "book-open",

        label: "Knowledge Center",

        labelKm: "មជ្ឈមណ្ឌលចំណេះដឹង",

        href: "/knowledge",
        hrefKm: "/km/knowledge",

        description:
          "Explore the Cambodian cashew knowledge library.",

        descriptionKm:
          "ស្វែងយល់ពីបណ្ណាល័យចំណេះដឹងអំពីស្វាយចន្ទីកម្ពុជា។",

        group: "discover",

        featured: true,
        visible: true,
        order: 1,
      },

      {
        id: "knowledge-quality",
        icon: "badge-check",

        label: "Quality Standards",

        labelKm: "ស្តង់ដារគុណភាព",

        href:
          "/knowledge/cashew-quality-standards",

        hrefKm:
          "/km/knowledge/cashew-quality-standards",

        description:
          "Key requirements for premium kernel quality.",

        descriptionKm:
          "តម្រូវការសំខាន់ៗសម្រាប់គុណភាពគ្រាប់ស្វាយចន្ទី។",

        group: "quality",

        visible: true,
        order: 2,
      },

      {
        id: "knowledge-grading",
        icon: "layers",

        label: "Grading Standards",

        labelKm: "ស្តង់ដារចាត់ថ្នាក់",

        href:
          "/knowledge/cashew-grading-standards",

        hrefKm:
          "/km/knowledge/cashew-grading-standards",

        description:
          "How kernels are graded by size and appearance.",

        descriptionKm:
          "ការចាត់ថ្នាក់គ្រាប់តាមទំហំ និងរូបរាង។",

        group: "quality",

        visible: true,
        order: 3,
      },

      {
        id: "knowledge-kernel-grades",
        icon: "layers",

        label: "Kernel Grades & Uses",

        labelKm: "ថ្នាក់គ្រាប់ និងការប្រើប្រាស់",

        href:
          "/knowledge/cashew-kernel-grades-uses",

        hrefKm:
          "/km/knowledge/cashew-kernel-grades-uses",

        description:
          "Common grades and their best uses.",

        descriptionKm:
          "ថ្នាក់គ្រាប់សំខាន់ៗ និងការប្រើប្រាស់សមស្រប។",

        group: "quality",

        visible: true,
        order: 4,
      },

      {
        id: "knowledge-food-safety",
        icon: "shield-check",

        label: "Food Safety",

        labelKm: "សុវត្ថិភាពម្ហូបអាហារ",

        href:
          "/knowledge/cashew-food-safety",

        hrefKm:
          "/km/knowledge/cashew-food-safety",

        description:
          "Essential practices for safe cashew handling.",

        descriptionKm:
          "ការអនុវត្តសុវត្ថិភាពសំខាន់ៗសម្រាប់ផលិតផលស្វាយចន្ទី។",

        group: "safety",

        visible: true,
        order: 5,
      },

      {
        id: "knowledge-moisture",
        icon: "droplets",

        label: "Moisture Standards",

        labelKm: "ស្តង់ដារសំណើម",

        href:
          "/knowledge/cashew-moisture-standards",

        hrefKm:
          "/km/knowledge/cashew-moisture-standards",

        description:
          "Control moisture for freshness and shelf life.",

        descriptionKm:
          "គ្រប់គ្រងសំណើមដើម្បីរក្សាភាពស្រស់ និងគុណភាព។",

        group: "handling",

        visible: true,
        order: 6,
      },

      {
        id: "knowledge-storage",
        icon: "archive",

        label: "Storage Guide",

        labelKm: "មគ្គុទ្ទេសក៍រក្សាទុក",

        href:
          "/knowledge/cashew-storage-guide",

        hrefKm:
          "/km/knowledge/cashew-storage-guide",

        description:
          "Store cashews to protect quality and freshness.",

        descriptionKm:
          "វិធីរក្សាទុកដើម្បីការពារគុណភាព និងភាពស្រស់។",

        group: "handling",

        visible: true,
        order: 7,
      },

      {
        id: "knowledge-packaging",
        icon: "package",

        label: "Packaging Guide",

        labelKm: "មគ្គុទ្ទេសក៍វេចខ្ចប់",

        href:
          "/knowledge/cashew-packaging-guide",

        hrefKm:
          "/km/knowledge/cashew-packaging-guide",

        description:
          "Packaging choices for protection and market readiness.",

        descriptionKm:
          "ជម្រើសវេចខ្ចប់សម្រាប់ការពារ និងត្រៀមចូលទីផ្សារ។",

        group: "handling",

        visible: true,
        order: 8,
      },

      {
        id: "knowledge-shelf-life",
        icon: "clock",

        label: "Shelf Life",

        labelKm: "អាយុកាលរក្សាទុក",

        href:
          "/knowledge/cashew-shelf-life-guide",

        hrefKm:
          "/km/knowledge/cashew-shelf-life-guide",

        description:
          "Factors that affect long-term product quality.",

        descriptionKm:
          "កត្តាដែលប៉ះពាល់ដល់អាយុកាល និងគុណភាពផលិតផល។",

        group: "handling",

        visible: true,
        order: 9,
      },
      {
        id: "knowledge-news-events",
        icon: "book-open",

        label: "News & Events",
        labelKm: "ព័ត៌មាន និងព្រឹត្តិការណ៍",

        href: "/knowledge/news",
        hrefKm: "/km/knowledge/news",

        description:
          "Cashew industry news, workshops, and training.",

        descriptionKm:
          "ព័ត៌មានឧស្សាហកម្មស្វាយចន្ទី សិក្ខាសាលា និងការបណ្តុះបណ្តាល។",

        group: "discover",

        visible: true,
        order: 10,
      },
    ],
  },


  /* =======================================================
     MARKET & INDUSTRY
     ======================================================= */

  {
    id: "market-industry",

    label: "Market & Industry",

        labelKm: "ទីផ្សារ និងឧស្សាហកម្ម",

    /*
     * Temporary destination until a dedicated
     * market-industry landing page is created.
     */
    href:
      "/knowledge/cashew-export-guide",

    hrefKm:
      "/km/knowledge/cashew-export-guide",

    description:
      "Market insight for buyers, exporters, and industry partners.",

    descriptionKm:
      "ព័ត៌មានទីផ្សារសម្រាប់អ្នកទិញ អ្នកនាំចេញ និងដៃគូឧស្សាហកម្ម។",

    variant: "mega",

    order: 4,
    visible: true,

    children: [

      {
        id: "market-export",
        icon: "ship",

        label: "Export & Trade",

        labelKm: "ការនាំចេញ និងពាណិជ្ជកម្ម",

        href:
          "/knowledge/cashew-export-guide",

        hrefKm:
          "/km/knowledge/cashew-export-guide",

        description:
          "Export requirements, documents, and trade basics.",

        descriptionKm:
          "តម្រូវការនាំចេញ ឯកសារ និងមូលដ្ឋានពាណិជ្ជកម្ម។",

        group: "trade",

        featured: true,
        visible: true,
        order: 1,
      },

      {
        id: "market-quality",
        icon: "badge-check",

        label: "Quality Standards",

        labelKm: "ស្តង់ដារគុណភាព",

        href:
          "/knowledge/cashew-quality-standards",

        hrefKm:
          "/km/knowledge/cashew-quality-standards",

        description:
          "Standards that influence buyer acceptance.",

        descriptionKm:
          "ស្តង់ដារគុណភាពដែលអ្នកទិញយកចិត្តទុកដាក់។",

        group: "standards",

        visible: true,
        order: 2,
      },

      {
        id: "market-grading",
        icon: "layers",

        label: "Commercial Grading",

        labelKm: "ការចាត់ថ្នាក់ពាណិជ្ជកម្ម",

        href:
          "/knowledge/cashew-grading-standards",

        hrefKm:
          "/km/knowledge/cashew-grading-standards",

        description:
          "Grading used across commercial cashew trade.",

        descriptionKm:
          "ការចាត់ថ្នាក់សម្រាប់ពាណិជ្ជកម្មស្វាយចន្ទី។",

        group: "standards",

        visible: true,
        order: 3,
      },

      {
        id: "market-packaging",
        icon: "package",

        label: "Packaging",

        labelKm: "ការវេចខ្ចប់",

        href:
          "/knowledge/cashew-packaging-guide",

        hrefKm:
          "/km/knowledge/cashew-packaging-guide",

        description:
          "Packaging for wholesale, export, and transport.",

        descriptionKm:
          "ការវេចខ្ចប់សម្រាប់លក់ដុំ នាំចេញ និងដឹកជញ្ជូន។",

        group: "trade",

        visible: true,
        order: 4,
      },

      {
        id: "market-wholesale",
        icon: "briefcase",

        label: "Wholesale / B2B",

        labelKm: "លក់ដុំ / B2B",

        href: "/wholesale",
        hrefKm: "/km/wholesale",

        description:
          "Supply solutions for retailers and distributors.",

        descriptionKm:
          "ដំណោះស្រាយផ្គត់ផ្គង់សម្រាប់អ្នកលក់ និងអ្នកចែកចាយ។",

        group: "commercial",

        visible: true,
        order: 5,
      },
    ],
  },


  /* =======================================================
     PRODUCTS
     ======================================================= */

  {
    id: "products",

    labelKey: "nav.products",
    label: "Products",

    href: "/products",
    hrefKm: "/km/products",

    description:
      "Retail products and wholesale solutions.",

    descriptionKm:
      "ផលិតផលលក់រាយ និងដំណោះស្រាយលក់ដុំ។",

    variant: "mega",

    order: 5,
    visible: true,

  children: [

    {
      id: "all-products",
      icon: "package",

      label: "All Products",
      labelKm: "ផលិតផលទាំងអស់",

      href: "/products",
      hrefKm: "/km/products",

      description:
        "Browse pack sizes and packaging options.",

      descriptionKm:
        "មើលទំហំ និងជម្រើសវេចខ្ចប់។",

      visible: true,
      order: 1,
    },

    {
      id: "products-wholesale",
      icon: "briefcase",

      label: "Wholesale / B2B",
      labelKm: "លក់ដុំ / B2B",

      href: "/wholesale",
      hrefKm: "/km/wholesale",

      description:
        "Supply options for retailers and distributors.",

      descriptionKm:
        "ជម្រើសផ្គត់ផ្គង់សម្រាប់អ្នកលក់ និងអ្នកចែកចាយ។",

      visible: true,
      order: 2,
    },

  ],
  },


  /* =======================================================
     ABOUT MATO CASHEW
     ======================================================= */

  {
    id: "about",

    labelKey: "nav.about",
    label: "About",

    href: "/about",
    hrefKm: "/km/about",

    description:
      "Discover Mato Cashew and connect with our team.",

    descriptionKm:
      "ស្វែងយល់ពីចន្ទីមាតុភូមិ និងទាក់ទងក្រុមការងារ។",

    variant: "mega",

    order: 6,
    visible: true,

    children: [

      {
        id: "about-mato",
        icon: "badge-check",

        label: "About Mato Cashew",
        labelKm: "អំពីចន្ទីមាតុភូមិ",

        href: "/about",
        hrefKm: "/km/about",

        description:
          "Our story, values, and Cambodian identity.",

        descriptionKm:
          "រឿងរ៉ាវ គុណតម្លៃ និងអត្តសញ្ញាណខ្មែរ។",

        visible: true,
        order: 1,
      },

      {
        id: "about-resources",
        icon: "book-open",

        label: "Resources",
        labelKm: "ធនធាន",

        href: "/resources",
        hrefKm: "/km/resources",

        description:
          "Practical guides and cashew references.",

        descriptionKm:
          "មគ្គុទ្ទេសក៍ និងឯកសារយោងស្វាយចន្ទី។",

        visible: true,
        order: 2,
      },

      {
        id: "about-gallery",
        icon: "image",

        label: "Gallery",
        labelKm: "វិចិត្រសាល",

        href: "/gallery",
        hrefKm: "/km/gallery",

        description:
          "Products, farms, and community moments.",

        descriptionKm:
          "ផលិតផល ចម្ការ និងសកម្មភាពសហគមន៍។",

        visible: true,
        order: 3,
      },

      {
        id: "about-contact",
        icon: "mail",

        label: "Contact",
        labelKm: "ទំនាក់ទំនង",

        href: "/contact",
        hrefKm: "/km/contact",

        description:
          "Product, wholesale, and partnership inquiries.",

        descriptionKm:
          "សាកសួរផលិតផល លក់ដុំ និងភាពជាដៃគូ។",

        visible: true,
        order: 4,
      },

    ],
  },

];

export default navigation;
