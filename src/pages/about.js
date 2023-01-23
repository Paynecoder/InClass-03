import styles from "../styles/About.module.css";
import { useState } from "react";
import data from "../../data/employees.json";
import Text from "../../components/Text/index";
import Link from "next/link";

export default function About() {
  const [information, setInformation] = useState([...data]);

  return (
    <div className={styles.main}>
      <Link href="./index.js" className={styles.return}>
        Home
      </Link>
      <h1 className={styles.maintitle}>Employees</h1>
      <div className={styles.employee}>
        {information &&
          information.map((info, index) => {
            if (info.employer.toLowerCase() === "google") {
              return <Text key={index} employee={info.employee} />;
            }
          })}
      </div>
    </div>
  );
}
