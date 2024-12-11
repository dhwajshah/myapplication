/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './LoginPage.module.scss';
import combinedLogos from '../../assets/combined_logos.png';
import googleLogo from '../../assets/google-logo.png'; // Import the Google logo image

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.loginBox}>
          {/* Google Logo */}
          <img src={googleLogo} alt="Google Logo" className={styles.googleLogo} />
          
          <h1 className={styles.title}>Masuk ke akun kamu</h1>
          <p className={styles.description}>
            Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu
            cita-citakan sejak dalam embrio!
          </p>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Email"
            />

            {/* Kata Sandi Label and Forgot Password */}
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
            />
            <div className={styles.options}>
              <label>
                <input type="checkbox" />
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
        <h2 className={styles.siteName}>NAMANYAJUGABELAJAR.IO</h2>
        <p className={styles.infoText}>
          Belajar secara online semakin mudah –<br />
          tetep belajar walaupun pake kuota dari <br />
          Kemendikbud hehe~
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
