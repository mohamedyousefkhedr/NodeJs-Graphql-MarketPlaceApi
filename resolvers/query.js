const { reviews } = require("../db");


exports.Query = {
    hello: () => {
        return "world is mine !";
    },
    products: (parent,{filter},{db}) => {
       let filterdProducts= db.products
       const { onSale, avgRating } = filter;
       if(filter){
        if(onSale === true){
            filterdProducts= filterdProducts.filter((product)=>{
                return product.onSale
            })
        } 
        if([1,2,3,4,5].includes(filter.avgRating)){
            filterdProducts= filterdProducts.filter((product)=>{
                let sumRating =0 ; 
                let numOfReviews =0 ; 
                reviews.forEach(review=>{
                    
                    if(review.productId===product.id) sumRating+= review.rating;
                    numOfReviews++;
                    console.log('hello')
                });
                avgProdcutRating=sumRating/numOfReviews  ;
             //   console.log(avgProdcutRating+'hi'+product.name);
                return (avgProdcutRating >= avgRating/5) ; 
            })
        }

       }
        return filterdProducts;
    },

    product: (parent, {id}, {db}) => {
       
       return  db.products.find((product) => product.id === id);
     
       
    },

    categories: (parent ,args , {db} ) => {
        return db.categories;
    },
    category: (parent, {id}, {db}) => {
        
        return db.categories.find(category => category.id === id);
        
    },

};