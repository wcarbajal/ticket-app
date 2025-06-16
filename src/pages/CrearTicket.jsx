import { useContext, useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../contex/UIContext-only';

const { Title, Text } = Typography;

export const CrearTicket = () => {
  
  useHideMenu( true );

  const { socket } = useContext( SocketContext );
  const [ticket, setTicket] = useState({})


  const nuevoTicket = () => {

    socket.emit( 'solicitar-ticket', null, ( ticket ) => {
      setTicket(ticket)
    } );
  };

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
            icon={ <DownloadOutlined /> }
            size="large"
            onClick={ nuevoTicket }

          >
            Jalar ticket
          </Button>


        </Col>
      </Row>
      <Row style={ { marginTop: 100 } }>
        <Col span={ 14 } offset={ 6 } align="center">

          <Text level={ 2 }>
            Su numero es:
          </Text>
          <br />
          <Text type="success" style={ { fontSize: 55 } }>
            {ticket.numero}
          </Text>

        </Col>
      </Row>


    </>
  );
};