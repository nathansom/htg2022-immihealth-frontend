import styles from '../styles/Home.module.css';
import Link from 'next/Link';
import { useRouter } from 'next/router'

import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

import Layout from '../components/Layout'
import Button from '@mui/material/Button';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Layout>
      <h1 className={`${styles.title} ${styles.d_none}`}>Welcome to ImmiHealth</h1>
        <p>Login</p>
        <FormControl>
            <InputLabel htmlFor="email-address">Email address</InputLabel>
            <Input id="email-address" type="email" placeholder="Email address" aria-describedby="email-helper-text" autoComplete="off" />
            <FormHelperText id="email-helper-text">Please enter your registered email address</FormHelperText>
            <InputLabel htmlFor="password" type="password">Password</InputLabel>
            <Input id="password" placeholer="Password" aria-describedby="password-helper-text" autoComplete="off" />
            <FormHelperText id="password-helper-text">Please enter your valid password</FormHelperText>
        </FormControl>
        <Button 
                variant="contained"
                onClick={
                    () => router.push('/register')
                }
             >
          Login
        </Button>
        <Link href="/">Forgot my password</Link>
      </Layout>
    </>
  )
}
