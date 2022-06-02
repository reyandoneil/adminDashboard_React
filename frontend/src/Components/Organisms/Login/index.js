import {
  LoginContainer,
  LeftContent,
  RightContent,
  Left,
  Right,
  InputFormWrapper,
} from './ElementsLogin';
import { Image, InputText } from '../../Molecules';

function Login() {
  return (
    <>
      <LoginContainer>
        <LeftContent>
          <Image className={'login'} />
        </LeftContent>
        <RightContent>
          <Left></Left>
          <InputFormWrapper>
            <InputText
              name={'Username'}
              id={'userName'}
              type={'text'}
            />
                <InputText
              name={'Password'}
              id={'password'}
              type={'password'}
            />
          </InputFormWrapper>
          <Right></Right>
        </RightContent>
      </LoginContainer>
    </>
  );
}

export default Login;
