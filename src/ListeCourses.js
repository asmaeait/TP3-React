// Liste de courses avec props - Asma Ait Elmahjoub
import PropTypes from 'prop-types';

function ListeCourses({ elements, titre }) {
  return (
    <div>
      <h3>{titre}</h3>
      <ul>
        {elements.map((element, index) => (
          <li key={index}> {element}</li>
        ))}
      </ul>
      <p>Total : {elements.length} articles</p>
    </div>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  titre: PropTypes.string,
};

ListeCourses.defaultProps = {
  titre: 'Ma liste',
};

export default ListeCourses;