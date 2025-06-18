import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const { Title, Text } = Typography;

export const IngresarPage = () => {

  const navigate = useNavigate();
  const [usuario] = useState( getUsuarioStorage() )
  


  const onFinish = ({agente, escritorio}) => {
    
    localStorage.setItem('agente', agente)
    localStorage.setItem('escritorio', escritorio)
    console.log( 'Success:', agente, escritorio );
    navigate( '/escritorio' );

  };
  const onFinishFailed = errorInfo => {
    console.log("Este es onFinishfailed")
    console.log( 'Failed:', errorInfo );
  };
  
useEffect(() => {

  if (usuario.agente && usuario.escritorio) {
    navigate( '/escritorio' );
    
  }
}, [navigate, usuario.agente, usuario.escritorio])

  

  return (
    <>
      <Title level={ 2 }> Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={ { span: 8 } }
        wrapperCol={ { span: 14 } }
        style={ { maxWidth: 600 } }
        initialValues={ { remember: true } }
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={ [ { required: true, message: 'Por favor ingrese su nombre!' } ] }
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={ [ { required: true, message: 'Ingrese el numero de escritorio!' } ] }
        >
          <Input type="number" min={ 1 } max={ 99 } />
        </Form.Item>


        <Form.Item label={ null }>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
          >
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>

    </>
  );
};