import { Button, Form, Input, Modal, Select } from 'antd';
import React from 'react';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const ModalEditCategory = ({ isModal, handleOk, handleCancel,product ,editFood}) => {
    const [form] = Form.useForm()
    const data ={categoryName:product.categoryName,image:product.image}
    form.setFieldsValue({category:data})
  
console.log(product)
 
    const onFinish = values => {
        console.log(values)
        const data ={ ...values.category}
        console.log(values)
        console.log(data)
            editFood(data,product.id);
        handleCancel()
        
    };
    return (
        <Modal
            title="Cập nhật danh mục"
            visible={isModal}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer={null}
        >
            <Form  {...layout}  form={form}  name="nest-messages" onFinish={onFinish}   >
            
            <Form.Item name={['category', 'categoryName']} label="Tên danh mục" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['category', 'image']} label="Ảnh"  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item className="mt-3 " wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Xác nhận
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalEditCategory;
