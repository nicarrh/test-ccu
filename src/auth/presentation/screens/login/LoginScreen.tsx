import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { ErrorLoger, Layout, Constants } from '@ccu/shared';
import { Validations } from '@ccu/shared';
import Input from '../../components/login/input';
import useContextAuthentication from '../../../infraestructure/hooks/useContextAuthentication';
import { styles } from './LoginScreen.styles';

const { colors } = Constants;

const LoginScreen = () => {
  const { login, isLoading: isDoingLogin } = useContextAuthentication();

  const [error, setError] = useState<string | null>(null);

  const handleLogin = async ({ username, password }: { username: string; password: string }) => {
    try {
      await login(username, password);
    } catch (error: any) {
      ErrorLoger.log(`Do login error: ${error?.message}`);
      handleError(error?.message);
    }
  };

  const handleError = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hola{'\n'}Inicia Sesión!</Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={Validations.validationLoginSchema}>
        {({ values, handleChange, handleSubmit, errors, handleBlur, touched, isValidating }) => (
          <Layout>
            <Input
              value={values.username}
              placeholder="user_1"
              onChangeText={handleChange('username')}
              style={styles.input}
              onBlur={handleBlur('username')}
              inputName="Nombre de usuario"
              error={{ name: errors.username, touched: !!touched.username }}
            />

            <Input
              value={values.password}
              placeholder="s@l_123"
              onChangeText={handleChange('password')}
              secureTextEntry
              inputName="Contraseña"
              style={styles.input}
              error={{ name: errors.password, touched: !!touched.password }}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.loginButton}>
                {isDoingLogin || isValidating ? (
                  <ActivityIndicator size="small" color={colors.white} />
                ) : (
                  <Text style={styles.loginText}>Ingresar</Text>
                )}
              </View>
            </TouchableOpacity>
            {error && <Text style={{ color: colors.red }}>{error}</Text>}
          </Layout>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;
