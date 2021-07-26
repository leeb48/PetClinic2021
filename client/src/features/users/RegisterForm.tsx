import { Alert, Button, Heading } from '@chakra-ui/react';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextInput from '../../app/common/form/TextInput';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useStore } from 'app/store/store';

const RegisterForm = () => {
  const { userStore } = useStore();

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
        onSubmit={(values, { setErrors }) =>
          userStore.register(values).catch((error) => setErrors({ error }))
        }
        validationSchema={Yup.object({
          username: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          displayName: Yup.string().required(),
        })}
      >
        {({ isValid, dirty, isSubmitting, errors }) => (
          <Form>
            <TextInput name='username' placeholder='Username' />
            <TextInput name='password' placeholder='Password' type='password' />
            <TextInput name='email' placeholder='Email' type='email' />
            <TextInput name='displayName' placeholder='Display Name' />

            <ErrorMessage
              name='error'
              render={() => (
                <Alert style={{ marginTop: 10 }} status='error'>
                  {errors.error}
                </Alert>
              )}
            />

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
