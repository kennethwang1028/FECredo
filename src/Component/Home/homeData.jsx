const TopData = [{
  id: 1,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  category: 'Jackets',
  default_price: 140,
  feature: [{
    name: 'Fabric',
    value: 'Canvas',
  },
  {
    name: 'Buttons',
    value: 'Brass',
  }],
  photo:
    'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
},
{
  id: 2,
  name: 'Bright Future Sunglasses',
  slogan: "You've got to wear shades",
  category: 'Accessories',
  default_price: 69,
  feature: [{
    name: 'Lenses',
    value: 'Ultrasheen',
  },
  {
    name: 'UV Protection',
    value: null,
  },
  {
    name: 'Frames',
    value: 'LightCompose',
  }],
  photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
},
];

const PromoteData = [{
  id: 1,
  name: 'Camo Onesie',
  category: 'Jackets',
  photo:
    'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  feature: [{
    name: 'Fabric',
    value: 'Canvas',
  },
  {
    name: 'Buttons',
    value: 'Brass',
  }],
},
{
  id: 2,
  name: 'Bright Future Sunglasses',
  category: 'Accessories',
  photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  feature: [{
    name: 'Fabric',
    value: 'Canvas',
  },
  {
    name: 'Buttons',
    value: 'Brass',
  }],
},
{
  id: 3,
  name: 'Morning Joggers',
  category: 'Pants',
  photo:
      'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  feature: [{
    name: 'Fabric',
    value: 'Canvas',
  },
  {
    name: 'Buttons',
    value: 'Brass',
  }],
},
{
  id: 4,
  name: "Slacker's Slacks",
  category: 'Pants',
  photo:
    'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  feature: [{
    name: 'Fabric',
    value: 'Canvas',
  },
  {
    name: 'Buttons',
    value: 'Brass',
  }],
},

];
const CategoryData = [{
  categoryId: 1,
  category: 'Jackets',
  promotion: [{
    productId: 1,
    name: 'Camo Onesie 1',
    photo:
      'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    productId: 2,
    name: 'Camo Onesie 2',
    photo:
      'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    productId: 3,
    name: 'Camo Onesie 3',
    photo:
      'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  }, {
    productId: 4,
    name: 'Camo Onesie 4',
    photo:
      'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  }],
},
{
  categoryId: 2,
  category: 'Accessories',
  promotion: [{
    productId: 1,
    name: 'Bright Future Sunglasses 1',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    productId: 2,
    name: 'Bright Future Sunglasses 2',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    productId: 3,
    name: 'Bright Future Sunglasses 3',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  }, {
    productId: 4,
    name: 'Bright Future Sunglasses 4',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  }],
},
{
  categoryId: 3,
  category: 'Pants',
  promotion: [{
    productId: 3,
    name: 'Morning Joggers',
    photo:
    'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
  {
    productId: 4,
    name: "Slacker's Slacks",
    photo:
    'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  },
  {
    productId: 3,
    name: 'Morning Joggers',
    photo:
  'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
  },
  {
    productId: 4,
    name: "Slacker's Slacks",
    photo:
  'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  }],
},
{
  categoryId: 4,
  category: 'Accessories',
  promotion: [{
    productId: 1,
    name: 'Bright Future Sunglasses 1',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    productId: 2,
    name: 'Bright Future Sunglasses 2',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    productId: 3,
    name: 'Bright Future Sunglasses 3',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  }, {
    productId: 4,
    name: 'Bright Future Sunglasses 4',
    photo:
    'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  }],
},];
export default {
  TopData,
  CategoryData,
  PromoteData,
};
