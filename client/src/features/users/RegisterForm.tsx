import { Button, Heading } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextInput from '../../app/common/form/TextInput';
import { CheckCircleIcon } from '@chakra-ui/icons';

const RegisterForm = () => {
  return (
    <>
      <Heading py={3}>Register</Heading>
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
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          displayName: Yup.string().required(),
        })}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form>
            <TextInput name='username' placeholder='Username' />
            <TextInput name='password' placeholder='Password' type='password' />
            <TextInput name='email' placeholder='Email' type='email' />
            <TextInput name='displayName' placeholder='Display Name' />

            <Button
              mt={8}
              disabled={!isValid || !dirty || isSubmitting}
              isLoading={isSubmitting}
              variant='outline'
              colorScheme='pink'
              type='submit'
              leftIcon={<CheckCircleIcon />}
              isFullWidth
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
