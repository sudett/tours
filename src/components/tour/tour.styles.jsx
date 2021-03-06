import styled from "styled-components";

export const TourContainer = styled.div`
  max-width: 60rem;
  min-height: 55rem;
  margin: 3rem auto;
  box-shadow: var(--light-shadow);
  background-color: #fff;
  border-radius: 4px;
`;

export const TourImage = styled.div`
  height: 35rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TourContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TourTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`;

export const TourCity = styled.h4`
  text-transform: capitalize;
  text-align: center;
  color: var(--clr-black);

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 1rem;
  }
`;

export const TourPrice = styled.h4`
  color: var(--clr-primary-5);
  background-color: var(--clr-primary-10);
  padding: 0.1rem 1rem;
  border-radius: 3px;
  font-size: 1.6rem;
`;

export const TourInfo = styled.div`
  color: var(--clr-grey-5);
  padding: 0 3rem;
  letter-spacing: 0;
`;

export const ButtonBlue = styled.button`
  border: none;
  outline: none;
  background: none;
  font-size: 1.6rem;
  color: var(--clr-primary-5);
  text-transform: capitalize;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Button = styled.button`
  display: block;
  margin: 2rem auto;
  color: var(--clr-red-dark);
  border: 1px solid var(--clr-red-dark);
  padding: 0.5rem 3rem;
  background: none;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
  letter-spacing: inherit;
  cursor: pointer;
`;
