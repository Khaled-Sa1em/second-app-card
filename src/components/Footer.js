import "../css/components/Footer.css";

export default function Footer (){
    return(
        <footer className="footer">
            <ul className="list social--links">
                <li className="social-item"><a href='#'> <i class="fa-brands fa-square-facebook"></i> </a></li>
                <li className="social-item"><a href='#'> <i class="fa-brands fa-square-twitter"></i> </a></li>
                <li className="social-item"><a href='#'> <i class="fa-brands fa-square-instagram"></i> </a></li>
                <li className="social-item"><a href='#'> <i class="fa-brands fa-square-github"></i> </a></li>
            </ul>
        </footer>
    )
}