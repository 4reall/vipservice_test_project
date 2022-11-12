import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Input from "src/components/Input";
import Button from "src/components/Button";
import DatePicker from "src/components/DatePicker";

const Home: NextPage = () => {
  return (
    <>
      <Input type="date" id="input" label="Откуда" placeholder="Город вылета" />
      <Button disabled text="найти" />
      <DatePicker />
    </>
  );
};

export default Home;
