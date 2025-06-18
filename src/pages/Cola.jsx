import { Card, Col, List, Row, Typography, Tag, Divider } from "antd";
import { useHideMenu } from '../hooks/useHideMenu';
import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../contex/UIContext-only';

const { Title, Text } = Typography;




export const ColaPage = () => {

  useHideMenu( true );

  const { socket } = useContext( SocketContext );
  const [ tickets, setTickets ] = useState( [] );


  useEffect( () => {


    socket.on( 'ticket-asignado', ( asignados ) => {
      setTickets( asignados );
    } );

    return () => {
      socket.off( 'ticket-asignado' );
    };


  }, [ socket ] );

  return (
    <>
      <Title level={ 1 } > Atendiento al cliente

      </Title>

      <Row>
        <Col span={ 12 }>
          <List
            dataSource={ tickets.slice( 0, 3 ) }
            renderItem={ ticket => (
              <List.Item>
                <Card
                  style={ { width: 400, marginTop: 16 } }
                  actions={ [
                    <Tag color="magenta" key="escritorio">{ ticket.escritorio }</Tag>,
                    <Tag color="geekblue" key="agente">{ ticket.agente }</Tag>
                  ] }
                >
                  <Title>{ ticket.numero }</Title>
                </Card>
              </List.Item>
            ) }

          />

        </Col>
        <Col span={ 12 }>

          <Divider >Historial</Divider>
          <List
            dataSource={ tickets.slice( 3 ) }
            renderItem={ ticket => (
              <List.Item>
                <List.Item.Meta
                  title={ ` Ticket No. ${ ticket.numero } ` }
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta" key="escritorio">{ ticket.escritorio }</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="geekblue" key="agente">{ ticket.agente }</Tag>
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