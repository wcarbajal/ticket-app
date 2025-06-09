import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

export const EscritorioPage = () => {
  return (
    <>
      <Row>
        <Col span={ 20 }>
          <Title level={ 2 }> Wuilmer</Title>
          <Text> Usted está trabajando en el escritorio</Text>
          <Text>: 5</Text>
        </Col>

        <Col >
        
        </Col>

      </Row>
    </>
  );
};