import React, { Component } from 'react'

 class Form extends Component {
     state ={
         username:'',
         message:''
     }
     changeUsername = (event) => this.setState({username:event.target.value})
     changeMessage = (event) => this.setState({message:event.target.value})
     keepConstant = (event) => {
         alert(` is your all information correct or you want to change ${<br/>} ${this.state.username} ${this.state.message}` ) 
         event.preventDefault()}
         render() {
          const {username, message} = this.state
        return (
            <div>
                <form onSubmit={this.keepConstant}>form content <br />
                <table> <thead>
                    <th>New Form</th>
                    <tr><td>we are learning Form</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div>
                    <label>userName</label>
                    <input type='text' value={username} onChange={this.changeUsername} placeholder='username'/>
                 </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div>
                     <label>password</label>
                    <input type='password' /></div>
                        </td>
                    </tr>
            <tr>
                <td> 
                  <div>
                     <lable>Message</lable>
                     <textarea placeholder='message' value={message} onChange={this.changeMessage}></textarea>
                 </div>
                 </td>
                 </tr>
                 <tr>
                  <td>  
                     <div>
                     <label>Option</label>
                     <select>
                     <option type='react'>React</option>
                     <option type='angular'>Angular</option>
                     <option type='Nodejs'>Nodejs</option>
                     </select>
                 </div>
                 </td>
                 </tr>
                 <tr><td><div>
                     <button type='submit'>submit</button>
                 </div></td></tr>
                </tbody>
                </table>
                </form>
            </div>
            
        )
    }
}

export default Form
