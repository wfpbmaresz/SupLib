import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Belépés</h4>
        <FormRow type='email' name='email' defaultValue='johndoe@gmail.com' />
        <FormRow type='password' name='jelszó' defaultValue='secret123' />
        <button type='submit' className='btn btn-block'>
          Belépek
        </button>
        {/* <button type='button' className='btn btn-block'>
          explore the app
        </button> */}
        <p>
          Még nem vagy tag?
          <Link to='/register' className='member-btn'>
            Regisztrálok
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;