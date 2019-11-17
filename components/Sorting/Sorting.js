import React, {Component} from 'react';

class Sorting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'username',
        };
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }
    handleOptionChange(e) {
        this.setState({
            selectedOption: e.target.value
        });
    }
    render() {
        const {setSort, setSortDirection} = this.props;
        return (
            <div>
                <div>
                    <span>Sort by:</span>
                    <div className="btn-group btn-group-toggle ml-3" onChange={setSort} data-toggle="buttons">
                        <input type="radio" name="options" id="option1" autoComplete="off" value="username"
                               checked={this.state.selectedOption === "username"}
                               onChange={this.handleOptionChange}
                               className="ml-3"

                        /> Username
                        <input type="radio" name="options" id="option2" autoComplete="off" value="email"
                               checked={this.state.selectedOption === "email"}
                               className="ml-3"
                               onChange={this.handleOptionChange}
                        /> Email
                        <input type="radio" name="options" id="option3" autoComplete="off" value='status'
                               checked={this.state.selectedOption === 'status'}
                               className="ml-3"
                               onChange={this.handleOptionChange}
                        /> Status
                    </div>
                    <div className="d-flex mb-4">
                        <span className="">Order:</span>
                        <div className="form-check ml-3">
                            <input
                                onChange={setSortDirection}
                                className="form-check-input"
                                type="checkbox"
                                id="reverse"
                            />
                            <label className="form-check-label" htmlFor="reverse">
                                Reverse
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default Sorting;
