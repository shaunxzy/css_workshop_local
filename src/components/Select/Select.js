import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';



const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const selectStyle = {
      '--select-color': COLORS.transparentGray15,
      '--text-color': COLORS.gray700
  }

  return (
      <Wrapper style={selectStyle}>
          <IconWrapper><Icon id={'chevron-down'} strokeWidth={2}/></IconWrapper>
          <SelectorWrapper value={value} onChange={onChange}>
              {children}
          </SelectorWrapper>
      </Wrapper>



  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: var(--text-color);
  
  &:hover {
    color: black;
  }
  
  &:focus {
    outline: 2px solid;
  }
`

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 10px;
  margin: auto;
  right: 16px;
`

const SelectorWrapper = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  
  position: relative;
  width: fit-content;
  height: 43px;
  padding: 12px 50px 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--select-color);
  color: inherit;
`

export default Select;
