import React, { Component } from 'react';
import 'whatwg-fetch';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Modal } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const RegistrationForm = Form.create()(React.createClass({
    getInitialState() {
        return {
            passwordDirty: false,
            loading: false,
            text: '保存'
        };
    },
    handleSubmit(e) {
        const _this = this;
        e.preventDefault();
        this.setState({
            loading: true,
            text: '提交中'
        });
        this.props.form.validateFieldsAndScroll((err, data) => {
            if (!!err) {
                console.log('Received values of form: ', data);
                this.setState({
                    loading: false,
                    text: '保存'
                });
                return ;
            }
            fetch('http://127.0.0.1/sellDoor/php/add.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json();
            }).then((result) => {
                if (result.code == 1) {
                    Modal.success({
                        title: '提示信息',
                        content: result.msg,
                        onOk() {
                            window.history.back();
                        }
                    });
                } else {
                    Modal.warning({
                        title: '服务器繁忙',
                        content: result.msg
                    });
                }
            }).catch((error) => {
                console.log('提交失败');
                Modal.error({
                    content: '服务器爆炸！',
                    onOk() {
                        _this.setState({
                            loading: false,
                            text: '保存'
                        });
                    }
                });
            })
        });
    },
    userCheck (rule, value, callback) {
        const re = /^.{2,8}$/;
        if (!re.test(value)) {
            callback('请输入任意格式的2-8位字符,且不能为空!');
        } else {
            callback();
        }
    },
    sexCheck (rule, value, callback) {
        if (value !== '') {
            callback();
        } else{
            callback('请填写您的性别！')
        }
    },
    ageCheck (rule, value, callback) {
        const re = /^[123456789]\d{0,2}$/;
        if (re.test(value) || value == '') {
            callback();
        } else {
            callback('请输入正确的年龄！');
    }
    },
    phoneCheck (rule, value, callback) {
        const re = /^1[34578]\d{9}$/;
        if (re.test(value) || value == '') {
            callback();
        } else {
            callback('请输入正确的11位手机号码！');
        }
    },
    backClick () {
        window.history.go(-1);
    },
    render() {
        const _this = this;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 14,
                offset: 6,
            },
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="姓名"
                    hasFeedback
                    >
                    {getFieldDecorator('name', {
                    rules: [{
                    required: true, message: '用户名不能为空！',
                    }, {
                    validator: this.userCheck,
                    }],
                    })(
                        <Input />
                    )}
                    </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                    >
                    {getFieldDecorator('sex', {
                    rules: [{
                    required: true, message: '请选择您的性别!'}, {

                    },{
                    validator: this.sexCheck
                    }],
                    })(
                        <Select showSearch default='' placeholder="性别" optionFilterProp="children" onChange={ this.showValue } notFoundContent="">
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="年龄"
                    hasFeedback
                    >
                    {getFieldDecorator('age', {
                    rules: [{
                    required: true, message: '年龄不能为空！',
                    }, {
                    validator: this.ageCheck
                    }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="电话"
                    hasFeedback
                    >
                    {getFieldDecorator('tel', {
                    rules: [{
                    required: true, message: '电话号码不能为空！',
                    }, {
                    validator: this.phoneCheck,
                    }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button loading={this.state.loading} type="primary" htmlType="submit" size="large">{this.state.text}</Button>
                    <Button style={{margin: '0 15px'}} type="primary" onClick={_this.backClick}>返回</Button>
                </FormItem>
            </Form>);
        },
}));

export default RegistrationForm;
