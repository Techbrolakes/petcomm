import {
  Box,
  Heading,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import Services from "./components/Services";
import MainServices from "./components/MainServices";

export default function Home() {
  const [nav, setnav] = useState(false);

  const toggleNavbar = () => {
    setnav(!nav);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="#FFFFFF">
        <Stack mb="1%">
          <Flex
            bgImage="/ground.png"
            bgSize="90px"
            bgPos="bottom left"
            bgRepeat="no-repeat"
            justify={{
              base: "space-between",
              lg: "space-around",
            }}
            p="1%"
            align="center"
            shadow={"sm"}
          >
            <Box>
              <Heading>Petcomm</Heading>
            </Box>

            <Box display={["none", "none", "block", "block"]}>
              <ul className={styles.links}>
                <li className={styles.exampleClass}>Home</li>
                <li className={styles.exampleClass}>Blog</li>
                <li className={styles.exampleClass}>Services</li>
                <li className={styles.exampleClass}>Projects</li>
                <li className={styles.exampleClass}>Community</li>
              </ul>
            </Box>

            <Box display={["none", "none", "block", "block"]}>
              <Button colorScheme={"blue"}>Contact Us</Button>
            </Box>
            <Box display={["block", "block", "none", "none"]}>
              {nav ? (
                <FaTimes size={"32px"} onClick={toggleNavbar} />
              ) : (
                <FaBars size={"32px"} onClick={toggleNavbar} />
              )}
            </Box>
          </Flex>
        </Stack>

        <Box>
          {/* Navbar Mobile*/}
          {nav ? (
            <ul className={styles.links}>
              <li className={styles.exampleClass}>Home</li>
              <li className={styles.exampleClass}>Home</li>
              <li className={styles.exampleClass}>Home</li>
              <li className={styles.exampleClass}>Home</li>
              <li className={styles.exampleClass}>Home</li>
              <li className={styles.exampleClass}>Home</li>
            </ul>
          ) : (
            <Box>
              <Box px="5%">
                <Hero />
                <Desc />
              </Box>

              <Services />
              <MainServices />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
