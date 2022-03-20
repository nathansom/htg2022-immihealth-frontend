import styles from '../styles/Home.module.css';
import Link from 'next/Link';
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import Button from '@mui/material/Button';

export default function Home() {
  const router = useRouter();
 
  return (
    <>
      <Layout>
      <h1 className={styles.title, styles.d_none}>Welcome to ImmiHealth | Healthcare Information Management Platform to Enhance the Life of Immigrants and Refugees</h1>
        <p>Are you new here?</p>
        <Button 
          variant="contained"
          onClick={
            () => router.push('/register')
          }
        >
          Register
        </Button>
        <p style={{marginTop:"5vh"}}>Already have an account?</p>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={
            () => router.push('/login')
          }
        >Login</Button>
        <Link href="/">Forgot my password</Link>
      </Layout>
    </>
  )
}