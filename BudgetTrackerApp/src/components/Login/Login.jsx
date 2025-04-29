import "./Login.css"

export function Login({ className, ...props }) {
  return (
    <div className={`login-form ${className || ""}`} {...props}>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Welcome back</h2>
          <p className="card-description">Login with your Facebook or Google account</p>
        </div>
        <div className="card-content">
          <form>
            <div className="form-container">
              <div className="social-buttons">
                <button type="button" className="social-button">
                    
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon facebook-icon">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Facebook
                </button>
                <button type="button" className="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon google-icon">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>
              <div className="divider">
                <span className="divider-text">Or continue with</span>
              </div>
              <div className="form-fields">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="form-field">
                  <div className="password-header">
                    <label htmlFor="password">Password</label>
                    <a href="#" className="forgot-password">
                      Forgot your password?
                    </a>
                  </div>
                  <input id="password" type="password" required />
                </div>
                <button type="submit" className="submit-button">
                  Login
                </button>
              </div>
              <div className="signup-prompt">
                Don&apos;t have an account?{" "}
                <a href="#" className="signup-link">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="terms-notice">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}

export default Login
