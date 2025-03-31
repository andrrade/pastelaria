import Styles from "@/app/components/styles/header.module.css";
export default function header(props) {
  return (
    <div className={Styles.header}>
      <h1>Pastelaria do Zé</h1>
      <img src="/assets/logo.png" alt=""></img>
    </div>
  );
}
