  import { Data, IProductInput,IUserInput } from '@/types'
  import { toSlug } from './utils'
  import bcrypt from 'bcryptjs'



  const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Alice Cooper',
      street: '777 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10007',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Tom Hanks',
      street: '888 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10008',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Linda',
    email: 'linda@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Linda Holmes',
      street: '999 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10009',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'George',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'George Smith',
      street: '101 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10010',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jessica Brown',
      street: '102 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10011',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Chris',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Chris Evans',
      street: '103 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10012',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Samantha',
    email: 'samantha@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samantha Wilson',
      street: '104 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10013',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'David',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'David Lee',
      street: '105 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10014',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Anna',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Anna Smith',
      street: '106 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10015',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]




const products: IProductInput[] = [
        {
          //Solar Panels
        name: 'Mono 130 Watt Solar Panel',
        slug: toSlug('Mono 130 Watt Solar Panel'),
        category: 'Solar Panels',
        images: [
          '/images/product1.webp',
        ],
        tags: ['featured', 'todays-deal'],
        isPublished: true,
        price: 120.00 ,
        listPrice: 150.00 ,
        brand:'Growatt',
        avgRating: 4.2,
        numReviews: 10,
        ratingDistribution: [
          { rating: 1, count: 1 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 4 },
          { rating: 5, count: 5 },
        ],
        numSales: 25 ,
        countInStock: 100,
        description:
          'A high-efficiency monocrystalline solar panel designed for residential and commercial use. It features a durable design and excellent performance in low-light conditions, making it perfect for various installations. ',

       

        reviews: [],
      },
      {
        name: 'Solar Panel 550',
        slug: toSlug('Solar Panel 550'),
        category: 'Solar Panels',
        images: [
          '/images/mono.jpeg',
        ],
        tags: ['featured', 'new-arrival'],
        isPublished: true,
        price: 100.00 ,
        listPrice: 150.00 ,
        brand:'Jinko',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5 },
        ],
        numSales: 0,
        countInStock: 200,
        description:
          'A high-efficiency monocrystalline solar panel designed for residential and commercial use. It features a durable design and excellent performance in low-light conditions, making it perfect for various installations. ',

       

        reviews: [],
      },
        //Inverters

      {
        name: 'Grid Tie Power Inverter',
        slug: toSlug('Grid Tie Power Inverter'),
        category: 'Inverters',
        images: [
           '/images/product2.webp',
          '/images/product3.webp',
        ],
          tags: ['todays-deal' , 'featured'],
        isPublished: true,
        price: 280 ,
        listPrice: 320 ,
        brand:'Growatt',
        avgRating: 4.6,
        numReviews: 10,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 2 },
          { rating: 4, count: 3 },
          { rating: 5, count: 5 },
        ],
        numSales: 100 ,
        countInStock: 170,
        description:
          'Designed to connect your solar power system to the electrical grid, this inverter allows you to use solar energy while feeding excess power back to the grid. It features advanced technology for optimal energy conversion.  ',

        reviews: [],
      },
      {
        name: 'Inverter 3Kw',
        slug: toSlug('Inverter 3Kw'),
        category: 'Inverters',
        images: [
           '/images/inv1.webp',
        ],
          tags: ['new-arrival' , 'featured'],
        isPublished: true,
        price: 280 ,
        listPrice: 320 ,
        brand:'Growatt',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5 },
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'Designed to connect your solar power system to the electrical grid, this inverter allows you to use solar energy while feeding excess power back to the grid. It features advanced technology for optimal energy conversion.  ',

        reviews: [],
      },

      {
        name: 'Inverter 5/6KW',
        slug: toSlug('Inverter 5/6KW'),
        category: 'Inverters',
        images: [
           '/images/inv5.webp',
        ],
          tags: ['new-arrival' , 'featured'],
        isPublished: true,
        price: 550 ,
        listPrice: 980 ,
        brand:'Growatt',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5 },
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'Designed to connect your solar power system to the electrical grid, this inverter allows you to use solar energy while feeding excess power back to the grid. It features advanced technology for optimal energy conversion.  ',

        reviews: [],
      },
       {
        name: 'Solar Inverters Electric Power',
        slug: toSlug('Solar Inverters Electric Power'),
        category: 'Inverters',
        images: [
          '/images/product5.webp',
        ],
             tags: ['most-arrival' , 'featured'],
        isPublished: true,
        price: 300 ,
        listPrice: 350 ,
        brand:'Growatt',
        avgRating: 4.8,
        numReviews: 14,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 2 },
          { rating: 5, count: 12},
        ],
        numSales: 0 ,
        countInStock: 50,
        description:
          'High-performance electric power inverters that convert solar energy into usable electricity. Ideal for residential and commercial systems, ensuring high efficiency and reliability.    ',

       

        reviews: [],
      },
      
      //Controllers
       {
        name: 'Solar Battery Controller',
        slug: toSlug('Solar Battery Controller'),
        category: 'Controllers',
        images: [
          '/images/product6.webp',
        ],
             tags: ['new-arrival' , 'featured'],
        isPublished: true,
        price: 75 ,
        listPrice: 90 ,
        brand:'Growatt',
        avgRating: 4.4,
        numReviews: 18,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 5 },
          { rating: 3, count: 5 },
          { rating: 4, count: 5 },
          { rating: 5, count: 3},
        ],
        numSales: 0 ,
        countInStock: 40,
        description:
          'This solar battery controller manages the charging and discharging of batteries, ensuring optimal performance and longevity. It features overcharge protection and adjustable settings for various battery types  ',

       

        reviews: [],
      },
       // Solar Packages
       {
        name: 'Solar Package System 1',
        slug: toSlug('Solar Package System 1'),
        category: 'Solar Packages',
        images: [
          '/images/product7.webp',
        ],
             tags: ['most-bought' , 'todays-deal'],
        isPublished: true,
        price: 1200 ,
        listPrice: 1500 ,
        brand:'Growatt',
        avgRating: 4.4,
        numReviews: 18,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 5 },
          { rating: 3, count: 5 },
          { rating: 4, count: 5 },
          { rating: 5, count: 3},
        ],
        numSales: 40 ,
        countInStock: 60,
        description:
          'A complete solar package for home installation, including solar panels, inverters, and all necessary wiring and connectors. This system is designed for easy setup and maximum efficiency.  ',

       

        reviews: [],
      },

    {
        name: 'Solar Package System 2',
        slug: toSlug('Solar Package System 2'),
        category: 'Solar Packages',
        images: [
          '/images/product8.webp',
        ],
             tags: ['featured' , 'todays-deal'],
        isPublished: true,
        price: 1800 ,
        listPrice: 2200 ,
        brand:'Growatt',
        avgRating: 4.8,
        numReviews: 10,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 2 },
          { rating: 5, count: 8},
        ],
        numSales: 12 ,
        countInStock: 30,
        description:
          'An advanced solar package designed for larger setups, providing higher energy output and efficiency. This system includes premium components for both residential and commercial applications. ',

       

        reviews: [],
      },

      {
        name: '3KW SOLAR SYSTEM-SINGLE PHASE',
        slug: toSlug('3KW SOLAR SYSTEM-SINGLE PHASE'),
        category: 'Solar Packages',
        images: [
          '/images/p6.webp',
        ],
             tags: ['featured' , 'new-arrival'],
        isPublished: true,
        price:1330 ,
        listPrice: 2200 ,
        brand:'Various',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'The 3 kW solar system features 550W solar panels and comes equipped with a 3 kW inverter. It includes a 100Ah 24V lithium battery from reputable brands such as Growatt, Dyness, and Pylontech. The system is supported by durable aluminium or galvanised mounting structures, along with all necessary cables and accessories. Labour for installation is included in the package. This system offers a warranty of 5 years on most components, with the inverter having a 2-year warranty, and workmanship also covered for 5 years.',

       

        reviews: [],
      },
       {
        name: '5/6 KW SOLAR SYSTEM-SINGLE PHASE',
        slug: toSlug('5/6 KW SOLAR SYSTEM-SINGLE PHASE'),
        category: 'Solar Packages',
        images: [
          '/images/p5.webp',
        ],
             tags: ['new-arrival'],
        isPublished: true,
        price:2420 ,
        listPrice: 2000 ,
        brand:'Various',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'The 5/6 kW solar system also utilizes 550W solar panels, with the option of a 5 kW or 6 kW inverter. It features the same robust 100Ah 24V lithium battery from brands like Growatt, Dyness, and Pylontech. The mounting structures are made from aluminium or galvanised materials, and all essential cables and accessories are included. Labour for installation is part of the offering as well. This system boasts a longer warranty period, providing 10 years on components, 5 years on the inverter, and 5 years on the battery, alongside 5 years of workmanship coverage.',

       

        reviews: [],
      },
       {
        name: '10 KW SOLAR SYSTEM-SINGLE PHASE',
        slug: toSlug('10 KW SOLAR SYSTEM-SINGLE PHASE'),
        category: 'Solar Packages',
        images: [
          '/images/p4.webp',
        ],
             tags: ['new-arrival'],
        isPublished: true,
        price:5819,
        listPrice: 3000 ,
        brand:'Various',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'The 8/10 kW solar system is designed for higher energy needs, incorporating 550W solar panels with options for either an 8 kW or 10 kW inverter. It continues to use the reliable 100Ah 24V lithium battery from brands such as Growatt, Dyness, and Pylontech. The system is supported by sturdy aluminium or galvanised mounting structures, and it includes all necessary cables and accessories. Installation labour is also covered. This system provides an impressive warranty of 25 years on components, 5 years on the inverter, and 5 years on the battery, along with 5 years of workmanship guarantee.',

       

        reviews: [],
      },
      {
        name: '12 KW SOLAR SYSTEM',
        slug: toSlug('12 KW SOLAR SYSTEM'),
        category: 'Solar Packages',
        images: [
          '/images/p3.webp',
        ],
             tags: ['new-arrival'],
        isPublished: true,
        price:10350,
        listPrice: 12000 ,
        brand:'Various',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'The 12 kW solar system features high-efficiency 550W solar panels paired with a powerful 12 kW inverter. It includes a 100Ah 24V lithium battery sourced from reputable brands such as Growatt, Dyness, and Pylontech. The system is equipped with durable aluminium or galvanised mounting structures, as well as all necessary cables and accessories to ensure seamless installation. This system offers a robust warranty of 25 years on components and 5 years on the inverter and battery, along with 5 years of workmanship coverage. The total cost for this setup is calculated based on quantities and unit prices, providing a clear breakdown of the investment. ',

       

        reviews: [],
      },

       {
        name: '16 KW SOLAR SYSTEM-SINGLE PHASE',
        slug: toSlug('16 KW SOLAR SYSTEM-SINGLE PHASE'),
        category: 'Solar Packages',
        images: [
          '/images/p2.webp',
        ],
             tags: ['new-arrival'],
        isPublished: true,
        price:16200,
        listPrice: 20000 ,
        brand:'Various',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'The 16 kW solar system is designed for higher energy demands, featuring 550W solar panels and a 16 kW inverter. Like the 12 kW system, it includes a 100Ah 24V lithium battery from trusted brands including Growatt, Dyness, and Pylontech. The mounting structures are made from aluminium or galvanised materials, and the package comes with all necessary cables and accessories. This system also offers a 25-year warranty on components, a 5-year warranty on the inverter and battery, and 5 years of workmanship coverage. The total price reflects the quantities and unit prices for each component, ensuring transparency in costs. ',

       

        reviews: [],
      },

       {
        name: '50 KW SOLAR SYSYTEM -3PHASE',
        slug: toSlug('50 KW SOLAR SYSYTEM -3PHASE'),
        category: 'Solar Packages',
        images: [
          '/images/p1.webp',
        ],
             tags: ['new-arrival'],
        isPublished: true,
        price:40000,
        listPrice: 50000 ,
        brand:'Various',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0 },
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'The 50 kW solar system is a comprehensive solution for large-scale energy needs. It includes a WIT 50K-XHU inverter and multiple AXE 5.0H-E1 EU batteries, along with an AXE 1000100-C1 EU HV BMS for effective battery management. The system also features an AXE 60.0H-CE1 EU cabinet, a battery junction box, and a TPM-CT-E-EU meter for monitoring. The setup consists of 96 solar panels mounted on rooftops, complemented by all necessary cables and accessories. Warranty periods vary, with 5 years on the inverter and batteries, and 25 years on the solar panels. The total selling amount for this extensive system is calculated based on individual component costs, providing a comprehensive overview of the investment needed for a robust solar solution.',

       

        reviews: [],
      },
      
       //Batteries
      {
        name: '60 Ah Solar Battery',
        slug: toSlug('60 Ah Solar Battery'),
        category: 'Batteries',
        images: [
          '/images/product12.webp',
        ],
             tags: ['todays-deal' , 'most-bought'],
        isPublished: true,
        price: 150 ,
        listPrice: 180 ,
        brand:'Growatt',
        avgRating: 4.6,
        numReviews: 22,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 10 },
          { rating: 5, count: 12},
        ],
        numSales: 40 ,
        countInStock: 60,
        description:
          'This 60 Ah solar battery is designed for reliable energy storage in solar systems. It offers longevity and performance, making it ideal for both off-grid and grid-tied applications.  ',

       

        reviews: [],
      },

       {
        name: 'Lithium battery 100ah 24V',
        slug: toSlug('Lithium battery 100ah 24V'),
        category: 'Batteries',
        images: [
          '/images/py.webp',
        ],
             tags: ['new-arrival'],
        isPublished: true,
        price: 600 ,
        listPrice: 780 ,
        brand:'Pylontech',
        avgRating: 5,
        numReviews: 5,
        ratingDistribution: [
          { rating: 1, count: 0 },
          { rating: 2, count: 0 },
          { rating: 3, count: 0 },
          { rating: 4, count: 0},
          { rating: 5, count: 5},
        ],
        numSales: 0 ,
        countInStock: 200,
        description:
          'This Lithium battery 100ah 24V is designed for reliable energy storage in solar systems. It offers longevity and performance, making it ideal for both off-grid and grid-tied applications.  ',

       

        reviews: [],
      },

      
   
    ]

    const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
]


     const data: Data = {
      users,
      products,
      reviews,
      headerMenus: [
        {
          name: "Today's Deal",
          href: '/search?tag=todays-deal',
        },
        {
          name: 'New Products',
          href: '/search?tag=new-arrival',
        },
        {
          name: 'Featured Products',
          href: '/search?tag=featured',
        },
        {
          name: 'Most Bought',
          href: '/search?tag=most-bought',
        },
        {
          name: 'Browsing History',
          href: '/#browsing-history',
        },
        {
          name: 'Customer Service',
          href: '/page/customer-service',
        },
       
        {
          name: 'Help',
          href: '/page/help',
        },
      ],
      
      carousels: [
        {
          title: 'Most Popular Shoes For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Shoes',
          isPublished: true,
        },
        {
          title: 'Best Sellers in T-Shirts',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=T-Shirts',
          isPublished: true,
        },
        {
          title: 'Best Deals on Wrist Watches',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Wrist Watches',
          isPublished: true,
        },
      ],
    
    }

    export default data
