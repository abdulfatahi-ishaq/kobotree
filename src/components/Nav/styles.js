import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(245, 245, 245, 1);
  padding: 20px 0;
`;

export const ImageWrapper = styled.div`
  line-height: 50px;
`;

export const CenterLinks = styled.span`
  margin: 0 20px;
  color: rgba(0, 0, 0, 1);
  line-height: 50px;
  font-size: 1rem;
`;

export const PlainButton = styled.button`
  outline: none;
  border: none;
  color: rgba(0, 78, 240, 1);
  padding: 10px 30px;
  margin-right: 20px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    border: 2px solid rgba(0, 78, 240, 1);
    background-color: rgba(0, 78, 240, 0.2);
  }
`;

export const FilledButton = styled.button`
  outline: none;
  border: 0;
  color: #fff;
  border-radius: 4px;
  padding: 10px 30px;
  background-color: rgba(0, 78, 240, 1);
  transition: all 0.3s ease-in-out;
  border: 2px solid rgba(0, 78, 240, 1);

  &:hover {
    border: 2px solid rgba(0, 78, 240, 1);
    background-color: transparent;
    color: rgba(0, 78, 240, 1);
    cursor: pointer;
  }
`;
