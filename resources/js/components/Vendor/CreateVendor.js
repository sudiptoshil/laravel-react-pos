import React, { Component } from "react";
class CreateVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            name: "",
            email: "",
            password: "",
            accounts_no: ""
        };
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    Createvendor = async event => {
        event.preventDefault();

        const res = await axios.post("/dbBackup/api/save-vendor", this.state);
        this.setState({
            name: "",
            email: "",
            password: "",
            accounts_no: ""
        });
        if (res.data.status === 200) {
            this.props.history.push("/dbBackup/manage-vendor");
        }
    };

    render() {
        return (
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h4 className="page-title"></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <h4 className="card-title">Create Vendor</h4>
                            <form
                                className="form-horizontal"
                                onSubmit={this.Createvendor}
                            >
                                <div className="form-group">
                                    <label className="control-label col-lg-2">
                                        Name
                                    </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Title"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleInput}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-lg-2">
                                        Email
                                    </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleInput}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-lg-2">
                                        Password
                                    </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleInput}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-lg-2">
                                        Account No
                                    </label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Accounts No"
                                                name="accounts_no"
                                                value={this.state.accounts_no}
                                                onChange={this.handleInput}
                                            ></input>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-toggle="modal"
                                                data-target="#exampleModalCenter"
                                            >
                                                {" "}
                                                <i
                                                    class="fa fa-download"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label col-lg-2"></label>
                                    <div className="col-md-10">
                                        <div className="input-group">
                                            <button className="btn btn-primary text-center">
                                                save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateVendor;
