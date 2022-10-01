import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
</style>

const SIZES = {
  sm: css`
    --button-font-size: 0.875rem;
    --button-padding: 4px 8px;
    --button-radius: 20px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `
};

const VARIANTS = {
  default_fill: css`
    --button-color: #ffffff;
    --button-bg-color: #4646F2;
    --button-hover-color: #4646F0;
  `,
  default_empty: css`
    --button-color: #4646F2;
    --button-bg-color: #ffffff;
    --button-hover-bg-color: #eeeffe;
  `,
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #28a745;
    --button-hover-bg-color: #218838;
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `
};

function Button({ disabled, size, variant, children, pageId, score }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  const name = children;

  console.log(pageId);
  console.log(score);

  const navigate = useNavigate();
  const onMoving = (event) => {
    if(event.target.id == "시작하기"){
      console.log("시작하기 버튼 클릭")
      navigate(`/tastetestque`, {
        state: { pageId: pageId, score: score },
      });
    }
    else if(event.target.id == "다음"){
      console.log("다음 버튼 클릭")
      navigate(`/tastetestque`, {
        state: { pageId: pageId, score: score },
      });
    }
  };

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      id={name}
      onClick={onMoving}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: 1px solid;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: var(--button-font-size, 1rem);
  font-weight: bold;
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default Button;
