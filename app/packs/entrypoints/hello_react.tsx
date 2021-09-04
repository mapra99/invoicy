// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import '../styles/global';
import { COLORS } from '../javascript/constants';
import { Title } from '../javascript/components/Title';
import { Text } from '../javascript/components/Text';
import { LoadingSpinner } from '../javascript/icons/LoadingSpinner';
import { CalendarIcon } from '../javascript/icons/CalendarIcon';
import { Button } from '../javascript/components/Button';
import { PrimaryButton } from '../javascript/components/PrimaryButton';
import { SecondaryButton } from '../javascript/components/SecondaryButton';
import { PlusIcon } from '../javascript/icons/PlusIcon'
import { DangerButton } from '../javascript/components/DangerButton';
import { TertiaryButton } from '../javascript/components/TertiaryButton';
import { InputField } from '../javascript/components/InputField';
import { InputGroup } from '../javascript/components/InputGroup';
import { SelectField } from '../javascript/components/SelectField';
import { DatePickerField } from '../javascript/components/DatePickerField';
import themes from '../javascript/themes';
import { useTheme } from '../javascript/hooks/useTheme';

const keys = Object.keys(COLORS);
const randomColor = COLORS[keys[ keys.length * Math.random() << 0]];

interface HelloProps {
  name: string;
}

const Hello = ({name}: HelloProps) => (
  <>
    <Title>Hello {name}!</Title>
    <Title as="h2">Hello {name}!</Title>
    <Title as="h3">Hello {name}!</Title>
    <Title as="h4">Hello {name}!</Title>
    <Text type="body1">Aliqua et aliquip eiusmod quis qui cillum excepteur. Nostrud amet culpa ex exercitation excepteur Lorem sint commodo Lorem quis sunt enim. Ipsum Lorem cillum cillum anim amet aliquip laborum deserunt consectetur. Ea pariatur cupidatat exercitation excepteur laborum ex ut aute ipsum mollit magna voluptate nisi. Incididunt ea commodo enim cupidatat enim laboris.</Text>
    <Text type="body2">Aliqua et aliquip eiusmod quis qui cillum excepteur. Nostrud amet culpa ex exercitation excepteur Lorem sint commodo Lorem quis sunt enim. Ipsum Lorem cillum cillum anim amet aliquip laborum deserunt consectetur. Ea pariatur cupidatat exercitation excepteur laborum ex ut aute ipsum mollit magna voluptate nisi. Incididunt ea commodo enim cupidatat enim laboris.</Text>

    <Title>Icons</Title>
    <LoadingSpinner color="#000" />
    <LoadingSpinner />
    <div style={{maxWidth: "70px"}}>
      <CalendarIcon />
    </div>

    <Title>Buttons</Title>
    <Button>Default button</Button>
    <SecondaryButton>Edit</SecondaryButton>
    <PrimaryButton>Mark as Paid</PrimaryButton>
    <PrimaryButton icon={<PlusIcon />}>
      Add invoice
    </PrimaryButton>
    <DangerButton>Delete</DangerButton>
    <TertiaryButton>Save as draft</TertiaryButton>

    <div style={{maxWidth: "340px"}}>
      <Title>Form components</Title>
      <InputGroup label="Street Address" htmlFor="holi">
        <InputField
          id="holi"
          type="text"
        />
      </InputGroup>
      <InputGroup label="Street Address" htmlFor="holi">
        <InputField
          id="holi"
          type="text"
        />
      </InputGroup>
      <InputGroup label="Street Address" htmlFor="holi">
        <InputField
          id="holi"
          type="text"
        />
      </InputGroup>

      <InputGroup label="Street Address" htmlFor="holi">
        <SelectField
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]}
        />
      </InputGroup> 

      <DatePickerField />
    </div>
  </>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

const App = () => {
  const { currentTheme, switchTheme } = useTheme({ defaultTheme: "light" })

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Hello name={randomColor} />
      <PrimaryButton onClick={switchTheme} >Switch Theme</PrimaryButton>
    </ThemeProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
