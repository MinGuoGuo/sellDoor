import React, { Component } from 'react';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const RegistrationForm = Form.create()(React.createClass({
  getInitialState() {
    return {
      passwordDirty: false,
      person: {
          name: '',
          age: '',
          sex: '',
          tel: ''
      }
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    /*let name = this.refs.
    this.setState*/
  },
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  userCheck (rule, value, callback) {
      const re = /^.{2,8}$/;
      if (re.test(value) && value.trim() !== '' || value == '') {
          callback();
      } else {
          callback('请输入任意格式的2-8位字符,且不能为空!');
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
      console.log(value);
      const re = /^1[34578]\d{9}$/;
      if (re.test(value) || value == '') {
          callback();
      } else {
          callback('请输入正确的手机号码！');
      }
  },
  render() {
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
          {getFieldDecorator('姓名', {
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
          {getFieldDecorator('性别', {
            rules: [{
                 required: true, message: '请填写您的性别!'}, {

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
          {getFieldDecorator('年龄', {
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
          {getFieldDecorator('电话', {
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
          <Button type="primary" htmlType="submit" size="large">保存</Button>
        </FormItem>
      </Form>
    );
  },
}));

export default RegistrationForm;
