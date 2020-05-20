import React, {Component} from 'react';
var createUserURL = '/createUser';
const modalRoot = document.getElementById('regmodal');
class RegModal extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            user: PropTypes.object.isRequired,
            fullForm: PropTypes.bool.isRequired,
            task: PropTypes.string.isRequired,
            textChanged: PropTypes.func.isRequired,
            save: PropTypes.func.isRequired,
            cancel: PropTypes.func.isRequired,
        };
    }
    render () {
        return ReactDOM.createPortal(
            <div>
                {this.props.children}
                <div className='column twelve wide'>
                    <div className="ui basic segment">
                        <h2  className="ui header">
                            <img className="ui image" src="public/img/logo.png"/>
                        </h2>
                        <div id="regmodal" className="ui form">

                            <div className="field">
                                <input
                                    id="email" placeholder="First Name"
                                    type="text"
                                    name="first_name"
                                    onChange={this.props.textChanged}
                                    value={this.props.user && this.props.user.first_name}/>
                                <span className="highlight"/><span className="bar"/>
                                <label></label>
                            </div>
                            <div className="field">
                                <input
                                    id="email" placeholder="Last Name"
                                    type="text"
                                    name="last_name"
                                    onChange={this.props.textChanged}
                                    value={this.props.user && this.props.user.last_name}/>
                                <span className="highlight"/><span className="bar"/>
                                <label></label>
                            </div>
                            <div className="field">
                                <input
                                    id="email" placeholder="Email"
                                    type="email"
                                    name="email"
                                    onChange={this.props.textChanged}
                                    value={this.props.user && this.props.user.email}/>
                                <span className="highlight"/><span className="bar"/>
                                <label></label>
                            </div>
                            <div className="field">
                                <input
                                    id="email"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={this.props.textChanged}
                                    value={this.props.user && this.props.user.password}/>
                                <span className="highlight"/><span className="bar"/>
                                <label></label>
                            </div>
                            <div className="ui buttons">
                                <button type="button"
                                        className="ui primary blue button"
                                        tabIndex="0"
                                        onClick={this.props.save}>That's It!</button>
                                <div className="or"></div>
                                <button type="button"
                                        className="ui red button"
                                        tabIndex="0"
                                        onClick={this.props.cancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            modalRoot,
        );
    }
}
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            values: {
                email: '',
                password: '',
                first_name: '',
                last_name: ''
            },
            showModal: false ,
        };


    }
    handleShowModal () {
        console.log("You have clicked on handleCreateAccount");
        this.setState({ showModal: true });
        $('#regmodal')
            .modal('setting', 'closable', false)
            .modal('setting', 'transition', 'fly right')
            .modal('show');
    }
    _handleCloseModal () {
        console.log("You have clicked on _handleCloseModal");
        this.setState({user: null, task: '', messageResponses: {message: '', type: 'info', hidden: false},showModal: false});
        $('#regmodal')
            .modal('hide')
            .modal('hide dimmer')
    }
    /* here we are creating the account, modal pops up and sets the task to create*/
    _handleCreateAccount (){
        $.ajax({
            url: createUserURL,
            method: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data) {
                data.user={}// user cannot be null, so we create an empty object
                this.setState({user: data, task: "Create", messageResponses:{message:'Add User problem ', type:'info', hidden:false}});
                this.handleShowModal();
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(createUserURL, status, err.toString());
            }.bind(this)
        });
    }
    /*here is after the modal has popped up and the user clicks on save button, this details need to be sent to the server*/
    _handleSaveClick () {
        var submitUrl;
        var myTask = this.state.task;
        console.log('The task is: '+myTask);
        if (myTask == 'Create') {

            submitUrl = saveUserURL;
        } else if (myTask == 'Update ') {
            submitUrl = updateVbaURL;
        }
        var params = JSON.stringify(this.state.user);
        console.log("The user is: "+params)
        $.ajax({
            async: true,
            url: submitUrl,
            contentType: "application/json; charset=utf-8",
            method: 'POST',
            headers: {
                "cache-control": "no-cache"
            },
            dataType: 'json',
            data: params,
            cache: false,

            success: function (data) {

                this.setState({
                        user: null,
                        task: "",
                        messageResponses: {message: data.message, type: data.type, hidden: false},
                    },
                    function () {
                        //then close the modal
                        this._handleCloseModal();
                    });

            }.bind(this),
            error: function (xhr, status, err) {
                console.log("form not sent" + err.toString());
            }.bind(this)
        });
    }
    _textChanged (event) {
        console.log("text changed");

        var values = this.state.user;
        values['' + event.target.name + ''] = event.target.value;
        this.setState({user: values});
        console.log("the values are" + JSON.stringify(values))
    }    
    render(){
        return(
            <div className="ui container">
                <div className="ui middle aligned center aligned grid">
                    <div className="column 12 wide">
                        <div className="ui segment">
                        <h2 id="fipsimage" className="ui header">
                            <img className="ui image" src="public/img/logo.png"/>

                        </h2>
                        {/* registration form modal goes here */}
                        <form id="loginForm" className="ui form" method="post" action="/login">
                            <div className="ui basic segment">
                            <div className="field">
                                    <input id="email" placeholder="Username" type="email" name="username"/>

                                    <span className="highlight"/><span className="bar"/>
                                    <label></label>

                            </div>
                            <div className="field">
                                    <input id="password" placeholder="Password" type="password" name="password"/>
                                    <span className="highlight"/><span className="bar"/>
                                    <label></label>
                                </div>

                                <button className="ui fluid blue   submit button">Login
                                    <div className="ripples buttonRipples">
                                        <span className="ripplesCircle"/>
                                    </div>
                                </button>
                            </div>
                            <div className="row">
                            <h2>Need an Account?</h2><a href="javascript:this._handleCreateAccount.bind(this);" className="lostPassword"><h2>Sign Up</h2></a>
                            </div>

                        </form>


                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default Login;