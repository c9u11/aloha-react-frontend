import { styled } from "styled-components";
import { List } from "../../components/Event";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 0px 30px;
  gap: 10px;
  background: #fafafa;
  max-width: 576px;
  margin: 0 auto;
`;

export const StretchedList = styled(List)`
  width: 100%;
  padding: 12px 30px;
  flex: 1;
`;
