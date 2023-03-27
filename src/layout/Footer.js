import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2023 — Designed &amp; Developed by{" "}
              <a
                href="https://www.linkedin.com/in/kraniket901/"
                target="_blank"
                rel="noreferrer"
              >
                Aniket{" "}
              </a>
              &{" "}
              <a
                href="https://www.linkedin.com/in/harshdew16/"
                target="_blank"
                rel="noreferrer"
              >
                Harsh
              </a>
            </p>
          </div>
          <div className="right_part">
            {/* <ul>
              <li>
                <Link href="/policy">
                  <a className="creative_link">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="creative_link">Cookies</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <a className="creative_link">Terms &amp; Conditions</a>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
