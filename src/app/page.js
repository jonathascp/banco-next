"use client";
import { useState } from "react";
import CardConta from "./Components/Card_Conta";
import { useSaldo } from "./Context/SaldoContext";

export default function Home() {

  const {saldo} = useSaldo();
  return (
    <>
      <CardConta 
      value={saldo.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
      />
    </>
  );
}
