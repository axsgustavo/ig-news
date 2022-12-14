import Head from "next/head";

import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";

import { SubscribeButton } from "../components/SubscribeButton";

import styled from "../styles/home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styled.contentContainer}>
        <section className={styled.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News abount <br />the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/avatar.svg"
          alt="Girl coding"
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1LYYGRI3BY9j2nQRF7xnTxyw");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
