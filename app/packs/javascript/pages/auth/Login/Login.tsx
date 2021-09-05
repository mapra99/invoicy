import React from 'react';
import { Title } from '../../../components/Title'
import { Text } from '../../../components/Text'
import { Link } from '../../../components/Link'
import { InvoicyHeading } from '../../../components/InvoicyHeading'
import { InputGroup } from '../../../components/InputGroup'
import { InputField } from '../../../components/InputField'
import { PrimaryButton } from '../../../components/PrimaryButton'
import { LoginForm, LoginTitleWrapper } from './Login.styled'

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
        <Link to="/signup">
          sign up
        </Link>
      </Text>
    </LoginTitleWrapper>

    <LoginForm>
      <InputGroup label="Email" htmlFor="email">
        <InputField
          id="email"
          placeholder="fulanito@mail.com"
          type="email"
        />
      </InputGroup>

      <InputGroup label="Password" htmlFor="password">
        <InputField
          id="password"
          placeholder="********"
          type="password"
        />
      </InputGroup>

      <PrimaryButton type="submit">
        Log in
      </PrimaryButton>
    </LoginForm>
  </>
)
