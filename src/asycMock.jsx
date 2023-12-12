const products = [ 
    {
        id:'1',
        name:'Iphon 10',
        price:900,
        img:'https://www.bing.com/ck/a?!&&p=f90e12a962f68b11JmltdHM9MTcwMjI1MjgwMCZpZ3VpZD0yYTNhOTlmYS1iNWExLTZiODktMGJhYy04YWVhYjQ3YzZhNzMmaW5zaWQ9NTYxMw&ptn=3&ver=2&hsh=3&fclid=2a3a99fa-b5a1-6b89-0bac-8aeab47c6a73&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4gZGUgaXBob25lIDEwJkZPUk09SVFGUkJBJmlkPTExODNCNkQ5NzIxNTQyMUMzMkIwNzQ5RDNGOEQ1RDcyMTdCNDdENzQ&ntb=1' ,
        stock:25,
        description: 'Descripcioooooooon'
    },
    {
        id:'2',
        name:'Iphon 12',
        price:1200,
        img:'https://www.bing.com/ck/a?!&&p=f90e12a962f68b11JmltdHM9MTcwMjI1MjgwMCZpZ3VpZD0yYTNhOTlmYS1iNWExLTZiODktMGJhYy04YWVhYjQ3YzZhNzMmaW5zaWQ9NTYxMw&ptn=3&ver=2&hsh=3&fclid=2a3a99fa-b5a1-6b89-0bac-8aeab47c6a73&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4gZGUgaXBob25lIDEwJkZPUk09SVFGUkJBJmlkPTExODNCNkQ5NzIxNTQyMUMzMkIwNzQ5RDNGOEQ1RDcyMTdCNDdENzQ&ntb=1' ,
        stock:15,
        description: 'Descripcioooooooon'
    },
    {
        id:'3',
        name:'Iphon 8',
        price:700,
        img:'https://www.bing.com/ck/a?!&&p=f90e12a962f68b11JmltdHM9MTcwMjI1MjgwMCZpZ3VpZD0yYTNhOTlmYS1iNWExLTZiODktMGJhYy04YWVhYjQ3YzZhNzMmaW5zaWQ9NTYxMw&ptn=3&ver=2&hsh=3&fclid=2a3a99fa-b5a1-6b89-0bac-8aeab47c6a73&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZW4gZGUgaXBob25lIDEwJkZPUk09SVFGUkJBJmlkPTExODNCNkQ5NzIxNTQyMUMzMkIwNzQ5RDNGOEQ1RDcyMTdCNDdENzQ&ntb=1' ,
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