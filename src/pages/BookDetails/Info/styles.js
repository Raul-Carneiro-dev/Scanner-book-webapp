import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .go-back {
    position: fixed;
    top: 15px;
    left: 15px;
  }

  .name {
    color: #000;
    font-size: 26px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 22px;
    }
  }

  .book-rating {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: -1.5rem;
  }

  .price {
    font-size: 16px;
    text-align: center;

    .discount {
      color: #7f8c8d;
      text-decoration: line-through;
    }
  }

`;

export const Cover = styled.img`
  height: 220px;
  margin: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 150px
  }
`;