import { RequestHelper } from '../../../shared';

const FakeStoreClient = RequestHelper.fakeStoreApiInstance();

const login = async (username: string, password: string): Promise<{ token: string } | never> => {
  try {
    const { data } = await FakeStoreClient.post('auth/login', {
      username,
      password,
    });
    return data;
  } catch (err: any) {
    if (err?.message.includes('401')) {
      throw new Error('El usuario o contraseña son incorrectos.');
    } else if (err?.message.includes('50')) {
      throw new Error('Error de red al intentar iniciar sesión.');
    }
    throw err;
  }
};

export default {
  login,
};
