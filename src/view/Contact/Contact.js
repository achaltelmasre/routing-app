import "./Contact.css";
import Navbar from "../../component/Navbor/Navbar";
import Button from "../../component/Button/Button";

export default function Contact ()
{
    return(
       <>
        <Navbar/>
        <div className="cont">
        <h1> Contact Me</h1>
            <p>Mail</p>
            <p>Gitub</p>
            <p>Linkdin</p>
            <p>Call</p>

        </div>
        <Button text='Contact us page'/>
        </>
    )
}