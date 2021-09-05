import React from 'react';
import { Title } from '../../../components/Title'
import { Text } from '../../../components/Text'
import { InvoicyHeading } from '../../../components/InvoicyHeading'
import { InputGroup } from '../../../components/InputGroup'
import { InputField } from '../../../components/InputField'
import { PrimaryButton } from '../../../components/PrimaryButton'
import { Link } from '../../../components/Link'
import { SignupForm, SignupTitleWrapper } from './Signup.styled'

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
        <Link to="/login">
          log in
        </Link>
      </Text>
    </SignupTitleWrapper>

    <SignupForm>
      <InputGroup label="Your Name" htmlFor="name">
        <InputField
          id="name"
          placeholder="Awesome Name"
          type="text"
        />
      </InputGroup>

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

      <InputGroup label="Confirm your Password" htmlFor="password">
        <InputField
          id="password"
          placeholder="********"
          type="password"
        />
      </InputGroup>

      <PrimaryButton type="submit">
        Sign up
      </PrimaryButton>
    </SignupForm>
  </>
)
