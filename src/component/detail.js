import React, { useEffect, useState } from 'react';
import '../App.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Category = () => {
    const [data, setData] = useState([]);
    const [baraanuud, setBaraa] = useState([]);
    useEffect(()=>
    {
        onClick()
    },[])
    
    const onClick = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setData(data);
        const response1 = await fetch("https://fakestoreapi.com/products");
        const data1 = await response1.json();
        setBaraa(data1);
    }
    const onClick2 = async (e) => {  
        let path = "https://fakestoreapi.com/products/category/"+e
        const response2 = await fetch(path);
        const data2 = await response2.json();
        setBaraa(data2);
    }
    // https://fakestoreapi.com/products/1

    return (
        <div class="main">
            
            <div class="category">
            <h2 onClick={onClick}>Category</h2>
                {data.map(obj => 
                    <button class="cat_button" onClick={()=>onClick2(obj)} >{obj}</button>
                )}
            </div>
            <div class="items">
                {baraanuud.map(obj =>
                <div class="item" >    
                    <div ><img src={obj.image}/></div>
                    <div >{obj.title}</div>
                    <div class="category_name">{obj.category}</div>
                    <div class="item_price">{obj.price}₮</div>
                    </div>)}
            </div>
        </div>
    );

};
export default Category;
