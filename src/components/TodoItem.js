import React from 'react';
import { observer } from "mobx-react";

@observer
class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <form>
                                <input type="checkbox" checked={this.props.todo.isDone} onClick={() => this.props.todo.isDone = !this.props.todo.isDone}/>
                            </form>
                        </td>
                        <td>
                            {this.props.todo.title}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TodoItem;