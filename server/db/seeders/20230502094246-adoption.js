module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Adoptions', [
      {
        name: 'Rocky',
        likes: 0,
        views: 0,
        species: 'dog',
        gender: 'male',
        age: 11,
        weight: 32,
        description:
          "Meet Rocky! Rocky is a 3-year-old German Shepherd mix with a beautiful black and tan coat and soulful brown eyes. He was brought to the shelter by his previous owner who could no longer care for him. Despite the recent upheaval in his life, Rocky is a friendly and well-adjusted dog who loves to meet new people and make friends.\nRocky is a highly intelligent dog who would benefit from an owner who can provide him with plenty of mental stimulation and exercise. He already knows several commands, including sit, stay, and come, and is eager to learn more. Rocky is also an active dog who enjoys going on long walks and playing in the yard.\nRocky is a loyal and protective dog who would make an excellent companion for an experienced owner or family. He is good with children and gets along well with other dogs, although he can be a bit wary of strangers at first. Rocky is up-to-date on all his vaccinations, neutered, and microchipped. If you're looking for a loyal and devoted friend, then Rocky may be the perfect dog for you. Come meet Rocky and see if he's the right match for your family!",
        shortDescription:
          'Meet Rocky! Rocky is a 3-year-old German Shepherd mix with a beautiful black and tan coat and soulful brown eyes...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Luna',
        likes: 0,
        views: 0,
        species: 'dog',
        gender: 'female',
        age: 5,
        weight: 17,
        description:
          "This is Luna! Luna is a 4-year-old Siberian Husky with stunning blue eyes and a thick, fluffy coat. She was surrendered to the shelter by her previous owner who could no longer care for her. Despite the recent changes in her life, Luna is a sweet and friendly dog who loves to be around people.\nLuna is an energetic and playful dog who would do well in an active home with plenty of room to run and play. She enjoys going on long walks and playing with toys, especially ones that challenge her mentally. Luna is also a quick learner and already knows several commands, including sit, stay, and come.\nLuna is good with children and gets along well with other dogs, although she can be a bit dominant at times. She would do well in a home where she is the only dog or with another dog who is calm and laid-back. Luna is up-to-date on all her vaccinations, spayed, and microchipped. If you're looking for a fun-loving and affectionate companion, then Luna may be the perfect dog for you. Come meet Luna and see if she's the right match for your family!",
        shortDescription:
          'This is Luna! Luna is a 4-year-old Siberian Husky with stunning blue eyes and a thick, fluffy coat...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Zeus',
        likes: 0,
        views: 0,
        species: 'dog',
        gender: 'male',
        age: 8,
        weight: 23,
        description:
          "Say hello to Zeus! Zeus is a 5-year-old American Bulldog with a muscular build and a gentle disposition. He was surrendered to the shelter by his previous owner who could no longer care for him. Despite the upheaval in his life, Zeus is a friendly and affectionate dog who loves to be around people.\nZeus is a low-energy dog who enjoys lounging around the house and cuddling up with his humans. He is also a well-behaved dog who knows several commands, including sit, stay, and come. Zeus is good with children and gets along well with other dogs, although he can be a bit shy at first.\nZeus is up-to-date on all his vaccinations, neutered, and microchipped. He is in good health and has no known medical issues. If you're looking for a calm and affectionate companion who is content to hang out with you on the couch, then Zeus may be the perfect dog for you. Come visit Zeus and see if he's the right match for your family!",
        shortDescription:
          'Say hello to Zeus! Zeus is a 5-year-old American Bulldog with a muscular build and a gentle disposition...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sadie',
        likes: 0,
        views: 0,
        species: 'dog',
        gender: 'female',
        age: 19,
        weight: 27,
        description:
          "Say hello to Sadie! Sadie is a 2-year-old Pit Bull Terrier with a sleek and muscular build and a sweet, affectionate personality. She loves to be close to her humans and enjoys cuddling up for a good snuggle. Sadie is also an active dog who enjoys going on walks and playing fetch.\nSadie is a highly intelligent and trainable dog who already knows several commands, including sit, stay, and come. She is eager to learn more and would benefit from an experienced owner who can provide her with structure and guidance. With the right training, Sadie would excel in obedience and agility competitions.\nDespite her size, Sadie is gentle and loves to be around people, making her a great fit for families with children. She gets along well with other dogs, but would prefer to be the only dog in the household so that she can have all the attention and affection to herself.\nSadie is up-to-date on all her vaccinations, spayed, and microchipped. She is in excellent health and has no known medical issues. If you're looking for a loyal and loving companion who is full of energy and eager to learn, then Sadie may be the perfect dog for you. Come visit Sadie and see if she's the right match for you and your family!",
        shortDescription:
          'Say hello to Sadie! Sadie is a 2-year-old Pit Bull Terrier with a sleek and muscular build and a sweet, affectionate personality...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Whiskers',
        likes: 0,
        views: 0,
        species: 'cat',
        gender: 'male',
        age: 2,
        weight: 7,
        description:
          "Meet Whiskers! Whiskers is a 3-year-old orange tabby with a sweet, affectionate personality. He was surrendered to the shelter by his previous owner who could no longer care for him. Despite the upheaval in his life, Whiskers is a friendly and outgoing cat who loves to be around people.\nWhiskers is a playful and energetic cat who enjoys chasing toys and lounging in the sun. He is also a well-behaved cat who is litter box trained and knows how to use a scratching post. Whiskers is good with children and gets along well with other cats.\nWhiskers is up-to-date on all his vaccinations, neutered, and microchipped. He is in good health and has no known medical issues. If you're looking for a fun-loving and affectionate companion, then Whiskers may be the perfect cat for you. Come visit Whiskers and see if he's the right match for your family!",
        shortDescription:
          'Meet Whiskers! Whiskers is a 3-year-old orange tabby with a sweet, affectionate personality...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bella',
        likes: 0,
        views: 0,
        species: 'cat',
        gender: 'female',
        age: 3,
        weight: 4,
        description:
          "This is Bella! Bella is a 2-year-old calico with a striking coat and a gentle disposition. She was found wandering the streets and brought to the shelter by a Good Samaritan. Despite her recent rough patch, Bella is a friendly and affectionate cat who loves to be around people.\nBella is a low-energy cat who enjoys lounging around the house and cuddling up with her humans. She is also a well-behaved cat who is litter box trained and knows how to use a scratching post. Bella is good with children and gets along well with other cats.\nBella is up-to-date on all her vaccinations, spayed, and microchipped. She is in good health and has no known medical issues. If you're looking for a calm and affectionate companion who is content to hang out with you on the couch, then Bella may be the perfect cat for you. Come visit Bella and see if she's the right match for your family!",
        shortDescription:
          'This is Bella! Bella is a 2-year-old calico with a striking coat and a gentle disposition...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boots',
        likes: 0,
        views: 0,
        species: 'cat',
        gender: 'male',
        age: 7,
        weight: 8,
        description:
          "Say hello to Boots! Boots is a 5-year-old black and white tuxedo cat with a playful personality. He was surrendered to the shelter by his previous owner who could no longer care for him. Despite the recent upheaval in his life, Boots is a friendly and outgoing cat who loves to be around people.\nBoots is a highly playful cat who enjoys chasing toys and batting around balls. He is also a well-behaved cat who is litter box trained and knows how to use a scratching post. Boots is good with children and gets along well with other cats.\nBoots is up-to-date on all his vaccinations, neutered, and microchipped. He is in good health and has no known medical issues. If you're looking for a fun-loving and playful companion, then Boots may be the perfect cat for you. Come visit Boots and see if he's the right match for your family!",
        shortDescription:
          'Say hello to Boots! Boots is a 5-year-old black and white tuxedo cat with a playful personality...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Shadow',
        likes: 0,
        views: 0,
        species: 'cat',
        gender: 'male',
        age: 1,
        weight: 3,
        description:
          "Meet Shadow! Shadow is a 4-year-old black domestic shorthair with a friendly and outgoing personality. She was surrendered to the shelter by her previous owner who could no longer care for her. Despite the recent upheaval in her life, Shadow is a sweet and affectionate cat who loves to be around people.\nShadow is a playful and energetic cat who enjoys chasing toys and playing with string. She is also a well-behaved cat who is litter box trained and knows how to use a scratching post. Shadow is good with children and gets along well with other cats.\nShadow is up-to-date on all her vaccinations, spayed, and microchipped. She is in good health and has no known medical issues. If you're looking for a fun-loving and affectionate companion, then Shadow may be the perfect cat for you. Come visit Shadow and see if she's the right match for your family!",
        shortDescription:
          'Meet Shadow! Shadow is a 4-year-old black domestic shorthair with a friendly and outgoing personality...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Oliver',
        likes: 0,
        views: 0,
        species: 'cat',
        gender: 'male',
        age: 6,
        weight: 10,
        description:
          "This is Oliver! Oliver is a 3-year-old gray and white domestic shorthair with a mellow and affectionate personality. He was found as a stray and brought to the shelter by a Good Samaritan. Despite his rough start in life, Oliver is a sweet and gentle cat who loves to be around people.\nOliver is a low-energy cat who enjoys lounging in the sun and cuddling up with his humans. He is also a well-behaved cat who is litter box trained and knows how to use a scratching post. Oliver is good with children and gets along well with other cats.\nOliver is up-to-date on all his vaccinations, neutered, and microchipped. He is in good health and has no known medical issues. If you're looking for a calm and affectionate companion who is content to relax with you, then Oliver may be the perfect cat for you. Come visit Oliver and see if he's the right match for your family!",
        shortDescription:
          'This is Oliver! Oliver is a 3-year-old gray and white domestic shorthair...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cleo',
        likes: 0,
        views: 0,
        species: 'cat',
        age: 3,
        weight: 5,
        gender: 'female',
        description:
          "Say hello to Luna! Luna is a 2-year-old gray and white domestic shorthair with a playful and affectionate personality. She was surrendered to the shelter by her previous owner who could no longer care for her. Despite the recent upheaval in her life, Luna is a sweet and curious cat who loves to explore her surroundings.\nLuna is a high-energy cat who loves to play with toys and chase after laser pointers. She is also a well-behaved cat who is litter box trained and knows how to use a scratching post. Luna is good with children and gets along well with other cats.\nLuna is up-to-date on all her vaccinations, spayed, and microchipped. She is in good health and has no known medical issues. If you're looking for a playful and affectionate companion who will keep you on your toes, then Luna may be the perfect cat for you. Come visit Luna and see if she's the right match for your family!",
        shortDescription:
          'Say hello to Luna! Luna is a 2-year-old gray and white domestic shorthair...',
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Adoptions', null, {});
  },
};
