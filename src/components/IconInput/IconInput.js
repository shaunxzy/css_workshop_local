import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        "--font-size": "14px",
        "--font-weight": "700",
        "--font-color": COLORS.gray700,
        "--input-border": "1px solid black",
        "--place-holderColor": COLORS.gray500,
        "--place-holderWeight": 400,
        "iconSize": 14,
        "iconStroke": 1,
    },
    large: {
        "--font-size": "18px",
        "--font-weight": "700",
        "--font-color": COLORS.gray700,
        "--input-border": "2px solid black",
        "--place-holderColor": COLORS.gray500,
        "--place-holderWeight": 400,
        "iconSize": 18,
        "iconStroke": 2,
    }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

    const style = STYLES["large"]

  return(
      <Wrapper style={{...style, "--input-width": width+"px"}}>
          <VisuallyHidden label={label} />
          <InputWrapper placeholder={placeholder}/>
          <IconWrapper><Icon id={icon} size={style["iconSize"]}
                             strokeWidth={style["iconStroke"]}/></IconWrapper>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  font-size: var(--font-size);
  color: var(--font-color);

  &:hover{
    color: black;
  }
  
`

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  left: 0.1em;
  bottom: 0.3em;
`

const InputWrapper = styled.input`
  display: inline-block;
  position: relative;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: var(--input-border);
  width: var(--input-width);
  text-indent: 1em;
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: var(--font-color);
  
  &::placeholder{
    font-size: var(--font-size);
    color: var(--place-holderColor);
    font-weight: var(--place-holderWeight);
  }

  &:hover{
    color: black;
  }
  
`

export default IconInput;
