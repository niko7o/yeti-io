import React, { Component } from 'react';
import fire from '../../Fire';
import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            show: false,
            title: '',
            description: '',
            picture: '',
            list: [],
            keys: []
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    logout = () => {
        fire.auth().signOut();
    }

    show = () => {
        this.setState({ show: !this.state.show });
    }

    new = e => {
        this.setState({ loading: true });
        e.preventDefault();

        let title = this.state.title;
        let description = this.state.description;
        let picture = this.state.picture || '';

        const { currentUser } = fire.auth();
        fire.database()
            .ref('feed/')
            .push({
                title,
                description,
                picture,
                user: currentUser.email
            })
            .then(success => {
                this.setState({ 
                    loading: false, 
                    show: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    componentDidMount = () => {
        this.setState({ loading: true });
        
        fire.database()
            .ref('/feed/')
            .on('value', snapshot => {
                var obj = snapshot.val();
                var list = [];
                var keys = [];

                for (let a in obj) {
                    list.push(obj[a]);
                    keys.push(a);
                }

                // We reverse the list so that the last posts appear first in the feed
                const reversed = list.reverse(); 

                this.setState({
                    list: reversed,
                    keys: keys,
                    loading: false
                });
            });
    };

    render() {
        const listItems = this.state.list.map((item, index) => (
            <div key={index} className="Post">
                <p className="Post_user">Posted by {item.user}</p>
                {this.state.picture && this.state.picture !== '' ? (<img className="Post_image" src={item.picture} />) : null }
                <div className="Post_info">
                    <p className="Post_title">{item.title}</p>
                    <p className="Post_description">{item.description}</p>
                </div>
            </div>
        ));

        return (
            <div>
                { this.state.show ? (
                    <div>
                        <div>
                            <button onClick={this.show}>Hide</button>
                        </div>
                        <div className="Form_create">
                            <input value={this.state.title} onChange={this.handleChange} name="title" placeholder="Title.." />
                            <input value={this.state.description} onChange={this.handleChange} name="description" placeholder="Description.." />
                            <input value={this.state.picture} onChange={this.handleChange} name="picture" placeholder="Picture URL.." />
                            <button onClick={this.new} className="btn_submit">Submit Post</button>
                        </div>
                    </div>
                ) : null }

                {!this.state.show ? (
                    <button onClick={this.show} className="btn_create">Create post</button>
                ) : null }

                { this.state.loading ? (
                    <div className="preloader">Loading Home..</div>
                ) : null }

                <div className="cards">
                    { listItems }
                </div>
            </div>
        );
    }
}

export default Home;