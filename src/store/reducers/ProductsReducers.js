import React from 'react'
const initState = {
    products:[
        {id:1,name:'Moving Animation with Ball',image:'img1.jpg',desc:'asdgbsnd iuasd diausd asud aisud asdiaud dasidab dadiawd axqwoidqw aodqiwbd qwdqidq dqwdqowd ',code:
        "<div className=\"containerAnimation1\"><div className=\"loader\"><div className=\"ball\"></div></div></div>"
    },
        {id:2,name:'Moving Animation with Ball',image:'img1.jpg',desc:'asdgbsnd iuasd diausd asud aisud asdiaud dasidab dadiawd axqwoidqw aodqiwbd qwdqidq dqwdqowd ',code:
        "<div className=\"containerAnimation1\"><div className=\"loader\"><div className=\"ball\"></div></div></div>"
    },
        {id:3,name:'Moving Animation with Ball',image:'img1.jpg',desc:'asdgbsnd iuasd diausd asud aisud asdiaud dasidab dadiawd axqwoidqw aodqiwbd qwdqidq dqwdqowd ',code:
        "<div className=\"containerAnimation1\"><div className=\"loader\"><div className=\"ball\"></div></div></div>"
    },
        {id:4,name:'Moving Animation with Ball',image:'img1.jpg',desc:'asdgbsnd iuasd diausd asud aisud asdiaud dasidab dadiawd axqwoidqw aodqiwbd qwdqidq dqwdqowd ',code:
        "<div className=\"containerAnimation1\"><div className=\"loader\"><div className=\"ball\"></div></div></div>"
    },
        {id:5,name:'Moving Animation with Ball',image:'img1.jpg',desc:'asdgbsnd iuasd diausd asud aisud asdiaud dasidab dadiawd axqwoidqw aodqiwbd qwdqidq dqwdqowd ',code:
        "<div className=\"containerAnimation1\"><div className=\"loader\"><div className=\"ball\"></div></div></div>"
    },
        
        
    ]
}
const ProductsReducers = (state=initState,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default ProductsReducers
