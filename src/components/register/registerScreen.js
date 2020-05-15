// import React from "react"

// class Input extends React.Component {
//   render() {
//     return (
//     <div>
//       <input
//         type={this.props.type}
//         id={this.props.id}
//         className="form-control"
//         placeholder={this.props.text}
//         value={this.props.value}
//         onChange={this.props.onChange}
//         required=""
//         autofocus=""
//         style={{}}
//       />
//     </div>
//     )
//   }
// }

// class Image extends React.Component {
//   render() {
//     return (
//       <div>
//         <img
//           className="mb-4"
//           src={this.props.src}
//           alt=""
//           width="72"
//           height="72"
//         />
//       </div>
//     )
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="h3 mb-3 font-weight-normal">{this.props.text}</h1>
//       </div>
//     )
//   }
// }

// class Button extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           className="btn btn-lg btn-primary btn-block"
//           type="button"
//           onClick={this.props.onClick}
//         >
//           {this.props.placeholder}
//         </button>
//       </div>
//     )
//   }
// }

// class RegisterScreen extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       email: "",
//       password: "",
//       signIn: false,
//       reload: true,
//     }
//   }

//   onChangeEmail = event => {
//     console.log(event.target.value)
//     this.setState({
//       email: event.target.value,
//     })
//   }

//   onChangePassWord = event => {
//     console.log(event.target.value)
//     this.setState({
//       password: event.target.value,
//     })
//   }

//   onClick = event => {
//     // event.preventdefault();
//     console.log(event.target)
//     this.setState({
//       signIn: true,
//     })

//     if (this.state.email !== "" && this.state.password !== "") {
//       this.setState({
//         reload: false,
//       })

//       setTimeout(() => {
//         this.setState({
//           reload: true,
//         })
//       }, 5000)
//     }
//   }

//   render() {
//     const { email, password, signIn, reload } = this.state
//     const altertStyle = {
//       color: "red",
//     }
//     return (
//       <React.Fragment>
//         {reload ? (
//           <form className="form-signin">
//             <Image src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" />
//             <Header text="Please sign in" />
//             <Input
//               id="inputEmail"
//               text="Room name"
//               value={email}
//               onChange={this.onChangeEmail}
//             />
//             <Input
//               id="inputPassword"
//               text="Your name"
//               value={password}
//               onChange={this.onChangePassWord}
//             />
//             <Input
//               id="inputPassword"
//               text="Password (optional)"
//               value={password}
//               onChange={this.onChangePassWord}
//             />
//             <Button placeholder="Sign in" onClick={this.onClick} />

//             {(email === "" || password === "") && signIn ? (
//               <h5 color="red" style={altertStyle}>
//                 Email và password không được bỏ trống
//               </h5>
//             ) : null}
//             <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
//           </form>
//         ) : (
//           <div className="form-signin">
//             <div className="loader" />
//             <hr />
//             <h3 className="h3 mb-3 font-weight-normal">
//               Login with <b>{email}</b>
//             </h3>
//             <h5>Password: {password}</h5>
//             <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
//           </div>
//         )}
//       </React.Fragment>
//     )
//   }
// }

// export default RegisterScreen

import React, { useState } from "react"

import { Jutsu } from "react-jutsu"

const RegisterScreen = () => {
  const [room, setRoom] = useState("")
  const [name, setName] = useState("")
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState("")

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu
      roomName={room}
      displayName={name}
      password={password}
      loadingComponent={<p>loading ...</p>}
    />
  ) : (
    <form>
      <input
        id="room"
        type="text"
        placeholder="Room"
        value={room}
        onChange={e => setRoom(e.target.value)}
      />
      <input
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        id="password"
        type="text"
        placeholder="Password (optional)"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleClick} type="submit">
        Start / Join
      </button>
    </form>
  )
}

export default RegisterScreen
