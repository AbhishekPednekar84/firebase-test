import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../utils/firebase";

export default function Home() {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "tokens");

    const q = query(collectionRef);

    onSnapshot(q, (querySnapshot) =>
      setToken(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
    );
  }, []);

  return (
    <div className={styles.container}>
      {token &&
        token.map((chain) => {
          return <p>{chain.chain}</p>;
        })}
    </div>
  );
}
