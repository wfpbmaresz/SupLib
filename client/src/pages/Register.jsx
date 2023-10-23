import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Regisztráció</h4>
        <FormRow type='text' name='név' />
        {/* <FormRow type='text' name='lastName' labelText='last name' />
        <FormRow type='text' name='location' /> */}
        <FormRow type='email' name='email' />

        <FormRow type='password' name='jelszó' />

        <button type='submit' className='btn btn-block'>
          Regisztrálok
        </button>
        <p>
          Már tag vagy?
          <Link to='/login' className='member-btn'>
            Belépés
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;