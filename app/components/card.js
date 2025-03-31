import Styles from "@/app/components/styles/card.module.css";
export default function card({ nome, imagem, preco, estoque }) {
  const pasteis = [
    {
      id: 1,
      nome: "Pastel de Queijo",
      preco: 10.0,
      imagem: "/assets/pastel.png",
      estoque: true,
    },
    {
      id: 2,
      nome: "Pastel de Pizza",
      preco: 10.0,
      imagem: "/assets/pastel.png",
      estoque: false,
    },
    {
      id: 3,
      nome: "Pastel de Carne",
      preco: 10.0,
      imagem: "/assets/pastel.png",
      estoque: true,
    },
    {
      id: 4,
      nome: "Pastel de Brócolis",
      preco: 15.0,
      imagem: "/assets/pastel.png",
      estoque: false,
    },
    {
      id: 5,
      nome: "Pastel de Chocolate",
      preco: 15.0,
      imagem: "/assets/pastel.png",
      estoque: false,
    },
    {
      id: 6,
      nome: "Pastel de Frango com Catupiry",
      preco: 10.0,
      imagem: "/assets/pastel.png",
      estoque: true,
    },
    {
      id: 7,
      nome: "Pastel de Calabresa",
      preco: 10.0,
      imagem: "/assets/pastel.png",
      estoque: false,
    },
    {
      id: 8,
      nome: "Pastel de Carne e Queijo",
      preco: 10.0,
      imagem: "/assets/pastel.png",
      estoque: true,
    },
  ];
  const cardClass = estoque
    ? Styles.card
    : `${Styles.card} ${Styles.outOfStock}`;

  return (
    <div className={cardClass}>
      <h2>{nome}</h2>
      <img src={imagem} alt=""></img>
      <p>R${preco}</p>
    </div>
  );
}
