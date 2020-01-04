import React from 'react'

class SearchBar extends React.Component{

    state = {term : []};

    onValueChange = event => {
        console.log(event.target.value);
        this.setState({ term : event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui from">
                    <div className="field">
                        <label>Search :</label>
                        <input 
                            type="file" 
                            webkitdirectory="true"
                            directory="true"
                            value={this.state.term}
                            onChange={this.onValueChange} 
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar