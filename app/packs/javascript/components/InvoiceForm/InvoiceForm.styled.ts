import styled from 'styled-components'
import { Title } from '../Title'

export const InvoiceFormWrapper = styled.form`
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
