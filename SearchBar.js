import React from 'react';
import { Paper, TextField } from '@material-ui/core'


class SearchBar extends React.Component {


    state = {
        searchTerm: ''
    }

    handleChange = e => {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm)
    }

    render() {

        return (
            <Paper elevation={6} style={{ padding: "18px", backgroundColor:"#70f5ff" }}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Search..."
                        onChange={this.handleChange}
                        value={this.state.searchTerm}>
                    </TextField>
                </form>
            </Paper>
        )

    }

}


export default SearchBar;