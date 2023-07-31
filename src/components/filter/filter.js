import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

function Filter({ setFilterToState }) {
  const dispatch = useDispatch();
  const setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input onChange={setFilterValue}></input>
    </div>
  );
}


Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default Filter;
