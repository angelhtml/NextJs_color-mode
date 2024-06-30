"use client"
import {
  Switch,
  Box,
  Button,
  Container,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "../../components/navbar";
import { useState } from "react";
import Card from "../../components/card";

export default function Home() {
  const [colordata, setColorData] = useState()

  const ColorData = (data) => {
    //console.log(data)
    setColorData(data)
  }
  

  return (
    <div style={{backgroundColor:colordata?.primery?.bg, height:"100vh"}}>
    <Navbar ColorData={(i) => ColorData(i)}/>
    <center>
    <Card ColorData={colordata}/>
    </center>
    
    </div>
  );
}