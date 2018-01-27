import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const abfruits = [
        {
            id : 'A',
            scream: 'apppp',
            listOfFruit: ['Apple', 'Apricot', 'Asparagus', 'Aubergine', 'Avocado']
        }, {
            id : 'B',
            scream: 'bbbapppp',
            listOfFruit: ['Banana', 'Beetroot', 'Black-eye bean']
        }
    ];

    const fruitdetails = [
                {
                    'id': 'Apple',
                    'name': 'Apple',
                    'description': 'Granny Smith, Royal Gala, Golden Delicious and Pink Lady are just a few of the thousands of different kinds of apple that are grown around the world! You can make dried apple rings at home - ask an adult to help you take out the core, thinly slice the apple and bake the rings in the oven at a low heat.',
                    'image': '',
                    'category': 'fruit',
                    'benefits': [
                        'sweet',
                        'filling'
                    ]
                },
                {
                    'id': 'Apricot',
                    'name': 'Apricot',
                    'description': 'Apricots can be eaten fresh or dried - both are packed with vitamins! Fresh apricots have a soft and slightly furry skin. They make a good lunchbox snack. Apricots are also high in beta-carotene - this helps us keep our eyes and skin healthy.',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                },
                {
                    'id': 'Asparagus',
                    'name': 'Asparagus',
                    'description': 'Asparagus is a shoot vegetable – we eat the stalk and the tip. It makes any dish look more interesting with its unusual shape. Asparagus is a good source of a vitamin called folate, which is important for healthy blood.',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                },
                {
                    'id': 'Aubergine',
                    'name': 'Aubergine',
                    'description': 'Most aubergines are teardrop-shaped and have a glossy purple skin. On the inside, they are spongy and creamy white. Aubergines grow on bushes and are really fruits - although you wouldnt want to eat them raw. Australians and Americans call it eggplant because some types look a bit like large eggs!',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                },
                {
                    'id': 'Avocado',
                    'name': 'Avocado',
                    'description': 'It is sometimes called an avocado pear. Avocado is often mistaken for a vegetable because we eat it like a salad vegetable, but it is actually a fruit. Avocados are at their best when they are ripe and very easy to prepare. They can simply be cut in half with the stone removed and eaten with a little salad dressing or chopped into a salad. Avocados are a good source of essential fats (the good ones) - one of the few fruits or vegetables that contain fat.',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                },
                {
                    'id': 'Banana',
                    'name': 'Banana',
                    'description': 'Bananas make a nutritious snack! They are a great source of energy and contain lots of vitamins and minerals, especially potassium, which is important to help cells, nerves and muscles in your body to work properly and it helps to lower blood pressure. They have a thick skin to protect them, which is green before bananas are ripe, and get more yellow in colour and sweeter in taste as they ripen. We peel away the skin and eat the soft fleshy part of the fruit underneath. Bananas grow in hanging clusters, sometimes called hands, on the banana plant in tropical regions like Southeast Asia. You can eat them raw, baked, dried or in a smoothie. Why dont you try mashing it up and have it with yoghurt or porridge or even on brown toast?',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                },
                {
                    'id': 'Beetroot',
                    'name': 'Beetroot',
                    'description': 'Beetroot is the root of the beet plant - which explains its name! People have grown it for food since Roman times. Raw beetroot is best for you and great for grating - peel it first. Try it in a salad or sandwich. Small beetroots are usually the sweetest. Ahhhh!',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                },
                {
                    'id': 'Black-eye bean',
                    'name': 'Black-eye bean',
                    'description': 'In America, these beans are often called black-eyed peas or cow peas. They each have a little black dot on the side - this is where they were once attached to their pod, so its a bit like a belly button! You can mix them with all sorts of other beans to make a super salad.',
                    'image': '',
                    'category': '',
                    'benefits': [

                    ]
                }
    ];
    return {abfruits, fruitdetails};
  }
}
