import React, { Component } from "react";
import Form from "../components/Form/index";
import Table from "../components/Table/index";
import API from "../utils/API";

class Directory extends Component {
  state = {
    customerAlpha: [],
    customerZeta: [],
    search: "",
  };

  componentDidMount() {
    API.search().then((res) => {
      this.setState({
        customerAlpha: res.data.results,
        customerZeta: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });

    const empFilter = this.state.customerZeta.filter((customer) => {
      return (
        customer.name.first.toLowerCase().includes(value.toLowerCase()) ||
        customer.name.last.toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({ customerAlpha: empFilter });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const empSearch = event.target.value;
    this.setState({
      search: empSearch,
    });
  };

  handleToggle = () => {
    const empSort = this.state.customerAlpha.sort((a, b) => {
      return a.name.first.localeCompare(b.name.first);
    });

    this.setState({
      customerAlpha: empSort,
    });
  };

  render() {
    return (
      <div>
        <hr></hr>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
        />
        <Table
          customerList={this.state.customerAlpha}
          search={this.handleSearch}
          handleToggle={this.handleToggle}
        />
      </div>
    );
  }
}
export default Directory;
