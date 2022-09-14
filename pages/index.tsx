import { useState } from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box, Button, TextField, Stack, Select, MenuItem } from '@mui/material';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

const rustFunc = async (a: Number, b: Number, operation: String) => {
  if (operation === "add") {
  return (await import("../add.wasm")).add(a, b)
  } else if (operation === "subtract") {
    return (await import("../add.wasm")).subtract(a, b)
  } else if (operation === "multiply") {
    return (await import("../add.wasm")).multiply(a, b)
  } else if (operation === "divide") {
    return (await import("../add.wasm")).divide(a, b)
  }
}


const Home: NextPage = () => {
  const operations = ["add", "subtract", "multiply", "divide"]
  const [operation, setOperation] = useState(operations[0])
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js + WASM + TypeScript
        </Typography>
        <Stack spacing={2}>
          <Select label={"Operation"} value={operation} onChange={(e) => setOperation(e.target.value)}>
            {operations.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </Select>
          <TextField label={"X"} type={"number"} value={a} onChange={(e) => setA(Number(e.target.value))}/>
          <TextField label={"Y"} type={"number"} value={b} onChange={(e) => setB(Number(e.target.value))}/>
          <Button variant={"outlined"} onClick={async () => setResult(await rustFunc(a, b, operation))}>Compute</Button>
          <Typography variant="h4" component="h1" gutterBottom> RESULT: {result}</Typography>
        </Stack>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
