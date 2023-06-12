import { MagnifyingGlass } from "phosphor-react";
import * as C from "./styles";
import CartIcon from "../Icons/Cart";
import LogoIcon from "../Icons/Logo";

export const Header = () => {
  const amountCart = 2;

  return (
    <C.Container>
      <LogoIcon />
      <div style={{ display: "flex", alignItems: "center" }}>
        <C.Search htmlFor="">
          <C.SearchInput
            type="text"
            placeholder="Procurando por algo específico?"
          />
          <C.SearchButton>
            <MagnifyingGlass size={24} />
          </C.SearchButton>
        </C.Search>
        <C.CartContainer>
          <C.CartButton>
            <CartIcon />
          </C.CartButton>
          {amountCart > 0 && <C.CartNumber>{amountCart}</C.CartNumber>}
        </C.CartContainer>
      </div>
    </C.Container>
  );
};
