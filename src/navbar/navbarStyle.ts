import styled from "styled-components";

const NavbarStyle = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.19);
  .largeView {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    align-items: center;
    height: 100%;
    @media (max-width: 600px) {
      justify-content: center;
    }
    .options {
      display: flex;
      width: 70%;
      justify-content: space-around;
      @media (max-width: 600px) {
        display: none;
      }
      .option {
        cursor: pointer;
        color: #cccccc;
      }
    }
  }
  .icon {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 55, 131, 1);
  }
  .sidebarIcon {
    display: none;
    @media (max-width: 600px) {
      display: block;
      position: absolute;
      left: 20px;
      top: 13px;
      cursor: pointer;
    }
  }
`;
export default NavbarStyle;
