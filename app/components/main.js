import Card from "../../app/components/card";
import Styles from "@/app/components/styles/main.module.css";

export default function main(props) {
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
  return (
    <div className={Styles.grid}>
      {pasteis.map((pastel) => (
        <Card
          key={pastel.id}
          nome={pastel.nome}
          imagem={pastel.imagem}
          preco={pastel.preco.toFixed(2)}
          estoque={pastel.estoque}
        ></Card>
      ))}
    </div>
  );
}
