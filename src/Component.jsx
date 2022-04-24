import React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount = () => {
        const url = 'http://129.153.139.234/'
        // fetch(
        //   url,
        //   // {
        //   //   mode: 'no-cors',
        //   //   headers: { 'Content-Type': 'application/json' },
        //   // }
        // )
        // const credentialObj = {mode: 'no-cors'};
        fetch.apply(null, [url]).then(response => {
            return response.json();
          }).then(data => {
            this.setState({ value: data.data})
          }).catch(err => {
            console.error("Error Reading data " + err);
          });
    }

    render() {
        return (
        <div>
            From component {this.state.value}
        </div>
        );
    }
}
