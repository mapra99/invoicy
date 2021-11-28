import { Dispatch, SetStateAction } from 'react'

export interface IModalContext {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>);
}
