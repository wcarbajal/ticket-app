import { Card, Col, List, Row, Typography, Tag, Divider } from "antd";
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;


const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
];

export const ColaPage = () => {

  useHideMenu(true);

  return (
    <>
      <Title level={ 1 } > Atendiento al cliente

      </Title>

      <Row>
        <Col span={ 12 }>
          <List
            dataSource={ data.slice( 0, 3 ) }
            renderItem={ item => (
              <List.Item>
                <Card
                  style={ { width: 400, marginTop: 16 } }
                  actions={ [
                    <Tag color="magenta" key="escritorio">{ item.escritorio }</Tag>,
                    <Tag color="geekblue" key="agente">{ item.agente }</Tag>
                  ] }
                >
                  <Title>{ item.ticketNo }</Title>
                </Card>
              </List.Item>
            ) }

          />

        </Col>
        <Col span={ 12 }>

          <Divider >Historial</Divider>
          <List
            dataSource={ data.slice( 3 ) }
            renderItem={ item => (
              <List.Item>
                <List.Item.Meta
                  title={ ` Ticket No. ${ item.ticketNo } ` }
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta" key="escritorio">{ item.escritorio }</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="geekblue" key="agente">{ item.agente }</Tag>
                    </>
                  }
                />


              </List.Item>
            ) }

          />


        </Col>
      </Row>


    </>
  );
};