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
    hrefKm: "/km/",

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
      "/resources/why-cambodian-cashews/",

    hrefKm:
      "/km/resources/why-cambodian-cashews/",

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

        label: "Why Cambodian Cashews",

        labelKm: "ហេតុអ្វីជ្រើសរើសស្វាយចន្ទីកម្ពុជា",

        href:
          "/resources/why-cambodian-cashews/",

        hrefKm:
          "/km/resources/why-cambodian-cashews/",

        description:
          "Discover what makes Cambodian cashews distinctive.",

        descriptionKm:
          "ស្វែងយល់ពីអ្វីដែលធ្វើឱ្យស្វាយចន្ទីកម្ពុជាមានភាពពិសេស។",

        group: "discover",

        featured: true,
        visible: true,
        order: 1,
      },

      {
        id: "what-is-cashew",

        label: "What Is Cashew?",

        labelKm: "ស្វាយចន្ទីជាអ្វី?",

        href:
          "/knowledge/what-is-cashew/",

        hrefKm:
          "/km/knowledge/what-is-cashew/",

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

        label: "The Cashew Tree",

        labelKm: "ដើមស្វាយចន្ទី",

        href:
          "/knowledge/cashew-tree/",

        hrefKm:
          "/km/knowledge/cashew-tree/",

        description:
          "Botany, growth characteristics, and cultivation context.",

        descriptionKm:
          "រុក្ខសាស្ត្រ លក្ខណៈលូតលាស់ និងបរិបទនៃការដាំដុះ។",

        group: "farming",

        visible: true,
        order: 3,
      },

      {
        id: "cashew-processing",

        label: "Cashew Processing",

        labelKm: "ការកែច្នៃស្វាយចន្ទី",

        href:
          "/knowledge/complete-guide-to-cashew-processing/",

        hrefKm:
          "/km/knowledge/complete-guide-to-cashew-processing/",

        description:
          "Follow the journey from raw nut to finished kernel.",

        descriptionKm:
          "ស្វែងយល់ពីដំណើរការចាប់ពីគ្រាប់ឆៅរហូតដល់គ្រាប់កែច្នៃរួច។",

        group: "industry",

        visible: true,
        order: 4,
      },

      {
        id: "cambodia-cashew-export",

        label: "Export Guide",

        labelKm: "មគ្គុទ្ទេសក៍នាំចេញ",

        href:
          "/knowledge/cashew-export-guide/",

        hrefKm:
          "/km/knowledge/cashew-export-guide/",

        description:
          "Explore export requirements and commercial considerations.",

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

    href: "/knowledge/",
    hrefKm: "/km/knowledge/",

    description:
      "Practical knowledge covering quality, processing, safety, storage, and trade.",

    descriptionKm:
      "មជ្ឈមណ្ឌលចំណេះដឹងអំពីគុណភាព ការកែច្នៃ សុវត្ថិភាព ការរក្សាទុក និងពាណិជ្ជកម្ម។",

    variant: "mega",

    order: 3,
    visible: true,

    children: [

      {
        id: "knowledge-center",

        label: "Knowledge Center",

        labelKm: "មជ្ឈមណ្ឌលចំណេះដឹង",

        href: "/knowledge/",
        hrefKm: "/km/knowledge/",

        description:
          "Explore Mato Cashew's practical knowledge library covering the Cambodian cashew value chain.",

        descriptionKm:
          "ស្វែងយល់ពីបណ្ណាល័យចំណេះដឹងរបស់ចន្ទីមាតុភូមិ ដែលគ្របដណ្តប់លើខ្សែសង្វាក់តម្លៃស្វាយចន្ទីកម្ពុជា។",

        group: "discover",

        featured: true,
        visible: true,
        order: 1,
      },

      {
        id: "knowledge-quality",

        label: "Quality Standards",

        labelKm: "ស្តង់ដារគុណភាព",

        href:
          "/knowledge/cashew-quality-standards/",

        hrefKm:
          "/km/knowledge/cashew-quality-standards/",

        description:
          "Understand key quality requirements used to evaluate premium cashew kernels.",

        descriptionKm:
          "ស្វែងយល់ពីតម្រូវការគុណភាពសំខាន់ៗសម្រាប់វាយតម្លៃគ្រាប់ស្វាយចន្ទីដែលមានគុណភាពខ្ពស់។",

        group: "quality",

        visible: true,
        order: 2,
      },

      {
        id: "knowledge-grading",

        label: "Grading Standards",

        labelKm: "ស្តង់ដារចាត់ថ្នាក់",

        href:
          "/knowledge/cashew-grading-standards/",

        hrefKm:
          "/km/knowledge/cashew-grading-standards/",

        description:
          "Learn how cashew kernels are classified by size, appearance, and commercial grade.",

        descriptionKm:
          "ស្វែងយល់ពីការចាត់ថ្នាក់គ្រាប់ស្វាយចន្ទីតាមទំហំ រូបរាង និងថ្នាក់ពាណិជ្ជកម្ម។",

        group: "quality",

        visible: true,
        order: 3,
      },

      {
        id: "knowledge-kernel-grades",

        label: "Kernel Grades & Uses",

        labelKm: "ថ្នាក់គ្រាប់ និងការប្រើប្រាស់",

        href:
          "/knowledge/cashew-kernel-grades-uses/",

        hrefKm:
          "/km/knowledge/cashew-kernel-grades-uses/",

        description:
          "Discover common kernel grades and the best uses for each grade.",

        descriptionKm:
          "ស្វែងយល់ពីថ្នាក់គ្រាប់ស្វាយចន្ទីសំខាន់ៗ និងការប្រើប្រាស់សមស្របសម្រាប់ថ្នាក់នីមួយៗ។",

        group: "quality",

        visible: true,
        order: 4,
      },

      {
        id: "knowledge-food-safety",

        label: "Food Safety",

        labelKm: "សុវត្ថិភាពម្ហូបអាហារ",

        href:
          "/knowledge/cashew-food-safety/",

        hrefKm:
          "/km/knowledge/cashew-food-safety/",

        description:
          "Review food-safety practices that help protect product quality and consumer confidence.",

        descriptionKm:
          "ស្វែងយល់ពីការអនុវត្តសុវត្ថិភាពម្ហូបអាហារ ដើម្បីការពារគុណភាពផលិតផល និងទំនុកចិត្តរបស់អ្នកប្រើប្រាស់។",

        group: "safety",

        visible: true,
        order: 5,
      },

      {
        id: "knowledge-moisture",

        label: "Moisture Standards",

        labelKm: "ស្តង់ដារសំណើម",

        href:
          "/knowledge/cashew-moisture-standards/",

        hrefKm:
          "/km/knowledge/cashew-moisture-standards/",

        description:
          "Learn why moisture control is essential for freshness, quality, and shelf stability.",

        descriptionKm:
          "ស្វែងយល់ពីសារៈសំខាន់នៃការគ្រប់គ្រងសំណើមសម្រាប់ភាពស្រស់ គុណភាព និងអាយុកាលរក្សាទុក។",

        group: "handling",

        visible: true,
        order: 6,
      },

      {
        id: "knowledge-storage",

        label: "Storage Guide",

        labelKm: "មគ្គុទ្ទេសក៍រក្សាទុក",

        href:
          "/knowledge/cashew-storage-guide/",

        hrefKm:
          "/km/knowledge/cashew-storage-guide/",

        description:
          "Explore proper storage practices for protecting cashew quality after processing.",

        descriptionKm:
          "ស្វែងយល់ពីវិធីរក្សាទុកត្រឹមត្រូវ ដើម្បីការពារគុណភាពស្វាយចន្ទីក្រោយការកែច្នៃ។",

        group: "handling",

        visible: true,
        order: 7,
      },

      {
        id: "knowledge-packaging",

        label: "Packaging Guide",

        labelKm: "មគ្គុទ្ទេសក៍វេចខ្ចប់",

        href:
          "/knowledge/cashew-packaging-guide/",

        hrefKm:
          "/km/knowledge/cashew-packaging-guide/",

        description:
          "Understand packaging choices that protect freshness, quality, and market readiness.",

        descriptionKm:
          "ស្វែងយល់ពីជម្រើសវេចខ្ចប់ដែលជួយការពារភាពស្រស់ គុណភាព និងភាពរួចរាល់សម្រាប់ទីផ្សារ។",

        group: "handling",

        visible: true,
        order: 8,
      },

      {
        id: "knowledge-shelf-life",

        label: "Shelf Life",

        labelKm: "អាយុកាលរក្សាទុក",

        href:
          "/knowledge/cashew-shelf-life-guide/",

        hrefKm:
          "/km/knowledge/cashew-shelf-life-guide/",

        description:
          "Learn the factors that influence cashew shelf life and long-term product quality.",

        descriptionKm:
          "ស្វែងយល់ពីកត្តាដែលប៉ះពាល់ដល់អាយុកាលរក្សាទុក និងគុណភាពផលិតផលក្នុងរយៈពេលវែង។",

        group: "handling",

        visible: true,
        order: 9,
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
      "/knowledge/cashew-export-guide/",

    hrefKm:
      "/km/knowledge/cashew-export-guide/",

    description:
      "Commercial knowledge for buyers, processors, exporters, and industry stakeholders.",

    descriptionKm:
      "ព័ត៌មានពាណិជ្ជកម្មសម្រាប់អ្នកទិញ អ្នកកែច្នៃ អ្នកនាំចេញ និងភាគីក្នុងឧស្សាហកម្ម។",

    variant: "mega",

    order: 4,
    visible: true,

    children: [

      {
        id: "market-export",

        label: "Export & Trade",

        labelKm: "ការនាំចេញ និងពាណិជ្ជកម្ម",

        href:
          "/knowledge/cashew-export-guide/",

        hrefKm:
          "/km/knowledge/cashew-export-guide/",

        description:
          "Explore export requirements, documentation, and trade considerations for Cambodian cashews.",

        descriptionKm:
          "ស្វែងយល់ពីតម្រូវការនាំចេញ ឯកសារ និងកត្តាពាណិជ្ជកម្មសម្រាប់ស្វាយចន្ទីកម្ពុជា។",

        group: "trade",

        featured: true,
        visible: true,
        order: 1,
      },

      {
        id: "market-quality",

        label: "Quality Standards",

        labelKm: "ស្តង់ដារគុណភាព",

        href:
          "/knowledge/cashew-quality-standards/",

        hrefKm:
          "/km/knowledge/cashew-quality-standards/",

        description:
          "Review quality standards that influence buyer acceptance and international trade.",

        descriptionKm:
          "ស្វែងយល់ពីស្តង់ដារគុណភាពដែលមានឥទ្ធិពលលើការទទួលយករបស់អ្នកទិញ និងពាណិជ្ជកម្មអន្តរជាតិ។",

        group: "standards",

        visible: true,
        order: 2,
      },

      {
        id: "market-grading",

        label: "Commercial Grading",

        labelKm: "ការចាត់ថ្នាក់ពាណិជ្ជកម្ម",

        href:
          "/knowledge/cashew-grading-standards/",

        hrefKm:
          "/km/knowledge/cashew-grading-standards/",

        description:
          "Understand commercial grading used by processors, traders, exporters, and buyers.",

        descriptionKm:
          "ស្វែងយល់ពីការចាត់ថ្នាក់ពាណិជ្ជកម្មដែលប្រើដោយអ្នកកែច្នៃ អ្នកជួញដូរ អ្នកនាំចេញ និងអ្នកទិញ។",

        group: "standards",

        visible: true,
        order: 3,
      },

      {
        id: "market-packaging",

        label: "Packaging",

        labelKm: "ការវេចខ្ចប់",

        href:
          "/knowledge/cashew-packaging-guide/",

        hrefKm:
          "/km/knowledge/cashew-packaging-guide/",

        description:
          "Explore packaging requirements for wholesale, export, transport, and product protection.",

        descriptionKm:
          "ស្វែងយល់ពីតម្រូវការវេចខ្ចប់សម្រាប់លក់ដុំ នាំចេញ ដឹកជញ្ជូន និងការពារផលិតផល។",

        group: "trade",

        visible: true,
        order: 4,
      },

      {
        id: "market-wholesale",

        label: "Wholesale / B2B",

        labelKm: "លក់ដុំ / B2B",

        href: "/wholesale/",
        hrefKm: "/km/wholesale/",

        description:
          "Discover B2B supply solutions for retailers, distributors, processors, and commercial buyers.",

        descriptionKm:
          "ស្វែងយល់ពីដំណោះស្រាយផ្គត់ផ្គង់ B2B សម្រាប់អ្នកលក់រាយ អ្នកចែកចាយ អ្នកកែច្នៃ និងអ្នកទិញអាជីវកម្ម។",

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

    href: "/products/",
    hrefKm: "/km/products/",

    description:
      "Explore Mato Cashew retail products and wholesale solutions.",

    descriptionKm:
      "ស្វែងយល់ពីផលិតផលលក់រាយ និងដំណោះស្រាយលក់ដុំរបស់ចន្ទីមាតុភូមិ។",

    variant: "mega",

    order: 5,
    visible: true,

  children: [

    {
      id: "all-products",

      label: "All Products",
      labelKm: "ផលិតផលទាំងអស់",

      href: "/products/",
      hrefKm: "/km/products/",

      description:
        "Explore Mato Cashew retail products, pack sizes, and packaging options.",

      descriptionKm:
        "ស្វែងយល់ពីផលិតផលលក់រាយ ទំហំវេចខ្ចប់ និងជម្រើសវេចខ្ចប់របស់ចន្ទីមាតុភូមិ។",

      visible: true,
      order: 1,
    },

    {
      id: "products-wholesale",

      label: "Wholesale / B2B",
      labelKm: "លក់ដុំ / B2B",

      href: "/wholesale/",
      hrefKm: "/km/wholesale/",

      description:
        "Discover wholesale solutions for retailers, distributors, and business buyers.",

      descriptionKm:
        "ស្វែងយល់ពីដំណោះស្រាយលក់ដុំសម្រាប់អ្នកលក់រាយ អ្នកចែកចាយ និងអតិថិជនអាជីវកម្ម។",

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

    href: "/about/",
    hrefKm: "/km/about/",

    description:
      "Learn about Mato Cashew, our Cambodian identity, and how to connect with us.",

    descriptionKm:
      "ស្វែងយល់អំពីចន្ទីមាតុភូមិ អត្តសញ្ញាណកម្ពុជា និងការទំនាក់ទំនងជាមួយយើង។",

    variant: "mega",

    order: 6,
    visible: true,

    children: [

      {
        id: "about-mato",

        label: "About Mato Cashew",
        labelKm: "អំពីចន្ទីមាតុភូមិ",

        href: "/about/",
        hrefKm: "/km/about/",

        description:
          "Learn about our story, Cambodian identity, values, and commitment to quality.",

        descriptionKm:
          "ស្វែងយល់ពីប្រវត្តិ អត្តសញ្ញាណខ្មែរ គុណតម្លៃ និងការប្តេជ្ញាចិត្តរបស់ចន្ទីមាតុភូមិ។",

        visible: true,
        order: 1,
      },

      {
        id: "about-resources",

        label: "Resources",
        labelKm: "ធនធាន",

        href: "/resources/",
        hrefKm: "/km/resources/",

        description:
          "Access useful cashew resources, guides, and reference materials.",

        descriptionKm:
          "ស្វែងរកធនធាន មគ្គុទ្ទេសក៍ និងឯកសារយោងដែលពាក់ព័ន្ធនឹងស្វាយចន្ទី។",

        visible: true,
        order: 2,
      },

      {
        id: "about-gallery",

        label: "Gallery",
        labelKm: "វិចិត្រសាល",

        href: "/gallery/",
        hrefKm: "/km/gallery/",

        description:
          "Explore images from our products, cashew activities, farms, and communities.",

        descriptionKm:
          "ទស្សនារូបភាពផលិតផល សកម្មភាពស្វាយចន្ទី ចម្ការ និងសហគមន៍របស់យើង។",

        visible: true,
        order: 3,
      },

      {
        id: "about-contact",

        label: "Contact",
        labelKm: "ទំនាក់ទំនង",

        href: "/contact/",
        hrefKm: "/km/contact/",

        description:
          "Connect with Mato Cashew for product, partnership, wholesale, or general enquiries.",

        descriptionKm:
          "ទាក់ទងចន្ទីមាតុភូមិសម្រាប់ផលិតផល ភាពជាដៃគូ លក់ដុំ ឬព័ត៌មានទូទៅ។",

        visible: true,
        order: 4,
      },

    ],
  },

];

export default navigation;
