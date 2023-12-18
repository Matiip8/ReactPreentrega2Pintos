const products = [ 
    {
        id:'1',
        name:'iphon 10',
        price:900,
        img:'https://th.bing.com/th/id/R.2009c76167eb2bb05575e49badcd3f1a?rik=dH20F3JdjT%2bddA&pid=ImgRaw&r=0' ,
        stock:25,
        description: 'Descripcioooooooon'
    },
    {
        id:'2',
        name:'iphon 12',
        price:1200,
        img:'https://th.bing.com/th/id/OIP.9fs49eJdO4njXh8O3r9jGwHaHa?w=590&h=590&rs=1&pid=ImgDetMain' ,
        stock:15,
        description: 'Descripcioooooooon'
    },
    {
        id:'3',
        name:'iphon 8',
        price:700,
        img:'https://th.bing.com/th/id/OIP.s-pmknPjJUqCEftFC9cXQwHaHa?w=500&h=500&rs=1&pid=ImgDetMain' ,
        stock:20,
        description: 'Descripcioooooooon'
    },
]

export const getProducts = ( ) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products)
        }, 500 )
    })
     }

         export const getProductById = (productId) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(products.find(prod => prod.id === productId));
              }, 500);
            });
          };
          