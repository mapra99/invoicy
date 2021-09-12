import React from 'react';
import { Title } from '../../../components/Title'
import { Text } from '../../../components/Text'
import { InvoicyHeading } from '../../../components/InvoicyHeading'
import { InputGroup } from '../../../components/InputGroup'
import { InputField } from '../../../components/InputField'
import { PrimaryButton } from '../../../components/PrimaryButton'
import { Link } from '../../../components/Link'
import { SignupForm, SignupTitleWrapper } from './Signup.styled'
import { ROUTES } from '../../../constants'
import { server } from '../../../utils/server'

const { AUTH: AUTH_ROUTES } = ROUTES

export const Signup = () => (
  <>
    <InvoicyHeading />
    <SignupTitleWrapper>
      <Title as="h2">
        Sign Up
      </Title>
      <Text>
        or perhaps you need to
        {' '}
        <Link to={AUTH_ROUTES.SIGN_IN}>
          log in
        </Link>
      </Text>
    </SignupTitleWrapper>

    <SignupForm
      action={AUTH_ROUTES.CREATE_USERS}
      method="post"
    >
      <InputField
        type="hidden"
        name="authenticity_token"
        value={server.getAuthenticityToken()}
      />

      <InputGroup label="Your Name" htmlFor="name">
        <InputField
          id="name"
          placeholder="Awesome Name"
          type="text"
          name="user[name]"
        />
      </InputGroup>

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

      <InputGroup label="Confirm your Password" htmlFor="password">
        <InputField
          id="password"
          placeholder="********"
          type="password"
          name="user[password_confirmation]"
        />
      </InputGroup>

      <PrimaryButton type="submit">
        Sign up
      </PrimaryButton>
    </SignupForm>
  </>
)
