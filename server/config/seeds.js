const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Boys' },
    { name: 'Men' },
    { name: 'Girls' },
    { name: 'Toddler' },
    { name: 'Women' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'UA-age-5',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'size-boy5-ua.jpg',
      category: categories[0]._id,
      price: 119.99,
      quantity: 50
    },
    {
      name: 'Sneakers-age-3',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'size-boy3-sneakers.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Adidas-men-10',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'size-men10-adidas.jpg',
      price: 199.99,
      quantity: 20
    },
    {
      name: 'Zaba-men-9',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'size-men9-zaba.jpg',
      price: 89.99,
      quantity: 50
    },
    {
      name: 'Blundstone-men-8',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'size-men8-blundstone.jpg',
      price: 49.99,
      quantity: 100
    },
    {
      name: 'Puma-age-5',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'size-girl5-puma.jpg',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Asics-age-4',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'size-girl4-asics.jpg',
      price: 49.99,
      quantity: 30
    },
    {
      name: 'Sketcher-age-2',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'size-toddler-sketcher.jpg',
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Asics-women-6',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'size-woman6-asics.jpg',
      price: 100.99,
      quantity: 100
    },
    {
      name: 'Asics-women-7',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'size-woman7-asics.jpg',
      price: 111.99,
      quantity: 100
    },
    {
      name: 'Noracora-women-9',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'size-woman9-noracora.jpg',
      price: 99.99,
      quantity: 100
    },
    {
      name: 'Popsugar-women-9',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'size-woman9-popsugar.jpg',
      price: 95.99,
      quantity: 60
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Emela',
    lastName: 'Casey',
    email: 'emela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Edward',
    lastName: 'Michael',
    email: 'edward@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});