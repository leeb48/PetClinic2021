import { Alert, Button, Heading } from '@chakra-ui/react';
import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import TextInput from '../../app/common/form/TextInput';
import * as Yup from 'yup';
import { UnlockIcon } from '@chakra-ui/icons';
import { useStore } from 'app/store/store';

const LoginForm = () => {
  const { userStore } = useStore();

  return (
    <>
      <Heading py={3}>Login</Heading>
      <Formik
        initialValues={{
          email: '',
          password: '',
          error: null,
        }}
        onSubmit={(values, { setErrors }) =>
          userStore
            .login(values)
            .catch((error) => setErrors({ error: 'Invalid Credentials' }))
        }
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
      >
        {({ isValid, dirty, isSubmitting, errors }) => (
          <Form>
            <TextInput name='email' placeholder='Email' />
            <TextInput name='password' placeholder='Password' type='password' />
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
