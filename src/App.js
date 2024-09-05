import {useState} from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./data/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import Price from "./Sidebar/Price/Price";

function App(){
    const [selectedCategory,setSelectedCategory]=useState(null);

    //----Radio Filtering----
    const handleChange=(event)=>{
        setSelectedCategory(event.target.value);
    }

    //----Button Filtering----
    const handleClick=(event)=>{
        setSelectedCategory(event.target.value);
    };

    //----Input Filter----
    const [query,setQuery]=useState("");

    const handleInputChange=(event)=>{
        setQuery(event.target.value);
    };
    
    const filteredItems=products.filter(
        (products)=>products.title.toLowerCase().indexOf(query.toLowerCase())!==-1
    );

    function filteredData(products,selected,query){
        let filteredProducts=products;

        //Filtering Input items
        if(query){
            filteredProducts=filteredItems;
        }

        //Applying selected filter
        if(selected){
            filteredProducts=filteredProducts.filter(
                ({category,color,company,newPrice,title})=>
                    category===selected ||
                color===selected ||
                company === selected ||
                newPrice === selected ||
                title === selected
            );
        }

        return filteredProducts.map(
            ({img,title,star,reviews,prevPrice,newPrice})=>(
                <Card
                key={Math.random()}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);

    return(
        <>
            <Sidebar handleChange={handleChange}/>
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result}/>
        </>
    )
}

export default App;