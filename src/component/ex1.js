import React, { useEffect, useState } from 'react';
import '../App.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Category = () => {
    const [data, setData] = useState([]);
    const [baraanuud, setBaraanuud] = useState( []);
    const [baraa, setBaraa] = useState();

    useEffect(()=>
    {
        onClick()
    },[])
    // delgets zuragdaj duussanii daraa hadgalagdana

    const onClick = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setData(data);
        const response1 = await fetch("https://fakestoreapi.com/products");
        const data1 = await response1.json();
        setBaraanuud(data1);
        setBaraa()
    }
    const onClick2 = async (e) => {  
        let path = "https://fakestoreapi.com/products/category/"+e
        const response2 = await fetch(path);
        const data2 = await response2.json();
        setBaraanuud(data2);
        setBaraa()
    }
    // https://fakestoreapi.com/products/1
    const onClick3 = async (e) => {  
        let path = "https://fakestoreapi.com/products/"+e
        const response3 = await fetch(path);
        const data3 = await response3.json();
        console.log(data3);
        setBaraa(data3);
    }
    return (
        <div>
        <div class="main">
            <div class="category">
            <h2 onClick={onClick}>Category</h2>
                {data.map(obj => 
                    <button class="cat_button" onClick={()=>onClick2(obj)} >{obj}</button>
                )}
            </div>
            
            {!baraa &&  
            <div class="items">
                {baraanuud.map(obj =>
                <div class="item" onClick={()=>onClick3(obj.id)}>    
                    <div ><img src={obj.image}/></div>
                    <div >{obj.title}</div>
                    <div class="category_name">{obj.category}</div>
                    <div class="item_price">{obj.price}₮</div>
                    </div>)}
            </div>}
            {baraa && 
            <div class="detail">
                <div class="det_img"><img src={baraa.image}/></div>
                <div class="col2">
                    <p>Үнэ</p>
                    <div class="item_price">{baraa.price}₮</div>
                    <p>Дэлгэрэнгүй</p>
                    <div class="item_des">{baraa.description}</div>
                </div>
            </div>
            }
        </div>
        <div>
           <footer>
			<p>Copyright 2016 67Green.</p>
		</footer> 
        </div>
        </div>
        
    );

};
export default Category;
