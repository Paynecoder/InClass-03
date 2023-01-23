import styles from "../styles/About.module.css";
import { useState } from "react";
import data from "../../data/employees.json"
import Text from "../../components/Text/index";

export default function About() {
  const [information, setInformation] = useState([...data]);

    return(
      <div className={styles.main}>
        {information && information.map((info, index) => {
          if (info.employer.toLowerCase() === "google") {
            return <Text key={index} employee={info.employee} />;
            
          }
        })}
      </div>
    )

    

}