import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSeats } from "../../components/axios";
getSeats;

export default function SeatsPage() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    getSeats(idSessao, setSeats);
  }, []);
  console.log(seats);
  return (
    <PageContainer>
      Selecione o(s) assento(s)
      {seats.length === 0 && <div>"loading"</div>}
      {seats.length !== 0 && (
        <>
          <SeatsContainer>
            {seats.seats.map((seat) => {
              return (
                <SeatItem data-test="seat" key={seat.id} bg={seat.isAvailable}>
                  {seat.name}
                </SeatItem>
              );
            })}
          </SeatsContainer>

          <CaptionContainer>
            <CaptionItem>
              <CaptionCircle />
              Selecionado
            </CaptionItem>
            <CaptionItem>
              <CaptionCircle />
              Disponível
            </CaptionItem>
            <CaptionItem>
              <CaptionCircle />
              Indisponível
            </CaptionItem>
          </CaptionContainer>

          <FormContainer>
            Nome do Comprador:
            <input data-test="client-name" placeholder="Digite seu nome..." />
            CPF do Comprador:
            <input data-test="client-cpf" placeholder="Digite seu CPF..." />
            <button data-test="book-seat-btn">Reservar Assento(s)</button>
          </FormContainer>

          <FooterContainer data-test="footer">
            <div>
              <img src={seats.movie.posterURL} alt={seats.movie.title} />
            </div>
            <div>
              <p>{seats.movie.title}</p>
              <p>
                {seats.day.weekday} - {seats.name}
              </p>
            </div>
          </FooterContainer>
        </>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`;
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border: 1px solid blue; // Essa cor deve mudar
  background-color: lightblue; // Essa cor deve mudar
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
const SeatItem = styled.div`
  border: 1px solid ${({bg})=> bg ? "#7B8B99": " #F7C52B"}; // Essa cor deve mudar
  background-color: ${({bg})=> bg ? "#C3CFD9": " #FBE192"};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
