import './App.css';
import foods from './data/foods';
import AppHeader from './componets/AppHeader';
import CardItem from './componets/CardItem';
import FoodPost from './componets/FoodPost';
import { useState } from 'react';
import BoxSearch from './componets/BoxSearch';

function App() {
    const [clickFoodItem, setclickFoodItem] = useState(null);
    const [searchText, setSearchInput] = useState('');

    function clickCardItem(thisFood) {
        setclickFoodItem(thisFood)
    }

    // filter ข้อมูล
    const filterFoods = foods.filter((food) => {
        return food.title.includes(searchText)
    })

    // loop ข้อมูลมาแสดงเป็น Card
    const foodElements = filterFoods.map((food, index) => {
        return <CardItem key={index} foods={food} clickCardItem={clickCardItem}/>
    })

    // เอาไว้เช็คให้ pop up เปิด
    let foodPost = null;
    if (!!clickFoodItem) {
        foodPost = <FoodPost foods={clickFoodItem} closeCardItem={closeCardItem}/>
    }

    // เอาไว้ปิด pop up
    function closeCardItem() {
        setclickFoodItem(null)
    }

    return (
        <div className="app">
            <AppHeader />
            <section className='app__section'>
                <div className='app__body'>
                    <BoxSearch value={searchText} onValueChange={setSearchInput} />
                    <div className='container__item'>
                        {foodElements}
                    </div>
                </div>
                {foodPost}
            </section>
        </div>
    );
}

export default App;
