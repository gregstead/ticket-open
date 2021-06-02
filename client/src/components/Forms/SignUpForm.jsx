// import React from "react";
// import RaisedButton from "material-ui/RaisedButton";
// import FlatButton from "material-ui/FlatButton"
// import TextField from "material-ui/TextField";
// import PasswordStr from "./PasswordStr";
// import API from "../../utils/API";

// function signUpForm({ history, onSubmit, onChange, errors, user, score, btnText, type, pwMask, onPwChange }) {
//     return (
//         <div className="loginBox">
//             <h1>Sign Up</h1>
//             {errors.message && <p style={{ color: "red" }}>Hello</p>}
//             <form onSubmit={onSubmit}>
//                 <TextField name="firstName" floatingLabelText="first name" value="user.firstName" onChange={onChange} errorText={errors.firstName} />
//                 <TextField name="lastName" floatingLabelText="last name" value="user.lastName" onChange={onChange} errorText={errors.lastName} />
//                 <TextField name="email" floatingLabelText="email" value="user.email" onChange={onChange} errorText={errors.email} />
//                 <TextField name="password" floatingLabelText="password" value="user.password" onChange={onChange} errorText={errors.password} />
//                 <div className="pwStrongRow">
//                     {score >= 1 && (
//                         <div>
//                             <PasswordStr score={score} />
//                             <FlatButton className="pwShowHideBtn" label={btnText} onClick={pwMask} style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }} />

//                         </div>
//                     )}</div>
//                 <TextField name="pwconfirm" floatingLabelText="confirm password" value="user.pwconfirm" onChange={onChange} errorText={errors.pwconfirm} />
//                 <br />
//                 <RaisedButton
//                     className="signUpSubmit"
//                     primary={true}
//                     type="submit"
//                     label="submit"
//                 />
//             </form>
//             <p>Already have an account? <br/> 
//             <a href="/">Log in here</a></p>
//         </div>
//     )
// }

// export default signUpForm;