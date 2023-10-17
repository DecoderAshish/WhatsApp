import Head from "next/head";
import Image from "next/image";
import { auth, googleProvider, githubProvider } from "../firebase";

const Login = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };

  return (
    <section className="container grid mx-auto place-items-center mt-10">
      <Head>
        <title>Login | Whatsapp Clone</title>
        <link rel="icon" href="/WhatsApp_Logo.webp" />
      </Head>

      <div className="login-container flex flex-col">
        <Image
          src="/WhatsApp_Logo.webp"
          alt="Whatsapp Logo"
          className="login-container__logo"
          width={150}
          height={170}
        />
        <button
          onClick={signInWithGoogle}
          className="btn btn-primary mt-5 login__container__button"
        >
          Login with Google
        </button>
      </div>
      <div className="updates-and-acknowledgement grid text-center w-full max-w-sm mt-8">
            WhatsApp clone made by me -{" "}
            <a
              href="https://decoderashish.me"
              className="link link-primary dark:link-secondary link-hover"
              target="_blank"
            >
              @DecoderAshish
            </a>
            .
      </div>
      <p className="fixed bottom-0 left-0 m-1">
        &copy; {new Date().getFullYear()} - Decoder Ashish
      </p>
    </section>
  );
};

export default Login;
