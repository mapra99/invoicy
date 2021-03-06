import styled from 'styled-components';
import { Title } from '../Title';

export const InvoiceUuid = styled(Title)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;

  &:before {
    color: ${(props) => props.theme.layout.buttons};
    content: "# ";
  }
`;
