/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    '--bar-background': COLORS.transparentGray15,
    '--bar-content': COLORS.primary,
    '--barWrapper-width': '370px',
    '--barWrapper-height': '24px',
    '--barContent-height': '16px',
    '--bar-margin': '4px 4px'
  },

  medium: {
    '--bar-background': COLORS.transparentGray15,
    '--bar-content': COLORS.primary,
    '--barWrapper-width': '370px',
    '--barWrapper-height': '12px',
    '--barContent-height': '12px',
    '--bar-margin': '0px 0px'
  },

  small: {
    '--bar-background': COLORS.transparentGray15,
    '--bar-content': COLORS.primary,
    '--barWrapper-width': '370px',
    '--barWrapper-height': '8px',
    '--barContent-height': '8px',
    '--bar-margin': '0px 0px'
  }
}

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size]

  return <ProgressBarWrapper>
    <StrongWrapper><strong>{value}%</strong></StrongWrapper>
    <BarWrapper style={style}>
      <BarContent size={value + "%"} />
    </BarWrapper>
  </ProgressBarWrapper>;
};

const ProgressBarWrapper = styled.div`
  height: 24px;
  width: 100%;
  position: relative;
`

const StrongWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.25em 0;
  height: var(--barWrapper-height);
  width: fit-content;
`

const BarWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 56px;
  margin: auto;
  width: var(--barWrapper-width);
  height: var(--barWrapper-height);
  border-radius: 8px;
  background-color: var(--bar-background);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`

const BarContent = styled.div`
  display: block;
  margin: var(--bar-margin);
  background-color: var(--bar-content);
  height: var(--barContent-height);
  width: ${props => props.size};
  border-radius: 4px 0px 0px 4px;
`

export default ProgressBar;
