import React from "react";
import SignupFormDemo from "../components/signup-form-demo";


const LoginPage: React.FC = () => {

    return (
        <div className="login-page">
            {/* Foster comment or footer can go here */}
            <div className="mt-[15%]">
                <SignupFormDemo />
            </div>
        </div>
    );
};

export default LoginPage;
