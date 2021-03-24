import FiltersProduct from '../components/Filters'

import React from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import { selectFilterAll, chengeFilter } from '../store/goodSlice'

function FilterChenge() {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilterAll);



    function handlerClickFilter(event) {
        event.preventDefault();

        if (!event.target.classList.contains('product__link')) return false;
        let nameEvent = event.target.getAttribute('name');

        dispatch(chengeFilter(nameEvent));
    }

    return (
        <>
            <div onClick={handlerClickFilter}>
                <FiltersProduct filters={filters}/>
            </div>
        </>
    )
}

export default FilterChenge;