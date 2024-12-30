import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './LoginPage.module.scss';
import combinedLogos from '../../assets/combined_logos.png';
import googleLogo from '../../assets/google-logo.png';

interface LoginFormInputs {
  email : string;
  password : string;
  rememberMe? : boolean;
}

const LoginPage = () => {
  const { register, handleSubmit, formState : { errors } } = useForm<LoginFormInputs>();

  //onsubmit function 
  const onSubmit : SubmitHandler<LoginFormInputs> = (data) => {
    alert(`Form Submitted: ${JSON.stringify(data)}`);
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.loginBox}>
          {/* Google Icon */}
          <img src={googleLogo} alt="Google Logo" className={styles.googleIcon} />
          <h1 className={styles.title}>Masuk ke akun kamu</h1>
          <p className={styles.description}>
            Belajir gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
            cita-citakan sejak dalam embrio!
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email?.message && (
              <p className={styles.error}>{String(errors.email.message)}</p>
            )}
  
            <div className={styles.passwordWrapper}>
              <label className={styles.label} htmlFor="password">
                Kata Sandi
              </label>
              <a href="#" className={styles.forgotPassword}>
                Lupa Kata Sandi?
              </a>
            </div>
            <input
              className={styles.input}
              type="password"
              id="password"
              placeholder="Kata Sandi"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password?.message && (
              <p className={styles.error}>{String(errors.password.message)}</p>
            )}

            <div className={styles.options}>
              <label>
                <input type="checkbox" {...register("rememberMe")} />
                <span className={styles.rememberMe}>Ingat saya</span>
              </label>
            </div>
            <button type="submit" className={styles.loginButton}>
            Masuk
            </button>
          </form>
          <p className={styles.registerText}>
            Belum punya akun?{" "}
            <a href="#" className={styles.registerLink}>
              Daftar sekarang, gratis!
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <img src={combinedLogos} alt="Logos" className={styles.logoImage} />
        <h2 className={styles.siteName}>NAMANYAJUGABELAJAR.Io</h2>
        <p className={styles.infoText}>
          Belajar secara online semakih mudha -<br />
          tetep belajar walaupun pake kuota dari <br />
          Kemendikbud hehe~
        </p>
      </div>
    </div>
  );
};

export default LoginPage;