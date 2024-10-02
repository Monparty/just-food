import './CardItem.css';

function CardItem(props) {
    const { foods } = props;
    return (
        <div className='item'>
            <img className='item__image' src={foods.foodImg} />
            <h4>
                {foods.title}
            </h4>
            <p>{foods.desc}</p> 
        </div>
    );
}

export default CardItem;