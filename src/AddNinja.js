import React, {Component} from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState( {
            [e.target.id] : e.target.value
        })
        /* console.log('handlChange',this.state); */
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.addNinja(this.state);
        /* console.log('handlesubmit',this.state); */
        
    }
    render() {
        return(
            <div className="add-ninja">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="name">Age</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="name">Belt</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja