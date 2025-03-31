import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import Main from "@/app/components/main";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        maxWidth: "80rem",
        marginInline: "auto",
        paddingBlock: "2rem",
      }}
    >
      <Header />
      <Main />
    </div>
  );
}
