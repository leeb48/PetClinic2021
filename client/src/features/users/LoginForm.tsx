import { Button, Heading } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import TextInput from '../../app/common/form/TextInput';
import * as Yup from 'yup';
import { UnlockIcon } from '@chakra-ui/icons';

const LoginForm = () => {
  return (
    <>
      <Heading py={3}>Login</Heading>
      <Formik
        initialValues={{
          displayName: '',
          username: '',
          email: '',
          password: '',
          error: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          username: Yup.string().required(),
          password: Yup.string().required(),
        })}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form>
            <TextInput name='username' placeholder='Username' />
            <TextInput name='password' placeholder='Password' type='password' />

            <Button
              mt={8}
              disabled={!isValid || !dirty || isSubmitting}
              isLoading={isSubmitting}
              variant='outline'
              colorScheme='pink'
              type='submit'
              leftIcon={<UnlockIcon />}
              isFullWidth
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
