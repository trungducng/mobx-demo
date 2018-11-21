import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class AddForm extends React.Component {
    formValue = {};

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Add new item here' onChange={this.handleFormValue} />
                    <input type='submit' value='ADD'/>
                </form>
            </div>
        );
    }

    @action
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.todos.push(this.formValue);
    }

    handleFormValue = (e) => {
        e.preventDefault();
        this.formValue = {
            title: e.target.value,
            isDone: false
        } 
    }
}

export default AddForm;