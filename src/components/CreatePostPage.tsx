import React, { useEffect, FC } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button, Typography, notification } from 'antd';
import { Prompt } from "react-router-dom";
import { PATH_MAIN_PAGE } from '../path'
import Action from '../models/ActionI'


const { Text } = Typography;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CreatePostPage: FC<{ addPost: { (action: Action): void } }> = ({ addPost }) => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {

    register("title", { required: true, maxLength: 20 })
    register("post", { required: true, maxLength: 300 })

  }, [register, setValue]);

  const getChangeHandlerWithEvent = (name: any) => (event: any) =>
    setValue(name, event.target.value);

  const hasErrorClass = (name: any) => ({ className: errors[name] && "has-error" });

  const errorDetail = (name: any, message: string) =>
    errors[name] && <Text type="danger">{message}</Text>;

  const onSubmit = (data: any) => {

    addPost({ type: 'ADD_POST', post: data })
    notification.success({
      message: 'SUCCUSS',
      description: 'Post created successfully.',
    });
  }

  const message = (location: any, action: any) => {
    if (action === 'POP') {
      console.log("Backing up...")
    }

    return location.pathname.startsWith(PATH_MAIN_PAGE) && 'Are you sure you want to leave the page?'
  }

  return (
    <>
      <Prompt message={message} />

      <form style={{ width: 400, margin: 'auto' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Item label="Title" {...hasErrorClass("title")}>
          <Input
            onChange={getChangeHandlerWithEvent("title")}
          />
          {errorDetail("title", "Please input title!")}
        </Form.Item>

        <Form.Item label="Post" {...hasErrorClass("post")}>
          <Input
            onChange={getChangeHandlerWithEvent("post")}
          />
          {errorDetail("post", "Please input post!")}
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            create
        </Button>
        </Form.Item>
      </form>
    </>
  );
};

export default CreatePostPage;
