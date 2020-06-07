import { Descriptions, Rate } from "antd";
import PropTypes from "prop-types";

export default function DescriptionsMovie({ data }) {
  return (
    <>
      <div>
        <h1>
          {data.title} ({data.release_date.substring(0, 4)})
        </h1>
      </div>
      <Descriptions column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
        <Descriptions.Item label="Language - Country">{`${data.language} - ${data.country}`}</Descriptions.Item>
        {data.categories.length > 0 ? (
          <Descriptions.Item label="Category">{data.categories.map((el) => `${el} `)}</Descriptions.Item>
        ) : null}
        <Descriptions.Item label="Type">{data.type}</Descriptions.Item>
        <Descriptions.Item label="Rating">
          <Rate disabled defaultValue={data.rating} />
          <span>{` - ${data.voice} voices`}</span>
        </Descriptions.Item>
        <Descriptions.Item label="Precession">{data.precession}</Descriptions.Item>
        <Descriptions.Item label="Description">
          <span style={{ width: 100 }}>{data.description}</span>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}

DescriptionsMovie.propTypes = {
  data: PropTypes.object,
};
