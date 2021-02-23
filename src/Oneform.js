import React, { Component } from 'react'

 class Oneform extends Component {
     state={
         msg:''
     }
     onChangeevent= (event) => this.setState({msg:event.target.value})
    render() {
        return (
            <div>
                <form>
                    <table>
                    <div>
                            <thead>
                                <th></th>
                                <tr><td></td></tr>
                            </thead>
                            </div>
                            <div><tbody>
                                <tr><td>
                                    <div><label></label>
                                    <input type='text' value={this.state.msg} onChange={this.onChangeevent}/>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr><td><textarea></textarea></td></tr>
                                    <tr><td><button>submit</button></td></tr>
                                </tbody>
                            </div>
                    </table>
                        
                    
                </form>
                
            </div>
        )
    }
}

export default Oneform
