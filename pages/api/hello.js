// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../utils/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export default (req, res) => {
  const collectionRef = collection(db, "tokens");
  const q = query(collectionRef);

  onSnapshot(q, (querySnapshot) => {
    querySnapshot.docs.map((doc) => res.status(200).json([{ ...doc.data() }]));
  });
};
