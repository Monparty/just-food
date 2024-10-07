import './CardItem.css';

function CardItem(props) {
    const { foods, clickCardItem } = props;
    return (
        <div className='item' onClick={() => {clickCardItem(foods)}}>
            <img className='item__image' src={foods.foodImg} />
            <h4>
                {foods.title}
            </h4>
            <p>{foods.desc}</p> 
        </div>
    );
}

export default CardItem;