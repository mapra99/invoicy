import React from 'react';
import { Title } from '../../../components/Title'
import { Text } from '../../../components/Text'
import { Link } from '../../../components/Link'
import { InvoicyHeading } from '../../../components/InvoicyHeading'
import { InputGroup } from '../../../components/InputGroup'
import { InputField } from '../../../components/InputField'
import { PrimaryButton } from '../../../components/PrimaryButton'
import { LoginForm, LoginTitleWrapper } from './Login.styled'
import { ROUTES } from '../../../constants'
import { server } from '../../../utils/server'

const { AUTH: AUTH_ROUTES } = ROUTES

export const Login = () => (
  <>
    <InvoicyHeading />
    <LoginTitleWrapper>
      <Title as="h2">
        Login
      </Title>
      <Text>
        or perhaps you need to
        {' '}
        <Link to={AUTH_ROUTES.SIGN_UP}>
          sign up
        </Link>
      </Text>
    </LoginTitleWrapper>

    <LoginForm
      action={AUTH_ROUTES.SIGN_IN}
      method="post"
    >
      <InputField
        type="hidden"
        name="authenticity_token"
        value={server.getAuthenticityToken()}
      />

      <InputGroup label="Email" htmlFor="email">
        <InputField
          id="email"
          placeholder="fulanito@mail.com"
          type="email"
          name="user[email]"
        />
      </InputGroup>

      <InputGroup label="Password" htmlFor="password">
        <InputField
          id="password"
          placeholder="********"
          type="password"
          name="user[password]"
        />
      </InputGroup>

      <PrimaryButton type="submit">
        Log in
      </PrimaryButton>
    </LoginForm>
  </>
)
