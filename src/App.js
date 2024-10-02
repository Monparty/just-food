import './App.css';
import './FoodPost.css';
import foods from './data/foods';
import AppHeader from './componets/AppHeader';
import CardItem from './componets/CardItem';
import FoodPost from './componets/FoodPost';
import { useState } from 'react';

function App() {
    const [clickFoodItem, setclickFoodItem] = useState(foods[0])
    const foodElements = foods.map((food, index) => {
        return <CardItem key={index} foods={food}/>
    })

    let foodPost = null;
    if (!!clickFoodItem) {
        foodPost = <FoodPost />
    }

    return (
        <div className="App">
            <AppHeader />
            <div className='app__body'>
                <div className='container__item'>
                    {foodElements}
                </div>
            </div>
            {foodPost}
        </div>
    );
    }

export default App;
