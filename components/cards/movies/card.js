import { Rate } from "antd";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Link from "next/link";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
};

export default function Card({ movies }) {
  return (
    <Slider {...settings}>
      {movies.map(el => {
        return (
          <Link key={el.id} href={`/movie/[id]`} as={`/movie/${el.id}`}>
            <a>
            <div
              className="p-c"
              style={{cursor: "pointer", marginRight: 10, flexDirection: "column" }}>
              <div style={{ width: 150, height: 200 }}>
                <img src={`http://localhost:1337${el.cover.url}`} width="140" height="200" />
              </div>
              <div style={{ paddingTop: 7 }}>
                <Rate disabled defaultValue={el.rating / 2} />
              </div>
              <div style={{ paddingBottom: 7 }}>
                <span style={{ fontSize: 14, color: "#000" }}>{el.title}</span>
              </div>
            </div>
            </a>
          </Link>
        );
      })}
    </Slider>
  );
}

Card.propTypes = {
  movies: PropTypes.array,
};
