import { Link } from "react-router-dom";
import styled from "styled-components";

const SubNavbar = ({ item }: any) => {
  return (
    <>
      <SidebarLink onClick={item.onclick}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SubNavbar;

const SidebarLink = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    background: #252831;
    border-left: 4px solid grey;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
