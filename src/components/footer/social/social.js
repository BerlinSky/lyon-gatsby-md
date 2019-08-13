import { Link } from "gatsby"
import React from "react"
import socialStyles from "./social.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
                                         
library.add(fab)

const FooterLegal = () => (
  <section className={socialStyles.social}>
    <ul className={socialStyles.list}>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </Link>
      </li>
    </ul>
  </section>
)

export default FooterLegal
