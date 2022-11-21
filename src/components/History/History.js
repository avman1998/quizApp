import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../AuthContext";
export default function History() {
  const { user } = useAuth();
  return <>summary</>;
}
