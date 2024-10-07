import './BoxSearch.css';

function BoxSearch(props) {
    const { value, onValueChange } = props;
    return (
        <input type='text' className='searchInput' placeholder='ค้นหา......' value={value} onChange={(event) => {onValueChange(event.target.value)}} />
    );
}

export default BoxSearch;