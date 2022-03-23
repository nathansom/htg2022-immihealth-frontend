import styles from '../styles/Home.module.css';
import Link from 'next/link';
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
        <h2>Login</h2>
        <FormControl>
            <Input id="email-address" type="email" placeholder="Email address" aria-describedby="email-helper-text" autoComplete="off" />
            <FormHelperText id="email-helper-text">Please enter your registered email address</FormHelperText>
            <Input id="password" placeholder="Password" aria-describedby="password-helper-text" autoComplete="off" />
            <FormHelperText id="password-helper-text">Please enter your valid password</FormHelperText>
        </FormControl>
        <Button 
                variant="contained"
                onClick={
                    () => router.push('/main')
                }
             >
          Login
        </Button>
        <Link href="/">Forgot my password</Link>
      </Layout>
    </>
  )
}
