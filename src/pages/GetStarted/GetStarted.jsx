import { Component } from "react";
import { Builder, Footer, Header } from "../../containers";
import { Navbar } from "../../components";

class GetStarted extends Component {
    state = {  } 
    render() { 
        return (
                <div className="GetStarted">
                    <Header/>
                    <Builder/>
                    <Footer />
                </div>

        );
    }
}
 
export default GetStarted;