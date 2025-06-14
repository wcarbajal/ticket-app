import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { useEffect, useState } from 'react';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router';

const { Title, Text } = Typography;

export const EscritorioPage = () => {

    useHideMenu(false);
     const [usuario] = useState( getUsuarioStorage() )
     const navigate = useNavigate();

  const salir = () => {
    console.log( "salir" );
    localStorage.removeItem('agente')
    localStorage.removeItem('escritorio')
    navigate('/ingresar')
  };

  const siguienteTicket = () => {
    console.log( "siguiente" );
  };

      useEffect(() => {
        if (!usuario.agente || !usuario.escritorio) {
            navigate('/ingresar');
        }
    }, [usuario, navigate]);

  return (
    <>
      <Row>
        <Col span={ 20 }>
          <Title level={ 2 }> {usuario.agente}</Title>
          <Text> Usted está trabajando en el escritorio</Text>
          <Text type="success">: {usuario.escritorio}</Text>
        </Col>

        <Col span={ 4 } align="right" >
          <Button
            shape="round"
            variant="solid"
            color="danger"
            onClick={ salir }
          >
            <CloseCircleOutlined />
            Salir

          </Button>

        </Col>

      </Row>

      <Divider />

      <Row>
        <Col>
          <Text > Está atendiendo el ticket número: </Text>
          <Text
            style={ { fontSize: 30 } }
            type="danger"
          >
            65
          </Text>
        </Col>
      </Row>

      <Row>

        <Col offset={ 18 } span={ 6 } align="right">
          <Button
            onClick={ siguienteTicket }
            shape= "round"
            type="primary"
          >
            <RightOutlined />
            Siguiente
          </Button>

        </Col>
      </Row>

    </>
  );
};