import styled from 'styled-components'
import { Title } from '../Title'

export const InvoiceFormWrapper = styled.form`
  padding-bottom: 88px;
`

export const InvoiceFormSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 24px;

  > * {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

export const InvoiceFormSectionTitle = styled(Title)`
  color: ${props => props.theme.text.secondary};
  margin-bottom: 24px;
  width: 100%;
`

export const CityWrapper = styled.div`
  flex: 1 1;
  margin-bottom: 24px;
`

export const PostcodeWrapper = styled.div`
  flex: 1 1;
  margin-bottom: 24px;
`

export const InvoiceFormControlsWrapper = styled.div`
  background: ${props => props.theme.layout.bgSecondary};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 0px -64px 0px 0px linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.1) 100%); */
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.1);
`
