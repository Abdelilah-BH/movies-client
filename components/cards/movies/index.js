import { Divider } from "antd";
import Card from "./card";
import PropTypes from "prop-types";

export default function ListCardMovies({ sub_categories }) {
  return (
    <div>
      {sub_categories.map((el,i) => //el = elemet && i = index
        el.movies.length > 0 ? (
          <div key={i} className="container-card-list">
            <Divider>
              <span>{el.name}</span>
            </Divider>
            <Card movies={el.movies} />
          </div>
        ) : null
      )}
    </div>
  );
}

ListCardMovies.propTypes = {
  sub_categories: PropTypes.array,
};
