import styled, { DefaultTheme } from 'styled-components';
import { FONTS } from '../../constants';

const { SPARTAN } = FONTS;

const datePickerStyles = (theme: DefaultTheme) => `
  .react-date-picker {
    display: inline-flex;
    position: relative;
    width: 100%;
  }
  .react-date-picker,
  .react-date-picker *,
  .react-date-picker *:before,
  .react-date-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-date-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-date-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: 1px solid ${theme.forms.input.border};
    border-radius: 4px;
    width: 100%;
    height: 48px;
    padding: 0 10px 0 20px;
    font-family: ${SPARTAN};
    line-height: 1.25;
    font-size: 12px;
    letter-spacing: -0.25px;
    font-weight: 700;
    color: ${theme.forms.input.text};
    background-color: ${theme.forms.input.bg};
  }
  .react-date-picker__inputGroup {
    min-width: calc((4px * 3) +  0.54em * 8  +  0.217em * 2);
    flex-grow: 1;
    padding: 0 2px;
    box-sizing: content-box;
  }
  .react-date-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }
  .react-date-picker__inputGroup__input {
    color: ${theme.forms.input.text};
    min-width: 0.54em;
    height: 100%;
    position: relative;
    padding: 0 1px;
    border: 0;
    background: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
    
    &:focus {
      outline: none;
    }
  }
  .react-date-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-date-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-date-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px +  0.54em);
  }
  .react-date-picker__clear-button {
    display: none;
  }
  .react-date-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-date-picker__button svg {
    width: 16px;
    fill: ${theme.forms.input.icons};
  }
  .react-date-picker__button:enabled {
    cursor: pointer;
  }
  .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
  .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
    stroke: #0078d7;
  }
  .react-date-picker__button:disabled .react-date-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-date-picker__button svg {
    display: inherit;
  }
  .react-date-picker__calendar {
    width: 350px;
    max-width: 100vw;
    position: absolute;
    top: 72px !important;
    left: 0;
    z-index: 1;
  }
  .react-date-picker__calendar--closed {
    display: none;
  }
  .react-date-picker__calendar .react-calendar {
    border-width: thin;
  }
`;

const calendarStyles = (theme) => `
  .react-calendar {
    width: 240px;
    max-width: 100%;
    background: ${theme.forms.input.bg};
    font-family: ${SPARTAN};
    line-height: 1.25;
    font-size: 12px;
    letter-spacing: -0.25px;
    font-weight: 700;
    color: ${theme.forms.input.text};
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    border-radius: 8px;
    padding: 20px 13px 13px;
  }
  .react-calendar button {
    font-family: ${SPARTAN};
    line-height: 1.25;
    font-size: 12px;
    letter-spacing: -0.25px;
    font-weight: 700;
    color: ${theme.forms.input.text};
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 25px;
    margin-bottom: 27px;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation button {
    background: none;
  }
  .react-calendar__navigation__arrow {
    font-size: 20px !important;
    color: ${theme.forms.input.textSecondary} !important;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
    display: none !important;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 7px;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: ${theme.forms.input.bg};
  }
  .react-calendar__tile--active {
    abbr {
      color: ${theme.forms.input.textSecondary};
    }
  }
`;

export const DatePickerWrapper = styled.div`
  ${(props) => datePickerStyles(props.theme)}
  ${(props) => calendarStyles(props.theme)}
`;
