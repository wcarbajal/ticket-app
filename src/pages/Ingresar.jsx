import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const IngresarPage = () => {

  const navigate = useNavigate();

  const onFinish = values => {
    console.log( 'Success:', values );
    navigate( '/escritorio' );

  };
  const onFinishFailed = errorInfo => {
    console.log( 'Failed:', errorInfo );
  };

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