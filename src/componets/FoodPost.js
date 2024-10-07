import './FoodPost.css';

function FoodPost(props) {
    const { foods, closeCardItem } = props;
    return (
        <div className='pop__container' onClick={closeCardItem}>
            <div className="pop__desc">
                <img className='item__image' src={foods.foodImg} />
                <h4>{foods.title}</h4>
            </div>
        </div>
    );
}

export default FoodPost;