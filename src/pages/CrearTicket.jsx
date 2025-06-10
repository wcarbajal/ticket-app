import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Button } from 'antd';

const { Title, Text } = Typography;

export const CrearTicket = () => {
  
  const nuevoTicket = () => {
    console.log("jala ticket")
  }
  
  return (
    <>

      <Row>
        <Col span={ 14 } offset={ 6 } align="center">
          <Title level={ 3 } >
            Presiones el botton para un nuevo ticket
          </Title>
          <Button
            type="primary"
            shape="round"
            icon={ <DownloadOutlined />}
            size= "large"
            onClick={ nuevoTicket}

          >
            Jalar ticket
          </Button>


        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset= {6} align="center">

        <Text   level={2}>
          Su numero es: 
        </Text>
        <br />
        <Text   type="success" style={{ fontSize: 55}}>
          55
        </Text>
        
        </Col>
      </Row>


    </>
  );
};