import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  padding-inline: 10rem;
  padding-block: 1.18rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.label`
  width: 22rem;

  padding-inline: 1rem;
  padding-block: 0.53rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.colors.background};

  border-radius: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;

  background: none;
  border: none;

  font-size: 14px;
  color: ${(props) => props.theme.colors["text-dark"]};

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  color: ${(props) => props.theme.colors.gray};
`;

export const CartContainer = styled.div`
  margin-left: 1.7rem;
  position: relative;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const CartButton = styled.button``;

export const CartNumber = styled.span`
  width: 20px;
  height: 20px;

  border-radius: 100%;

  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};

  position: absolute;
  right: -7px;
  bottom: -5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
`;
